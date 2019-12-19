import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
const API = `http://localhost:3000/stocks`

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    filterBy: ''
  }

  componentDidMount() {
    fetch(API)
    .then(r=>r.json())
    .then(stocks=>{
      this.setState({
        stocks
      })
    })
  }

  buyStock = (e) => {
    let stock = this.state.stocks.find(s => {
      return s.id === parseInt(e.currentTarget.id)
    })
    let bought = this.state.stocks.filter(s=>s!==stock)
    this.setState({
      stocks: bought,
      portfolio: [...this.state.portfolio, stock]
    })
  }

  sellStock = (e) => {
    let stock = this.state.portfolio.find(s => {
      return s.id === parseInt(e.currentTarget.id)
    })
    let sold = this.state.portfolio.filter(s=>s!==stock)
    this.setState({
      stocks: [...this.state.stocks, stock],
      portfolio: sold
    })
  }

  filterMe = (e) => {
    this.setState({
      filterBy: e.target.value
    })
  }

  sortMe = (e) => {
    this.setState({
      stocks: this.state.stocks.sort((a,b)=>{
        if (e.target.value === "Alphabetically") {
          return a.name.localeCompare(b.name)
        } else {
          return a.price - b.price
        }
      }),
      portfolio: this.state.portfolio.sort((a,b)=>{
        if (e.target.value === "Alphabetically") {
          return a.name.localeCompare(b.name)
        } else {
          return a.price - b.price
        }
      })
    })
  }

  render() {
    const { stocks, portfolio } = this.state

    const filteredStocks =  this.state.stocks.filter(s => {
      return (s.type.includes(this.state.filterBy))
    })

    const filteredPortfolio =  this.state.portfolio.filter(s => {
      return (s.type.includes(this.state.filterBy))
    })

    return (
      <div>
        <SearchBar
          sortMe={this.sortMe}
          filterMe={this.filterMe}/>

          <div className="row">
            <div className="col-8">

              <StockContainer
                buyStock={this.buyStock}
                stocks={filteredStocks.length > 0 ? filteredStocks : stocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer
                sellStock={this.sellStock}
                stocks={filteredPortfolio.length > 0 ? filteredPortfolio : portfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
