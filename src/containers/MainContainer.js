import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
import Stock from '../components/Stock'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    filterBy: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(r=>r.json())
    .then(stocks=>{
      this.setState({stocks})
    })
  }

  createPortfolio = () => {
    return this.state.portfolio.map(stock => {
      return <Stock key={stock.id} name={stock.name} id={stock.id} price={stock.price} sellStock={this.sellStock}/>
    })
  }

  buyStock = (e) => {
    let clickedStock = this.state.stocks.find(stock => {
      return stock.id === parseInt(e.currentTarget.id)
    })
    let newStocks = this.state.stocks.filter(stock => {
      return stock.id !== parseInt(e.currentTarget.id)
    })
    let newPortfolio = [...this.state.portfolio, clickedStock]
    this.setState({
      stocks: newStocks,
      portfolio: newPortfolio
    })
  }

  sellStock = (e) => {
    let clickedStock = this.state.portfolio.find(stock=>{
      return stock.id === parseInt(e.currentTarget.id)
    })
    let newPortfolio = this.state.portfolio.filter(stock => {
      return stock.id !== parseInt(e.currentTarget.id)
    })
    let newStocks = [...this.state.stocks, clickedStock]
    this.setState({
      stocks: newStocks,
      portfolio: newPortfolio
    })
  }

  sortByName = () => {
    let sortedStocks = [...this.state.stocks].sort((a,b)=>{
      return a.name.localeCompare(b.name)
    })
    this.setState({stocks: sortedStocks})
  }

  sortByPrice = () => {
    let sortedStocks = [...this.state.stocks].sort((a,b)=>{
      return a.price - b.price
    })
    this.setState({stocks: sortedStocks})
  }

  filterByType = (e) => {
    // let filteredStocks = [...this.state.stocks].filter(stock=>{
    //   return stock.type === e.target.value
    // })
    // this.setState({stocks: filteredStocks})
    this.setState({filterBy: e.target.value})
  }

  render() {
    console.log('MainContainer state', this.state);
    const filteredStocks = this.state.stocks.filter(stock=>{
      return stock.type.includes(this.state.filterBy)
    })
    return (
      <div>
        <SearchBar sortByName={this.sortByName} sortByPrice={this.sortByPrice} filterByType={this.filterByType}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={filteredStocks.length>0 ? filteredStocks : this.state.stocks} createStocks={this.createStocks} buyStock={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio}
              createPortfolio={this.createPortfolio}
              sellStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
