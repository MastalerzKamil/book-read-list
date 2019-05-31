import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import './index.css';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

function Form() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    title: 'Hunger Games',
    author: '',
    isbn: '',
    numberOfPages: 0,
    bookRate: 0,
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <div className='Form'>
      <form method='POST'>
        <div className='Form__inputs'>
          <TextField
            id='filled-name'
            label='Title'
            className={classes.textField}
            value={values.title}
            onChange={handleChange('title')}
            margin='normal'
            variant='filled'
          />

          <TextField
            id='filled-name'
            label='Author'
            className={classes.textField}
            value={values.author}
            onChange={handleChange('author')}
            margin='normal'
            variant='filled'
          />

          <TextField
            id='filled-name'
            label='ISBN'
            className={classes.textField}
            value={values.isbn}
            onChange={handleChange('isbn')}
            margin='normal'
            variant='filled'
          />

          <TextField
            id='filled-name'
            label='Number of pages'
            className={classes.textField}
            value={values.numberOfPages}
            onChange={handleChange('numberOfPages')}
            margin='normal'
            variant='filled'
          />

          <TextField
            id='filled-name'
            label='Rate'
            className={classes.textField}
            value={values.bookRate}
            onChange={handleChange('bookRate')}
            margin='normal'
            variant='filled'
          />
        </div>
        <div className='Form__submit'>
          
        </div>
        <Button variant="outlined" color="primary" className={classes.button}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Form;