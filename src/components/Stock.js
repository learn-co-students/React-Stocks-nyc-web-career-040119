import React from 'react'

const Stock = (props) => (
  <div>

    <div className="card">
      <div className="card-body" id={props.id}>

        <h5 className="card-title" id={props.id}>{
            //Company Name
          props.name

          }</h5>
        <p className="card-text" id={props.id}>{
            //ticker: stock price
            `${props.ticker} : ${props.price}`
          }</p>
      </div>
    </div>


  </div>
);

export default Stock
