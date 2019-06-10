import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks: [],
    filteredStocks: [],
    myStocks: [],
    Alphabetically: false,
    Price: false
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
      .then(r => r.json())
      .then(stocks => this.setState({stocks}))
  }


  //////////////////////////////
  addToPortfolio = e => {
    const addStock = this.state.stocks.find(stock => (
      stock.id === parseInt(e.currentTarget.id, 10)
    ))

    if (this.state.myStocks.find(stock => stock.id === addStock.id)) {
      const myStocksCopy = [...this.state.myStocks]
      const i = myStocksCopy.findIndex(stock => stock.id === parseInt(e.currentTarget.id, 10))

      myStocksCopy[i] = {...myStocksCopy[i]}
      myStocksCopy[i].price += addStock.price

      this.setState({myStocks: myStocksCopy})
    } else {
      this.setState({myStocks: [...this.state.myStocks, addStock]})
    }
  }


  //////////////////////////////
  removeFromPortfolio = e => {
    const addStock = this.state.stocks.find(stock => (
      stock.id === parseInt(e.currentTarget.id, 10)
    ))

    const myStocksCopy = [...this.state.myStocks]
    const i = myStocksCopy.findIndex(stock => stock.id === parseInt(e.currentTarget.id, 10))

    myStocksCopy[i] = {...myStocksCopy[i]} // OBJECTS PASS BY REFERENCE
    myStocksCopy[i].price -= addStock.price // THIS WILL OVERWRITE STOCKS UNLESS DEEP COPY

    if (myStocksCopy[i].price > 0) {
      this.setState({myStocks: myStocksCopy})
    } else {
      const myStocksWithoutStock = myStocksCopy.filter(stock => stock.price > 0)
      this.setState({myStocks: myStocksWithoutStock})
    }
  }


  //////////////////////////////
  handleSearchSort = e => {
    const valToChange = e.currentTarget.value
    const valDontChange = (e.currentTarget.value === "Alphabetically" ? "Price" : "Alphabetically")
    this.setState({[valToChange]: true, [valDontChange]: false}, () => {
      if (this.state.Alphabetically) {
        this.setState({
          filteredStocks: [...this.state.stocks].sort((a,b) => a.name.localeCompare(b.name))
        })
      } else {
        this.setState({
          filteredStocks: [...this.state.stocks].sort((a,b) => a.price - b.price)
        })
      }
    })
  }


  //////////////////////////////
  handleSearchFilter = e => {
    const filterType = e.target.value

    this.setState({
      filteredStocks: [...this.state.stocks].filter(state => state.type === filterType),
      Price: false,
      Alphabetically: false
    })
  }


  //////////////////////////////
  render() {
    return (
      <div>
        <SearchBar
          Alphabetically={this.state.Alphabetically}
          Price={this.state.Price}
          handleSearchSort={this.handleSearchSort}
          handleSearchFilter={this.handleSearchFilter} />

          <div className="row">
            <div className="col-8">

              <StockContainer
                stocks={
                  this.state.filteredStocks.length > 0 ?
                  this.state.filteredStocks :
                  this.state.stocks
                }
                addToPortfolio={this.addToPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer
                stocks={this.state.myStocks}
                removeFromPortfolio={this.removeFromPortfolio} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
