import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.stocks ?
            this.props.stocks.map(stock => (
              <Stock
                handleClick={this.props.removeFromPortfolio}
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

export default PortfolioContainer;
