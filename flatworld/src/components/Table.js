import React from 'react';
import '../assets/Table.scss';
import data from '../constants/data.js';

import TableRow from './TableRow.js';

class Table extends React.Component {
  constructor(props) {
    super(props);

    // TODO: Make this an array so we can handle multiple sorts
    this.state = {
      sort: 'Company Name',
      dir: 'desc'
    };
  }

  render() {
    const headers = [
      "Company Name",
      "ISIN",
      "Total Revenue",
      "Company Market Cap",
      "Women Managers",
      "Women Employees",
      "CO2 Scope 1 & 2 Adjusted",
      "CO2 Scope 1 & 2 Revenue Adjusted",
      "CO2 Scope 3 Adjusted",
      "CO2 Scope 3 Revenue Adjusted",
      "ESG Score"
    ]
    const tableHeaders = headers.map((col) => <th>{col}</th>);

    // TODO: Each one of the child props should have a key to make React happy
    const rows = data.slice(0,10);
    const tableRows = rows.map((row) => <TableRow columns={row} />);

    return (
      <table>
        <tr>
          {tableHeaders}
        </tr>

        {tableRows}
      </table>
    );
  }
}

export default Table;
