import React from 'react';

// NOTE: We can make this a function component so it doesn't need to handle state
function TableRow(props) {

  // This is imperative style code, less popular in some camps
  // Favors altering our existing objects (props and esg) and reusing it
  let esg = props.columns["ESG Score"]
  delete props.columns["ESG Score"]
  esg = esg.toFixed(2);

  // This is functional style code, albeit a crude example
  // Favors immutability and creates a new object (columns) instead just altering values
  const values = Object.values(props.columns);
  const columns = values.map((val) => <td>{val}</td>);

  const boxWidth = {
    backgroundColor: '#a3c6f6',
    width: `${esg}%`,
    height: '10px'
  }

  return (
    <tr>
      {columns}
      <td>
        {esg}
        <div style={boxWidth}></div>
      </td>
    </tr>
  )
}

export default TableRow;
