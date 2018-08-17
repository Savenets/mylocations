import React from 'react';
import PropTypes from 'prop-types';
import Place from '@material-ui/icons/Place';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { categoryItem, iconButton, categoryNameCopy } from './CategoriesList.css';

const CategoryListItem = ({ category, removeCategory }) => {
  const { categoryName } = category;
  const removeItemHandler = id => () => removeCategory(id);

  return (
    <li className={categoryItem}>
      <Place />
      <p className={categoryNameCopy}>{categoryName}</p>
      <div className={iconButton}>
        <IconButton onClick={removeItemHandler(category.id)} aria-label="Delete">
          <DeleteIcon />
        </IconButton>
      </div>
    </li>
  );
};

CategoryListItem.defaultProps = {
  removeCategory: ()=>{},
};

CategoryListItem.propTypes = {
  category: PropTypes.shape({
    categoryName: PropTypes.string.isRequired,
  }).isRequired,
  removeCategory: PropTypes.func,
};

export default CategoryListItem;

