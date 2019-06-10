import React from 'react'

const Stock = ({id, ticker, name, type, price, handleClick}) => (
  <div>

    <div id={id} className="card" onClick={handleClick}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{price}</p>
      </div>
    </div>


  </div>
);

export default Stock
