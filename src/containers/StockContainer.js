import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.stocks ?
          this.props.stocks.map(stock => (
            <Stock
              handleClick={this.props.addToPortfolio}
              key={stock.id}
              id={stock.id}
              ticker={stock.ticker}
              name={stock.name}
              type={stock.type}
              price={stock.price} />
          )) : null
        }
      </div>
    );
  }

}

export default StockContainer;
