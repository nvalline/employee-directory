import React from 'react';
import Header from './components/Header';
import EmployeeSearch from './components/EmployeeSearch';
import EmployeeTable from './components/EmployeeTable';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <EmployeeSearch />
      <EmployeeTable />
    </div>
  );
}

export default App;
