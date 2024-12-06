import React from 'react';
import PropTypes from 'prop-types';

const ParkingSpace = ({ plateNumber }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      {plateNumber}
    </div>
  );
};

ParkingSpace.propTypes = {
  plateNumber: PropTypes.string.isRequired,
};

export default ParkingSpace;