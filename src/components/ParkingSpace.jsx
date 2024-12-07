import React from 'react';
import PropTypes from 'prop-types';

const ParkingSpace = ({ plateNumber }) => {
  return (
    <div style={{ padding: '10px' }}>
      {plateNumber}
    </div>
  );
};

ParkingSpace.propTypes = {
  plateNumber: PropTypes.string.isRequired,
};

export default ParkingSpace;