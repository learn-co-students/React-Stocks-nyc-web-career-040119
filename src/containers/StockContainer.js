import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  renderStocks = () => {
    return this.props.stocks.map(stock => (
      <Stock
        stockId={stock.id}
        ticker={stock.ticker}
        name={stock.name}
        type={stock.type}
        price={stock.price}
      />
    ))
  }
  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.renderStocks()}
      </div>
    );
  }

}

export default StockContainer;
