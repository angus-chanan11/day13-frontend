import React from 'react';
import PropTypes from 'prop-types';
import ParkingLot from './ParkingLot'; // Assuming ParkingLot component is in the same directory

const ParkingGroup = ({ parkingLots }) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '16px' }}>
        {parkingLots.map((lot) => (
          <ParkingLot
            key={lot.id}
            id={lot.id}
            name={lot.name}
            capacity={lot.capacity}
            tickets={lot.tickets}
          />
        ))}
      </div>
    );
  };

  ParkingGroup.propTypes = {
    parkingLots: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        capacity: PropTypes.number.isRequired,
        tickets: PropTypes.number.isRequired,
      })
    ).isRequired,
  };

export default ParkingGroup;