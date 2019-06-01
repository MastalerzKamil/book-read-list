import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BooksList from 'components/BooksList';
import Form from 'components/Form';
import * as UpdateListActions from 'actions/BooksList/pure';

const mapStateToProps = state => ({
  updateList: state.updateListReducer
});

const mapDispatchToProps = dispatch => ({
  actions: {
    ...bindActionCreators(UpdateListActions, dispatch),
  },
});

export const BooksListContainer = connect(
  mapStateToProps,
)(BooksList);


export const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);