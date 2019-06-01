import React, { Component } from 'react';
import MaterialTable from 'material-table';
import { getAddedBooks } from 'api';

import './index.css';
import tableIcons from './tableIcons';

class BooksList extends Component {

  constructor() {
    super();
    this.state = {
      columns: [
        { title: 'Title', field: 'title' },
        { title: 'Author', field: 'author' },
        { title: 'ISBN', field: 'isbn' },
        { title: 'Number of pages', field: 'numberOfPages', type: 'numeric' },
        { title: 'Rate', field: 'bookRate', type: 'numeric' },
      ],
      data: [],
    }
  }

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks() {
    getAddedBooks()
      .then(res => res.json())
      .then(res => this.setState({
        data: res.addedBooks,
      }))
      .catch(err => err);
  }

  render() {
     const { columns, data } = this.state;
    return (
      <div className='BooksList'>
        <MaterialTable
        icons={tableIcons}
        title="Books list"
        columns={columns}
        data={data}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...this.state.data]; 
                data[data.indexOf(oldData)] = newData;
                this.setState({ ...this.state, data });
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...this.state.data];
                data.splice(data.indexOf(oldData), 1);
                this.setState({ ...this.state, data });
              }, 600);
            }),
          }}
        />
      </div>
    );
  }
  
}

export default BooksList;