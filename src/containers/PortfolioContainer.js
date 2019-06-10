import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  portfolioStocks = () => {
    return this.props.boughtStocks.map(stock => {
      return (
        <div>
          <Stock
            key={stock.name}
            stock={stock}
            sellStocks={this.props.sellStocks} />
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.portfolioStocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
