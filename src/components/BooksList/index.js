import React from 'react';
import MaterialTable from 'material-table';

import './index.css';
import tableIcons from './tableIcons';

function BooksList() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Title', field: 'title' },
      { title: 'Author', field: 'author' },
      { title: 'ISBN', field: 'isbn' },
      { title: 'Number of pages', field: 'numberOfPages', type: 'numeric' },
      { title: 'Rate', field: 'bookRate', type: 'numeric' },
    ],
  });

  return(
    <div className='BooksList'>
      <MaterialTable
      icons={tableIcons}
      title="Books list"
      columns={state.columns}
      data={state.data} // TODO fetch data
      editable={{
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data]; 
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
        }}
      />
    </div>
  );
}

export default BooksList;