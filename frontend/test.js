import { useState, useEffect } from 'react';
import styled from 'styled-components';

function Test() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://10.0.0.201:4000/workingSet')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error('Error:', error));
  }, []);


  return (
    <table>
      <thead>
        <tr>
          <th>Weight</th>
          <th>Sets</th>
          <th>Reps2</th>
          {/* Add more <th> elements for each column in your data */}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td><button>test</button></td>
            <td>{item.weight}</td>
            <td>{item.sets}</td>
            <td>{item.reps}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Test;
