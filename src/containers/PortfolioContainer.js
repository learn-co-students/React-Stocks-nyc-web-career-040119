import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  renderPortfolioStocks = () => {
    console.log(this.props.portfolio);
    return this.props.portfolio.map(stock => (
      <Stock
        stock={stock}
        key={stock.id}
        />
    ))
  }
  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.renderPortfolioStocks()}
      </div>
    );
  }

}

export default PortfolioContainer;
