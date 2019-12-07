import React from 'react';
import logo from './logo.svg';
import './App.css';


export const Button = (props) => {
  return (
  <button className="btn">{props.children}</button>
  )
}



function App() {
  return (
    <div className="App">
      <Button>Click</Button>
    </div>
  );
}

export default App;
