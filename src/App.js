import './App.css';
import ParkingGroup from './components/ParkingGroup';
import ParkingLotManagement from './components/ParkingLotManagement';
import { ParkingProvider } from './context/reducer';

function App() {

  return (
    <div className="App">
      <ParkingProvider>
        <ParkingLotManagement/>
        <ParkingGroup/>
      </ParkingProvider>
    </div>
  );
}

export default App;