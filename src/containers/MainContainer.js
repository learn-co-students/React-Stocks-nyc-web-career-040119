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
    let clickedStockId = parseInt(event.target.id)
    let clickedStock = this.state.stocks.find(stock => {return (stock.id === clickedStockId)?(stock):([])})
    this.setState({portfolio:this.clickedStock})
    this.handleFilterStockOut(event)
  }
  handleFilterStockOut(event){
    let stockId = parseInt(event.target.id)
    console.log(stockId)
    let remainingStocks = this.state.stocks.filter(stock => {return (stock.id !== stockId)?(stock):([])})
    console.log(remainingStocks);
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

              <PortfolioContainer/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
