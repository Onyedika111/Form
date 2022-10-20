import { PropTypes } from "prop-types";
import "./App.css";
import Info from "./Info";
import { useState } from "react";
import SearchBar from "./SearchBar";
import AddItem from "./AddItem";
import ItemsDisplay from "./ItemsDisplay";
import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => (props.color ? props.color : "yellow")};
`;

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const addItemToData = (item) => {
    let items = data["items"];
    item.id = items.length;
    items.push(item);
    setData({ items: items });
    console.log(data);
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <ItemsDisplay items={data["items"]} />
      </div>
      <div className="row mt-3">
        <SearchBar updateSearchParams={updateFilters} />
      </div>
      <div className="row mt-3">
        <AddItem addItem={addItemToData} />
      </div>

      {/* <Title color="red">test</Title> */}
      {/* <p>Name: {'name' in data ? data['name'] : 'No data to display'}</p>
    <p>Max Price: {'price' in data ? data['price'] : 'No data to display'}</p>
    <p>Type: {'type' in data ? data['type'] : 'No data to display'}</p>
    <p>Name: {'brand' in data ? data['brand'] : 'No data to display'}</p> */}

      {/* <Info title="Inventory" /> */}
      {/* <AddItem text="tim" number={0} />
    <AddItem text="tim" />
    <AddItem text="tim" />
    <ButtonState /> */}
    </div>
  );
}

// function AddItem(props) {
//   const value = props.text;
//   return (
//     <form>
//       <label for="text-form"> Type Something</label>
//       <input type="text" value={value} id="text-form" />
//       <p>{props.number}</p>
//     </form>
//   );
// }

// AddItem.defaultProps = {
//   number: 5,
// };

// AddItem.propTypes = {
//   number: PropTypes.number,
//   text: PropTypes.string,
// };

// function ButtonState() {
//   const [title, setTitle] = useState("");
//   const [count, setCount] = useState(0);

//  const updateTitle = () => {
//     setTitle("We now have a title");
//   };

//   const updateCounter = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <Data title={title} count={count } />
//       <button onClick={updateTitle}>Update Title</button>
//       <button onClick={updateCounter}>Update Counter</button>
//     </div>
//   );
// }

// function Data(props) {
//   return (
//     <div>
//       <p> Title: {props.title}</p>
//       <p> Count: {props.count} </p>
//     </div>
//   )
// }

// function Info() {
//   const title = "This is my Title"
//  const showTitle = false
//   if (showTitle) {
//     return <div>
//       <h1>{ title}</h1>
//      </div>
//   } else {
//     return <div>
//       <h1>empty</h1>
//    </div>
//    }

//    }

export default App;
