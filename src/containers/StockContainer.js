import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
// id: 1,
// ticker: "GOOG",
// name: "Google",
// type: "Tech",
// price: 1194.8
  stockList = () => {

    return this.props.stocks.map( (stock) => {
      return (
        <Stock
          key={stock.id}
          id={stock.id}
          ticker={stock.ticker}
          name={stock.name}
          type={stock.type}
          price={stock.price}
        />)
    })

  }

  render() {
    return (
      <div onClick={this.props.handleBuy}>
        <h2>Stocks</h2>
        {
          this.stockList()
        }
      </div>
    );
  }

}

export default StockContainer;
