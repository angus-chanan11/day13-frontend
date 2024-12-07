import React from 'react';
import PropTypes from 'prop-types';
import ParkingSpace from './ParkingSpace'; // Assuming ParkingSpace is in the same directory

const ParkingLot = ({ id, name, capacity, tickets }) => {
  // Create an array to hold the ParkingSpace components
  const parkingSpaces = [];

  // Create a map for quick lookup of tickets by position
  const ticketMap = new Map();
  tickets.forEach(ticket => {
    ticketMap.set(ticket.position, ticket.plateNumber);
  });

  // Generate the cells for the table
  for (let position = 0; position < capacity; position++) {
    const plateNumber = ticketMap.get(position) || ' ';

    parkingSpaces.push(
      <td key={position} style={{ width: '10ch', height: '3em', textAlign: 'center', border: '1px solid black' }}>
        <ParkingSpace plateNumber={plateNumber} />
      </td>
    );
  }

  // Split the cells into rows of 3 columns each
  const rows = [];
  for (let i = 0; i < parkingSpaces.length; i += 3) {
    rows.push(
      <tr key={i}>
        {parkingSpaces.slice(i, i + 3)}
      </tr>
    );
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <table style={{ margin: '0 auto' }}>
        <tbody>
          {rows}
        </tbody>
      </table>
      <div>{name}</div>
    </div>
  );
};

ParkingLot.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  capacity: PropTypes.number.isRequired,
  tickets: PropTypes.arrayOf(
    PropTypes.shape({
      plateNumber: PropTypes.string.isRequired,
      position: PropTypes.number.isRequired,
      parkingLot: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ParkingLot;