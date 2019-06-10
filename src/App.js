import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

  constructor(){
    super()
    this.state = {
      stocks:[],
      portfolio:[]
    }
  }

  handleBuy = (e) => {

    const clickedStock = this.state.stocks.filter( (stock) => {
      return stock.id === parseInt(e.target.id)
    })

    this.setState({
      portfolio:[...this.state.portfolio, clickedStock[0]]
    })

  }

  handleSell = (e) => {

    const keepThese = this.state.portfolio.filter( (stock) => {
      return stock.id !== parseInt(e.target.id)
    })

    this.setState({
      portfolio: keepThese
    })

  }

  componentWillMount(){
    console.log("Initial mount")
    fetch('http://localhost:3000/stocks')
    .then( res => res.json())
    .then( stocks => {
      this.setState({
        stocks:stocks
      })
    })
  }

  handleFilter = (e) => {

    const target = e.target.value

    if(target === "Alphabetically"){
      console.log(this.state)

      const sorted = this.state.stocks.sort( (a,b)=>{
        if (a.name < b.name) {
           return -1;
         }
         if (a.name > b.name) {
           return 1;
         }
      })

      this.setState({
        stocks: sorted
      })


    }else if( target === "Price") {

      const sorted = this.state.stocks.sort( (a,b)=>{
        // debugger
        return a.price - b.price
      })

      this.setState({
        stocks: sorted
      })

    }
  }
    handleDrop = (e) => {
      const target = e.target.value

      const filtered = this.state.stocks.filter((stock)=>{
        return stock.type === target
      })

      this.setState({
        stocks:filtered
      })

    }

  render() {
    return (
      <div>
        <Header/>
        <MainContainer
          stocks={this.state.stocks}
          handleBuy={this.handleBuy}
          portfolio={this.state.portfolio}
          handleSell={this.handleSell}
          handleFilter={this.handleFilter}
          handleDrop={this.handleDrop}
        />
      </div>
    );
  }
}

export default App;
