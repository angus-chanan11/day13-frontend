import React, { useState, useContext } from 'react';
import { parkCar, fetchCar } from '../apis/api';
import { ACTION, ParkingContext } from '../context/reducer';

const ParkingLotManagement = () => {
  const [plateNumber, setPlateNumber] = useState('');
  const [parkingType, setParkingType] = useState('Standard');
  const { dispatch } = useContext(ParkingContext);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePark = () => {
    setIsLoading(true);
    parkCar(plateNumber, parkingType)
      .then((response) => {
        dispatch({
          type: ACTION.PARK,
          payload: response
        });
        setIsLoading(false);
      })
      .catch(() => setIsError(true));
  };

  const handleFetch = () => {
    setIsLoading(true);
    fetchCar(plateNumber)
      .then((response) => {
        dispatch({
          type: ACTION.FETCH,
          payload: response
        });
        setIsLoading(false);
      })
      .catch(() => setIsError(true));
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ marginRight: '10px' }}>
          <label>
            Plate Number:
            <input
              type="text"
              value={plateNumber}
              onChange={(e) => setPlateNumber(e.target.value.trim())}
            />
          </label>
        </div>
        <div style={{ marginRight: '10px' }}>
          <label>
            Parking Type:
            <select
              value={parkingType}
              onChange={(e) => setParkingType(e.target.value.trim())}
            >
              <option value="Standard">Standard</option>
              <option value="Smart">Smart</option>
              <option value="Super Smart">Super Smart</option>
            </select>
          </label>
        </div>
        <div style={{ marginRight: '10px' }}>
          <button onClick={handlePark} disabled={isLoading}>Park</button>
        </div>
        <div>
          <button onClick={handleFetch} disabled={isLoading}>Fetch</button>
        </div>
      </div>
      {isError && <div>An error occurs</div>}
    </>
  );
};

export default ParkingLotManagement;