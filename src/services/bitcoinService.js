import { firestore } from "../firebase";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";

export const latestPrice = async () => {
  // Get all records
  const priceRef = collection(firestore, "bitcoin");
  const price = await getDocs(priceRef);

  const all_prices = price.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  // Sort records by timestamp
  all_prices.sort(function (x, y) {
    return x.time - y.time;
  });

  // return latest record
  return all_prices.pop();
};

export const lastTenPrices = async () => {
  // Get all records
  const priceRef = collection(firestore, "bitcoin");
  const price = await getDocs(priceRef);

  const all_prices = price.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  // Sort records by timestamp
  all_prices.sort(function (x, y) {
    return x.time - y.time;
  });

  // return latest record
  return all_prices.slice(-10);
};
