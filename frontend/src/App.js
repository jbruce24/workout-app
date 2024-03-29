import { useState, useEffect } from 'react';
import styled from 'styled-components';

function User() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://10.0.0.201:4000/movement')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error('Error:', error));
  }, []);


  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Function</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td><button>Select</button></td>
            <td>{item.Name}</td>
            <td>{item.Function}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default User;
