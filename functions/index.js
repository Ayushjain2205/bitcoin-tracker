/* eslint-disable camelcase */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const firestore = admin.firestore();
const axios = require("axios");

const config = {
  method: "get",
  url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false",
  headers: { },
};


exports.bitcoinPrice = functions.pubsub
    .schedule("every 15 minutes")
    .onRun((context) => {
      axios(config)
          .then(function(response) {
            const data = response.data;
            const price = data[0].current_price;
            firestore
                .collection("bitcoin")
                .add({price: price, time: admin.firestore.Timestamp.now()});
          })
          .catch(function(error) {
            console.log(error);
          });

      return console.log("Updates value!");
    });
