import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  // HELPER FUNCTIONS
  allStocks = () => {
    return this.props.stocks.map(stock => {
      console.log("allStocks stock:", stock)
      return (
        <div>
          <Stock
            key={stock.id}
            stock={stock}
            buyStocks={this.props.buyStocks} />
        </div>
      )
    })
  } // end allStocks

  // // end HELPER FUNCTIONS

  render() {
    console.log("StockContainer props: ", this.props)
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.allStocks()
        }
      </div>
    );
  }

}

export default StockContainer;
