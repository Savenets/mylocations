import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { reduxForm, formValueSelector, reset } from 'redux-form';
import uniqid from 'uniqid';
import CategoryActions from '../actions/categories';
import { isCreateModalOpenSelector } from '../selectors/categories';
import AddCategoryModalForm from '../components/AddCategoryModalForm';

const CreateNewCategoryFormName = 'CreateNewCategoryFormName';
const formSelector = formValueSelector(CreateNewCategoryFormName);

const mapStateToProps = createStructuredSelector({
  isDialogOpened: isCreateModalOpenSelector,
  categoryName: state => formSelector(state, 'categoryName'),
});

const mapDispatchToProps = dispatch => ({
  handleCreateCategory: category => dispatch(CategoryActions.createNewCategory(category)),
  handleCloseModal: () => dispatch(CategoryActions.hideCreateModal()),
  resetForm: () => dispatch(reset(CreateNewCategoryFormName)),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  handleCreateCategory: () => {
    const categoryName = stateProps.categoryName;
    const newCategory = {
      categoryName: categoryName,
      id: uniqid(),
    };
    dispatchProps.handleCreateCategory(newCategory);
    dispatchProps.resetForm();
  },
  handleCloseModal: () => {
    dispatchProps.handleCloseModal();
    dispatchProps.resetForm();
  },
});

const addNewCategoryFormContainer = reduxForm({
  form: CreateNewCategoryFormName,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
})(AddCategoryModalForm);

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(addNewCategoryFormContainer);
