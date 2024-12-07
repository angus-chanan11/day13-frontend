import './App.css';
import ParkingGroup from './components/ParkingGroup';
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

  const parkingLots = [
    {
      id: 1,
      name: 'A',
      capacity: 6,
      tickets: tickets
    },
    {
      id: 2,
      name: 'B',
      capacity: 12,
      tickets: []
    }
  ]

  return (
    <div className="App">
      <ParkingLotManagement/>
      <ParkingSpace plateNumber="ABC-1234" />
      <ParkingLot id={1} name="A" capacity={6} tickets={tickets}/>
      <ParkingGroup parkingLots={parkingLots}/>
    </div>
  );
}

export default App;