import React, {Component} from 'react';

class SearchBar extends Component {

  render(){
    return(
      <div>

      <strong>Sort by:</strong>
      <label>
      <input type="radio" value="Alphabetically" checked={null} onChange={(event) => this.props.handleChangeABC(event)}/>
      Alphabetically
      </label>
      <label>
      <input type="radio" value="Price" checked={null} onChange={(event) => this.props.handleChangePrice(event)}/>
      Price
      </label>
      <br/>

      <label>
      <strong>Filter:</strong>
      <select onChange={this.props.handleFilterStockByType}>
      <option value="Unfiltered">Unfiltered</option>
      <option value="Tech">Tech</option>
      <option value="Sportswear">Sportswear</option>
      <option value="Finance">Finance</option>
      </select>
      </label>


      </div>




    )
  }
}


export default SearchBar;
