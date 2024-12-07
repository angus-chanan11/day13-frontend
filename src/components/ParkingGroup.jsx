import React, { useContext, useEffect } from 'react';
import ParkingLot from './ParkingLot'; // Assuming ParkingLot component is in the same directory
import { ParkingContext } from '../context/reducer';
import { getParkingLots } from '../apis/api';

const ParkingGroup = () => {
    const {state, dispatch}= useContext(ParkingContext);

    useEffect(() => {
      getParkingLots().
        then((data) => {
          dispatch({type: 'SET', payload: data});
        })
    }, [])

    return (
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '16px' }}>
        {state.map((lot) => (
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


export default ParkingGroup;