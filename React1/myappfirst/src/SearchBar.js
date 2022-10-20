import React from "react";
import { useState } from "react";
function SearchBar(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const searchPress = () => {
    props.updateSearchParams({
      name: name,
      price: price,
      type: type,
      brand: brand,
    });
  };
  return (
    <div className="container">
      <div className="row">
        <h2> Search For an Item</h2>
      </div>
      <div className="row">
        <div className="col">
          <label htmlfor="name-field"> Name: </label>
          <input
            type="text"
            id="name-field"
            value={name}
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="col">
          <label htmlfor="price-field"> Max Price: </label>
          <input
            type="number"
            id="price-field"
            value={price}
            className="form-control"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="col">
          <label htmlfor="type-field"> Type: </label>
          <input
            type="text"
            id="type-field"
            className="form-control"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>

        <div className="col">
          <label htmlfor="brand-field"> Brand: </label>
          <input
            type="text"
            id="brand-field"
            className="form-control"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-4"/>
        <button
          className="btn btn-primary mt-3 col-4 "
          type="button"
          onClick={searchPress}
        >
          Search
        </button>
      </div>
      {/* <p>Name: {name}</p>
      <p>Price: {price}</p>
      <p>Type: {type}</p>
      <p>Brand: {brand}</p> */}
    </div>
  );
}

export default SearchBar;
