import React from 'react'

const Stock = (props) => {
  console.log("Stock props: ", props)

  const clickStock = (event) => {
    if (props.buyStocks) {
      props.buyStocks(event)
    }

    if (props.sellStocks) {
      props.sellStocks(event)
    }
  }

  const {name, price, ticker, type, id, stockNumber} = props.stock

  return (
    <div
      onClick={clickStock}
      key={name}
      data-stocknumber={stockNumber ? stockNumber : null}
      data-name={name}
      data-price={price}
      data-ticker={ticker}
      data-type={type}
      data-id={id}>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {
              props.stock.name
            }
          </h5>

          <p className="card-text">
            {
              props.stock.price
            }
          </p>
        </div>
      </div>


      </div>
  )
};

export default Stock
