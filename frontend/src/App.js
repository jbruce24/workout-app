import { response } from 'express';
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
  console.log(data);
  var movementId = response.json({id: 1});
  console.log(movementId);

  const [movement, setMovement] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/movement/'+ movementId)
    .then(response => response.json())
    .then(movement => setMovement(movement))
    .catch(error => console.error('Error:', error));
  }, [movementId]);

  const combinedData = movement.map(movementItem => {
    const correspondingDataItem = data.find(dataItem => dataItem.movementId === movementItem.id);
    return {
      ...movementItem,
      ...correspondingDataItem
    };
  });



  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>Weight</th>
          <th>Sets</th>
          <th>Reps</th>
          <th>Movement</th>
          <th>Movement Name</th>
          {/* Add more <th> elements for each column in your data */}
        </tr>
      </thead>
      <tbody>
        {combinedData.map((item, index) => (
          <tr key={index}>
            <td>{item.weight}</td>
            <td>{item.sets}</td>
            <td>{item.reps}</td>
            <td>{item.movementId}</td>
            <td>{item.Name}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default User;
