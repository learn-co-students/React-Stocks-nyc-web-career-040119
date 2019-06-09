import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor(){
    super()
    this.state = {
      stocks: [],
      portfolio:[],
      isABCSorted: false,
      isPriceSorted: false
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
    const stocksArr = [...this.state.stocks]
    const stockId = parseInt(event.target.parentElement.id)
    const sIndex = stockId-1
    const targetStock = stocksArr.slice(sIndex, stockId)
    this.setState({portfolio: [...this.state.portfolio, ...targetStock]})
  }
  handleDeleteStock = (event) => {
    const portfolioArr = [...this.state.portfolio]
    const portfolioId = parseInt(event.target.parentElement.id)
    const pIndex = portfolioId-1
    portfolioArr.splice(pIndex, 1)
    this.setState({portfolio: portfolioArr})
  }
  handleChangeABC = (onChange) => {
    const array = [...this.state.stocks]
    const sortedArray = array.sort(function(a, b) {
            let nameA = a.name.toUpperCase(); // ignore upper and lowercase
            let nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          })
    this.setState({
      isABCSorted:true,
      stocks: sortedArray
    })
  }
  handleChangePrice = (onChange) => {
    const array = [...this.state.stocks]
    const sortedByPrice = array.sort(function (a, b) {
      return a.price - b.price;
    })
    this.setState({
      isPriceSorted:true,
      stocks: sortedByPrice
    })
  }
  handleFilterStockByType = (event) => {
    let array = [...this.state.stocks]
    if (event.target.lastElementChild.value === "Tech") {
      let techArr = array;
      let tech = techArr.filter(stock => (stock.type === "Tech"))
      this.setState({stocks: [...tech]})
    }
    else if (event.target.lastElementChild.value === "Sportswear")
    {
      let sportArr = array;
      let sport = sportArr.filter(stock => (stock.type === "Sportswear"))
      this.setState({stocks: [...sport]})
    }
      else if(event.target.lastElementChild.value === "Finance") {
        let finArr = array;
        let finance = finArr.filter(stock => (stock.type === "Finance"))
        this.setState({stocks: [...finance]})
      }
      else {
        return this.setState({stocks:array})
      }


    if(event.target.lastElementChild.value === "Sportswear") {
      const array = [...this.state.stocks]
      let sports = array.filter(stock => (stock.type === "Sportswear"));
      return this.setState({stocks: this.sports})
    }

    if(event.target.lastElementChild.value === "Finance") {
      const array = [...this.state.stocks]
      let finance = array.filter(stock => (stock.type === "Finance"));
      return this.setState({stocks: finance})
    }
  }
  render() {
    return (
      <div>
        <SearchBar
          isABCSorted={this.state.isABCSorted}
          handleChangeABC={this.handleChangeABC}
          isPriceSorted={this.state.isPriceSorted}
          handleChangePrice={this.handleChangePrice}
          handleFilterStockByType={this.handleFilterStockByType}
          />

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
                handleDeleteStock={this.handleDeleteStock}
                />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
