import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BooksList from 'components/BooksList';
import Form from 'components/Form';
import * as FetchListActions from 'actions/FetchList/pure';

const mapStateToProps = state => ({
  fetchList: state.fetchListReducer
});

const mapDispatchToProps = dispatch => ({
  actions: {
    ...bindActionCreators(FetchListActions, dispatch),
  },
});

export const BooksListContainer = connect(
  mapStateToProps,
)(BooksList);


export const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);