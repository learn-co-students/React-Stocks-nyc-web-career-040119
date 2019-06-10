import React from 'react';

const SearchBar = ({Alphabetically, Price, handleSearchSort, handleSearchFilter}) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={Alphabetically} onChange={handleSearchSort}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={Price} onChange={handleSearchSort}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={handleSearchFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
