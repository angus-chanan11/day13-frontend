import './App.css';
import ParkingLotManagement from './components/ParkingLotManagement';
import ParkingSpace from './components/ParkingSpace';

function App() {
  return (
    <div className="App">
      <ParkingLotManagement/>
      <ParkingSpace plateNumber="ABC-1234" />
    </div>
  );
}

export default App;