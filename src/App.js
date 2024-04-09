import './App.css';
import { useState } from 'react';
import data from './data'
import Tours from './components/Tours';

function App() {
  const [tours, setTours] = useState(data);
  
  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  function refreshHadler(){
    setTours(data);
  }

  if (tours.length === 0){
    return (
      <div className='refresh'>
        <h2>No Tours Left</h2>
        <button className='btn-white' onClick={refreshHadler}>Refresh</button>
      </div>
    );
  }

  return (
    <div className='App'>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
