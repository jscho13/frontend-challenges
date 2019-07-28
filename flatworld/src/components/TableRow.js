import React from 'react';
import '../assets/TableRow.scss';

// NOTE: Chose a function component here since it doesn't need state
function TableRow(props) {

  // Imperative style
  // Favors altering our existing objects (props and esg) and reusing it
  let esg = props.columns["ESG Score"] || 0;
  delete props.columns["ESG Score"]
  esg = esg.toFixed(2);

  // Functional style
  // Favors immutability and creates a new object (columns) instead just altering values
  const values = Object.values(props.columns);
  const columns = values.map((val) => <td>{val}</td>);

  const boxWidth = {
    width: `${esg}%`
  }

  return (
    <tr>
      {columns}
      <td>
        {esg}
        <div className='EsgRow' style={boxWidth}></div>
      </td>
    </tr>
  )
}

export default TableRow;
