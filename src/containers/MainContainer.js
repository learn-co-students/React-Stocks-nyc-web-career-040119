import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    //console.log(this.props)//has access to all stocks
    // console.log(this.props.handleBuy)

    return (
      <div>
        <SearchBar
          handleFilter={this.props.handleFilter}
          handleDrop={this.props.handleDrop}
          />

          <div className="row">
            <div className="col-8">

              <StockContainer
                stocks={this.props.stocks}
                handleBuy={this.props.handleBuy}
                />

            </div>
            <div className="col-4">

              <PortfolioContainer
                portfolio={this.props.portfolio}
                handleSell={this.props.handleSell}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
