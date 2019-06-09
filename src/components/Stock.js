import React, {Component} from 'react'

class Stock extends Component {
  render(){
    const stock = this.props.stock
    return(
      <div onClick={(event) => {this.props.handleStockClick(event)}}>
        <div className="card" >
          <div  className="card-body" id={stock.id}>
            <h5 className="card-title">
            {stock.name}</h5>
            <p  className="card-text" >
              {stock.ticker}: {stock.price}
            </p>
          </div>
        </div>
      </div>
    )
  }
}


export default Stock
