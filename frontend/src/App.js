import { useState, useEffect } from 'react';
import styled from 'styled-components';

function User() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/workingSet')
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
          <th>Reps</th>
          {/* Add more <th> elements for each column in your data */}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.weight}</td>
            <td>{item.sets}</td>
            <td>{item.reps}</td>
            {/* Add more <td> elements for each column in your data */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default User;
