import React, {Component} from 'react'

class Stock extends Component {
  render(){
    const stock = this.props.stock
    return(
      <div onClick={this.props.handleStockClick}>
        <div className="card" >
          <div  className="card-body" id={stock.id}>
            <h5 className="card-title" key={stock.key}>{
              stock.name
              }</h5>
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
