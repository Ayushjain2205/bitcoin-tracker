import React from "react";

function Bitcoin({ price, time }) {
  return (
    <div className='bitcoin-price'>
      <div className='top-row'>
        <div className='bitcoin-icon'>
          <i class='fa-brands fa-bitcoin fa-7x'></i>
        </div>
        <h1>${price}</h1>
      </div>
      <div className='bottom-row'>
        <span>Last updated at @ {time}</span>
      </div>
    </div>
  );
}

export default Bitcoin;
