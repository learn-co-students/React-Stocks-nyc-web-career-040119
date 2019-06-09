import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  renderPortfolioStocks = () => {
    return this.props.portfolio.map(stock => {
      return(
  <div key={stock.id} onClick={(event)=>{this.props.handleDeleteStock(event)}}><Stock
        stock={stock}
        key={stock.index}
        handleDeleteStock={this.props.handleDeleteStock}
        />
      </div>)
    })
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
