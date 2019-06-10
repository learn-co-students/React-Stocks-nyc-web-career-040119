import React from 'react'

const Stock = (props) => (
  <div onClick={(props.buyStock) ? props.buyStock : props.sellStock} id={props.id}>

    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.price}</p>
      </div>
    </div>


  </div>
);

export default Stock
