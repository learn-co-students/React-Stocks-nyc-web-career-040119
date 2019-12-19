import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  stockList = () => {
    return this.props.stocks.map(stock=>{
      return <Stock
        handleBuySell={this.props.buyStock}
        stock={stock}
        key={stock.id}/>
    })
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
          {this.stockList()}
      </div>
    );
  }

}

export default StockContainer;
