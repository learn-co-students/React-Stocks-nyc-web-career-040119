import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {



  // RENDER ALL STOCKS
  renderStocks = () => {
    return this.props.stocks.map(stock => {
      return <Stock
        key={stock.id}
        stock={stock}
        handleClick={this.props.addStock}
        // stockContainer={true}
      />
    })
  } // END RENDERING



  render() {
    console.log("Stock Container Props", this.props)
    return (
      <div>
        <h2>Stocks</h2>
        {this.renderStocks()}
      </div>
    );
  }

}

export default StockContainer;
