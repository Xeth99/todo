import './App.css';
import { User } from './User';
import { useState } from 'react';

// conditional rendering in react


function App() {
  const [age, setAge] = useState(5);

  const increaseAge = () => {
    setAge(age + 1)
  }
  const isGreen = true;
  const users = [
    {name: "Kunle", age: 30},
    {name: "Sayo", age: 32},
    {name: "Tope", age: 34}
  ];
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  };

  const [textColor, setTextColor] = useState("black");
  const toggleTextColor = () => {
    setTextColor((prevColor) => (prevColor === "black" ? "red" : "black") )
  }

  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = ( )=> {
    setCount(count - 1)
  }

  const setZero = () => {
    setCount(0)
  }

  return (
    <div className="App">
        {/* Props */}
        {/* <User name="Kunle" age={30} email="kunle@gmail.com" />
        <User name="Sade" age={22} email="sade@gmail.com" /> */}
      


      <Job salary={100000} position="Software Engineer" company="Google" />

      {/* Conditional rendering */}
      {age >= 18 ? <div> Too old </div> : <div> Too young </div>}

      <div style={{color: isGreen ? "green" : "red"}}> This is a color </div>

      {users.map((user, key) => {
        return (
        <User name={user.name} age={user.age} />
        );
      })}

      {planets.map((planet, key) => planet.isGasPlanet && <h1>{planet.name}</h1>
      )}
      <div>{age}</div>
      <div><button onClick={increaseAge}>Click me</button></div> <br />

      <div><input type="text" onChange={handleInputChange}/>
      {inputValue}</div> <br />

      <button onClick={toggleTextColor}>Show/Hide</button>
      <h1 style={{color: textColor}}>Hi, my name is Pedro</h1>

      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={setZero}>Set to Zero</button>
      <div>{count}</div>
    </div>
  );
}

// Component with props
// const User = (props) => {
//   return (
//     <div>
//       {props.name}
//       {props.age}
//       {props.email}
//     </div>
//   )
// }

const Job = (props) => {
  return (
    <>
    {props.salary}
    {props.position}
    {props.company}
    </>
  ) 
}





export default App;
