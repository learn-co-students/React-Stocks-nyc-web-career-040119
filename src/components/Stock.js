import React from 'react'


const Stock = (props) => {
  console.log("Stock Props", props)

  return(
    <div>
      <div className="card"
       onClick={
         // props.stockContainer === true ?
         // ()=>props.addStock(props.stock) : ()=>props.removeStock(props.stock)
         ()=>props.handleClick(props.stock)
       }>
        <div className="card-body">
        <h5 className="card-title">{props.stock.name}</h5>
        <p className="card-text">{props.stock.price}</p>
        </div>
      </div>
    </div>

  )
};

export default Stock
