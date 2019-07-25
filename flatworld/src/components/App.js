import React from 'react';

import data from '../constants/data.js';
import Table from './Table.js';

class App extends React.Component {
  render() {
    const tableData = data;
    const columns = [
      "Company Name",
      "ISIN",
      "Total Revenue",
      "Company Market Cap",
      "Women Managers",
      "Women Employees",
      "ESG Score",
      "CO2 Scope 1 & 2 Adjusted",
      "CO2 Scope 1 & 2 Revenue Adjusted",
      "CO2 Scope 3 Adjusted",
      "CO2 Scope 3 Revenue Adjusted"
    ]

    return (
      <div className="App">
        <Table
          data={tableData}
          columns={columns}
        />
      </div>
    )
  }
}

export default App;
