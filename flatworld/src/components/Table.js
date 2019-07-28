import React from 'react';
import '../assets/Table.scss';
import data from '../constants/data.js';

import TableRow from './TableRow.js';
import TableHeader from './TableHeader.js';

class Table extends React.Component {
  constructor(props) {
    super(props);

    // TODO: Consider converting to an array so we can handle multiple sorts
    this.state = {
      field: 'Company Name',
      desc: true,
      page: 1,
			value: 1
    };

    this.setSort = this.setSort.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setSort(field) {
    if (field === this.state.field) {
      const currentDir = this.state.desc;
      this.setState({ desc: !currentDir });
    } else {
      this.setState({ field: field, desc: true });
    }
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
		e.preventDefault();
		const page = this.state.value;
    this.setState({page: page});
  }

  render() {
    const headers = data[0];
    const headersEsg = Object.keys(headers);

    const field = this.state.field;
    const dir = this.state.desc;

		// This section is ugly and looks this way because Esg score might not exist in the object
		// We should normalize the dataset earlier on before saving it to the database
    const sortedData = data.sort(function(a,b) {
      let first = Object.assign({'ESG Score':0}, a);
      let second = Object.assign({'ESG Score':0}, b);
      if (dir) {
        return ( first[field] < second[field] ) ? -1 : 1;
      } else {
        return ( first[field] > second[field] ) ? -1 : 1;
      }
    });

    const start = (this.state.page-1)*10;
    const end = (this.state.page)*10;
    const rows = sortedData.slice(start, end);
    const tableRows = rows.map((row) => <TableRow columns={row} />);

    return (
      <div>
        <h3>Page</h3>
				<form onSubmit={this.handleSubmit}>
					<input value={this.state.value} onChange={this.handleChange}/>
					<button>Go To Page</button>
				</form>

        <table>
          <tbody>
            <TableHeader
              headers={headersEsg}
              setSort={this.setSort}
            />

            {tableRows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
