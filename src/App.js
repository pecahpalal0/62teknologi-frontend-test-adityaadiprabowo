import './App.css';
import Header from './components/header/header';
import Maps from './components/maps/maps';
import Table from './components/table/table';

function App() {
  return (
    <div>
      <Header/>
      <div className="leaflet-container">
        <Maps/>
      </div>
      <div className="table-container">
        <Table/>
      </div>
    </div>
  );
}

export default App;
