import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ListDetails from './components/ListDetails/ListDetails';


function App() {
  return (
    <div className="App">
     {/* <div><h2>Displaying the asia conuntries</h2></div> */}
     <Header />
     <ListDetails />

    </div>
  );
}

export default App;
