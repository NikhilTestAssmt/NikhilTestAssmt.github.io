import React from 'react';
import './App.css';
import StockTable from './components/StockTable';

function App() {
  return (
    <div className="app-container">
      <div className="content col-lg-12 col-md-12 col-sm-12 col-xs-12">
         <div className="row1 col-lg-12 col-md-12 col-sm-12">Welcome to Live Stocks</div>
         <StockTable/>
      </div>
    </div>
  );
}

export default App;
