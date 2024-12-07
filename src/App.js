import './App.css';
import ParkingLot from './components/ParkingLot';
import ParkingLotManagement from './components/ParkingLotManagement';
import ParkingSpace from './components/ParkingSpace';

function App() {
  const tickets = [
    {
      plateNumber: 'AB-1234',
      position: 0,
      parkingLot: 1
    },
    {
      plateNumber: 'DE-5678',
      position: 2,
      parkingLot: 1
    }
  ]

  return (
    <div className="App">
      <ParkingLotManagement/>
      <ParkingSpace plateNumber="ABC-1234" />
      <ParkingLot id={1} name="A" capacity={6} tickets={tickets}/>
    </div>
  );
}

export default App;