import React from 'react';

function TableHeader(props) {
	const filteredHeader = props.headers.filter(x => x !== 'ESG Score');
  const tableHeaders = filteredHeader.map((col) => {
		let setSort = () => props.setSort(col);
		return (
			<th onClick={setSort}>{col}</th>
		)
	});

	let setEsgSort = () => props.setSort('ESG Score');
  return (
    <tr>
      {tableHeaders}
			<th onClick={setEsgSort}>ESG Score</th>
    </tr>
  )
}

export default TableHeader;
