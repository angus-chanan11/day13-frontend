import React, { useState } from 'react';

const ParkingLotManagement = () => {
  const [plateNumber, setPlateNumber] = useState('');
  const [parkingType, setParkingType] = useState('Standard');

  const handlePark = () => {
    // Handle park logic here
    console.log(`Parking ${plateNumber} as ${parkingType}`);
  };

  const handleFetch = () => {
    // Handle fetch logic here
    console.log(`Fetching ${plateNumber}`);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ marginRight: '10px' }}>
        <label>
          Plate Number:
          <input
            type="text"
            value={plateNumber}
            onChange={(e) => setPlateNumber(e.target.value)}
          />
        </label>
      </div>
      <div style={{ marginRight: '10px' }}>
        <label>
          Parking Type:
          <select
            value={parkingType}
            onChange={(e) => setParkingType(e.target.value)}
          >
            <option value="Standard">Standard</option>
            <option value="Smart">Smart</option>
            <option value="Super Smart">Super Smart</option>
          </select>
        </label>
      </div>
      <div style={{ marginRight: '10px' }}>
        <button onClick={handlePark}>Park</button>
      </div>
      <div>
        <button onClick={handleFetch}>Fetch</button>
      </div>
    </div>
  );
};

export default ParkingLotManagement;