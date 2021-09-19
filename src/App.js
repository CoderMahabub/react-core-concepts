import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Counter></Counter>
      <MyComponent brand="Apple" price="5000"></MyComponent>
      <MyComponent brand="Microsoft" price="10000"></MyComponent>
      <MyComponent brand="Google" price="2000"></MyComponent>
    </div>
  );
}

function MyComponent(props) {
  const [points, setPoints] = useState(1);
  const myStyle = {
    backgroundColor: "lightblue",
    border: "3px solid blue",
    margin: "10px",
    padding: "5px",
    borderRadius: "10px",
  };
  const handleAddPoints = () => {
    const newPoints = points * 2;
    setPoints(newPoints);
    // setPoints(points * 2);
  };
  const handleRemovePoints = () => {
    setPoints(points / 2);
  };
  return (
    <div className="button" style={myStyle}>
      <h1>Yo Yo Mama! My own component, Brand Name: {props.brand}</h1>
      <h4>
        Asking Price: {props.price}, Total Points: {points}
      </h4>
      <button onClick={handleAddPoints}>Add Points</button>
      <button onClick={handleRemovePoints}>Remove Points</button>
      <p style={{ color: "red", fontWeight: "bold" }}>
        I can write my own component
      </p>
    </div>
  );
}

// Counter Related Job
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrese = () => setCount(count + 1);
  const handleDecrese = () => setCount(count - 1);
  return (
    <div className="button">
      <h3>
        Counter: <span>{count}</span>
      </h3>
      <button onClick={handleIncrese}>Increase</button>
      <button onClick={handleDecrese}>Decrease</button>
    </div>
  );
}

export default App;
