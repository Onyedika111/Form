import React from "react";
import { useState } from "react";

function AddItem(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const addItemPress = () => {
    props.addItem({
      name: name,
      price: price,
      type: type,
      brand: brand,
    });

    setName("");
    setPrice(0);
    setType("");
    setBrand("");
  };
  return (
    <div className="container">
      <div className="row">
        <h2> Add a Item</h2>
      </div>

      <div className="row">
        <label htmlfor="name-field"> Name: </label>
        <input
          type="text"
          id="name-field"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlfor="price-field"> Price: </label>
        <input
          type="number"
          id="price-field"
          className="form-control"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlfor="type-field"> Type: </label>
        <input
          type="text"
          id="type-field"
          className="form-control"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlfor="brand-field"> Brand: </label>
        <input
          type="text"
          id="brand-field"
          value={brand}
          className="form-control"
          onChange={(e) => setBrand(e.target.value)}
        />
      </div>
      <div className="row mt-3">
        <button type="button"className="btn btn-primary" onClick={addItemPress}>
          AddItem
        </button>
      </div>

      {/* <p>Name: {name}</p>
      <p>Price: {price}</p>
      <p>Type: {type}</p>
      <p>Brand: {brand}</p> */}
    </div>
  );
}

export default AddItem;
