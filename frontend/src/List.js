import React, { useState, useEffect } from 'react';
import './App.css';
function List() {
    /*const [items, setItems] = useState([]);
  
    useEffect(() => {
      fetch('http://server:4000/users') // replace with your API endpoint
        .then(response => response.json())
        .then(data => setItems(data));
    }, []); // empty dependency array means this effect runs once on mount
  
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li> // replace `item.name` with the actual property you want to display
        ))}
      </ul>
    );
  }*/
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit<code>App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
  
  export default List;