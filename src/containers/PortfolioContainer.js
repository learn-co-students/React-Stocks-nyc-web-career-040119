import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  portList = () => {

    // console.log(this.props.portfolio)

    return this.props.portfolio.map( (stock) => {
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
      <div onClick={this.props.handleSell}>
        <h2>My Portfolio</h2>
          {
            this.portList()
            //render your portfolio stocks here
          }
      </div>
    );
  }

}

export default PortfolioContainer;
