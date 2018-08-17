import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CategoryActions from '../../actions/categories';
import { getCategories } from '../../selectors/categories';
import Categories from '../Categories';

const mapStateToProps = createStructuredSelector({
  categories: getCategories,
});

const mapDispatchToProps = dispatch => ({
  removeCategory: id => dispatch(CategoryActions.removeCategory(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
