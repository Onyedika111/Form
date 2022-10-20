import React from "react";

function ItemsDisplay(props) {
  const showItem = (item) => {
    return (
      <tr>
        <th scope="row">Id: {item.id}</th>
        <td> {item.name}</td>
        <td>{item.price}</td>
        <td> {item.type}</td>
        <td> {item.brand}</td>
      </tr>
    );
  };

  return (
    <div className="container">
      <div className="row">
        {" "}
        <h2>Items</h2>
      </div>
      <div className="row">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NAME</th>
              <th scope="col">PRICE</th>
              <th scope="col">TYPE</th>
              <th scope="col">BRAND</th>
            </tr>
          </thead>
          <tbody> {props.items.map(showItem)}</tbody>
        </table>
      </div>
    </div>
  );
}

export default ItemsDisplay;
