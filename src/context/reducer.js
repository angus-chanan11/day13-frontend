import React, { act, createContext, useReducer } from 'react';

// Initial state
const initialState = []

// Create context
const ParkingContext = createContext(initialState);

export const ACTION = {
    PARK: 'PARK',
    SET: 'SET'
}

// Reducer function
const parkingReducer = (state, action) => {
  switch (action.type) {
    case ACTION.PARK:
      const updatedState = state.map(parkingLot => {
        if (parkingLot.id === action.payload.parkingLot) {
            return {
            ...parkingLot,
            tickets: [...parkingLot.tickets, action.payload]
            };
        }
        return parkingLot;
        });
        return updatedState;
    case ACTION.SET:
      return action.payload;
    default:
      return state;
  }
};

// Context provider component
const ParkingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(parkingReducer, initialState);

  return (
    <ParkingContext.Provider value={{ state, dispatch }}>
      {children}
    </ParkingContext.Provider>
  );
};

export { ParkingContext, ParkingProvider };