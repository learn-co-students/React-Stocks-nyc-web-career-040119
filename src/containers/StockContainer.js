import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  createStocks = () => {
    return this.props.stocks.map(stock => {
      return <Stock key={stock.id} name={stock.name} id={stock.id} price={stock.price} buyStock={this.buyStock}/>
    })
  }

  render() {
    console.log('StockContainer props', this.props.stocks);
    return (
      <div>
        <h2>Stocks</h2>
        {this.createStocks()}
      </div>
    );
  }

}

export default StockContainer;
