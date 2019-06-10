import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  portfolioList = () => {
    return this.props.stocks.map(stock=>{
      return <Stock
        handleBuySell={this.props.sellStock}
        stock={stock}
        key={stock.id}/>
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.portfolioList()}
      </div>
    );
  }

}

export default PortfolioContainer;
