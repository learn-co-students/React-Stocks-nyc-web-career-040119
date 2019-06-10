import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const API = 'http://localhost:3000/stocks'

class MainContainer extends Component {
  state = {
    stocks: [],

    filteredStocks: [],
    filtered: false,

    boughtStocks: [],

    sortByAbc: false,
    sortByPrice: false
  }

  componentDidMount() {
    fetch(API)
      .then(r => r.json())
      .then(stocks => {
        this.setState({ stocks })
      })
  }

  // HELPER FUNCTIONS
  buyStocks = (event) => {
    // create a copy of current state
    const stocksCopy = [...this.state.stocks]
    const boughtStocksCopy = [...this.state.boughtStocks]

    // destructure event
    const {name, ticker, price, type} = event.currentTarget.dataset

    // create a newStock object
    const newStock = stocksCopy.find(stock => stock.name === name)

    // setState to include newStock
    this.setState({
      boughtStocks: [...boughtStocksCopy, newStock]
    })
  } // end buyStocks

  sellStocks = (event) => {
    // create a copy of current state
    const boughtStocksCopy = [...this.state.boughtStocks]

    // destructure event
    const {name, ticker, price, type} = event.currentTarget.dataset

    // filter out the selected stock that was passed back as an event
    const soldStock = boughtStocksCopy.filter(stock => {
      return stock.name !== name
    })

    console.log("soldStock", soldStock)
    this.setState({
      boughtStocks: [...soldStock]
    })
  } // end sellStocks

  sortAlphabetically = (event) => {
    const sort = this.sortStocks(event)

    this.setState({
      filteredStocks: [...sort],
      filtered: true,
      sortByAbc: !this.state.sortByAbc,
      sortByPrice: false
    })
  }

  sortPrice = (event) => {
    const sort = this.sortStocks(event)

    this.setState({
      filteredStocks: [...sort],
      filtered: true,
      sortByPrice: !this.state.sortByPrice,
      sortByAbc: false
    })
  }

  filterStocks = (event) => {
    const stockCopy = [...this.state.stocks]

    const filtered = stockCopy.filter(stock => stock.type === event.target.value)

    // if All, use the regular copy, else use filtered
    if (event.target.value === "All") {
      this.setState({
        filteredStocks: [...stockCopy],
        filtered: false
      })
    } else {
      this.setState({
        filteredStocks: [...filtered],
        filtered: true
      })
    }
  } // end filterStocks

  sortStocks = (event) => {
    // make a copy of stocks then sort the array
    // const unsorted = [...this.state.stocks]
    console.log("filtered stocks", this.state.filteredStocks)
    let unsorted = []

    if (this.state.filtered) {
      unsorted = [...this.state.filteredStocks]
    }
    if (!this.state.filtered) {
      unsorted = [...this.state.stocks]
    }

    let sorted = []

    switch (event.target.value) {
      case ("Alphabetically"):
        sorted = unsorted.sort((a, b) => a.name.localeCompare(b.name))
        return sorted
        break
      case ("Price"):
        sorted = unsorted.sort((a, b) => a.price - b.price)
        return sorted
        break
    }
  } // end sortStocks

  // end HELPER FUNCTIONS

  render() {
    console.log("MainContainer state: ", this.state)
    return (
      <div>
        <SearchBar
          filterStocks={this.filterStocks}
          sortAlphabetically={this.sortAlphabetically}
          sortStocks={this.sortStocks}
          sortPrice={this.sortPrice}
          sortByAbc={this.state.sortByAbc}
          sortByPrice={this.state.sortByPrice} />

          <div className="row">
            <div className="col-8">

              <StockContainer
                sortByAbc={this.state.sortByAbc}
                stocks={this.state.filtered ? this.state.filteredStocks : this.state.stocks}
                buyStocks={this.buyStocks} />

            </div>
            <div className="col-4">

              <PortfolioContainer
                boughtStocks={this.state.boughtStocks}
                sellStocks={this.sellStocks} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
