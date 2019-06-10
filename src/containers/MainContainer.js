import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      stocks : [],
      portfolio: [],
      // filtered: [],
      filter: ''
    }
  }

  // FETCH STOCK DATA FROM DATABASE
  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(response => response.json())
    .then(stocks => {
      console.log(stocks)
      this.setState({
        stocks: stocks
      })
    })
  } // END FETCHING


  // ADD STOCK TO THE PORTFOLIO
  addStock = (stock) => {
    const stocksCopy = [...this.state.stocks]
    const filtered = stocksCopy.filter(theStock => {
      return theStock.name !== stock.name
    })

    this.setState({
      stocks: filtered,
      portfolio: [...this.state.portfolio, stock]
    })
  } // END ADDING


  // REMOVE STOCK FROM PORTFOLIO
  removeStock = (stock) => {
    const portfolioCopy = [...this.state.portfolio]
    const filtered = portfolioCopy.filter(theStock => {
      return theStock.name !== stock.name
    })

    this.setState({
      stocks: [...this.state.stocks, stock],
      portfolio: filtered
    })
  } // END REMOVING


  sortStocks = (e) => {
    // console.log(e.target)
    const sorted = [...this.state.stocks]
    if (e.target.value === 'Price') {
      sorted.sort((stock1, stock2) => {
        return stock1.price - stock2.price
      })
    } else if(e.target.value === 'Alphabetically'){
      sorted.sort((stock1, stock2) => {
        return stock1.name.toLowerCase().localeCompare(stock2.name.toLowerCase())
      })
    }

    this.setState({
      stocks: sorted
    })
  }

  filterStock = (e) => {
    // console.log(e.target.value)
    // const filtered = this.state.stocks.filter(stock => {
    //   return stock.type === e.target.value
    // })
    this.setState({
      // filtered: filtered
      filter : e.target.value
    })
  }

  render() {
    console.log("Main Container state", this.state)
    return (
      <div>
        <SearchBar
          sortStocks={this.sortStocks}
          filterStock={this.filterStock}/>

          <div className="row">
            <div className="col-8">

              <StockContainer
                stocks={
                  // this.state.filtered.length === 0 ? this.state.stocks : this.state.filtered
                  this.state.filter.length === 0 ? this.state.stocks :
                  this.state.stocks.filter(stock => {
                    return stock.type === this.state.filter
                  })
                }
                addStock={this.addStock}
                />
            </div>
            <div className="col-4">

              <PortfolioContainer
                portfolio={this.state.portfolio}
                removeStock={this.removeStock}
                />
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
