import axios from "axios";

// Create an axios instance with the base URL
const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1/parking-manager',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const parkCar = async (plateNumber, parkingType) => {
  try {
    const response = await api.post('/park', {plateNumber, parkingType});
    return response.data;
  } catch (error) {
    console.error('Error fetching park data:', error);
    throw error;
  }
};

export const fetchCar = async (plateNumber) => {
  try {
    const response = await api.post('/fetch', {plateNumber});
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getParkingLots = async () => {
  try {
    const response = await api.get("/parking-lots");
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}