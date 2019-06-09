import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor(){
    super()
    this.state = {
      stocks: [],
      portfolio:[]
    }
  }

  componentWillMount = () => {
    const stocksUrl = 'http://localhost:3000/stocks'
    fetch(stocksUrl)
      .then(r => r.json())
      .then( stocks => {
        this.setState({stocks: [...stocks]})
    })
  }
  handleStockClick = (event) => {
    const array = [...this.state.stocks]
    const stockId = parseInt(event.target.parentElement.id)
    const stockIndex = stockId-1
    const targetStock = array.slice(stockIndex, stockId)
    return this.setState({portfolio: [...this.state.portfolio, ...targetStock]})
    console.log(array)
    debugger
  }

  render() {
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer
                stocks={this.state.stocks}
                handleStockClick={this.handleStockClick}
                />
            </div>
            <div className="col-4">

              <PortfolioContainer
                portfolio={this.state.portfolio}

                />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
