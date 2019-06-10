import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    console.log('PortfolioContainer props portfolio', this.props.portfolio);
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.props.createPortfolio()}
      </div>
    );
  }

}

export default PortfolioContainer;
