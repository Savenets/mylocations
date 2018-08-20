import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import CardTravel from '@material-ui/icons/CardTravel';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { categoryItem, iconButton, categoryNameCopy } from './CategoriesList.css';

const CategoryListItem = ({ category, removeCategory }) => {
  const { categoryName } = category;
  const removeItemHandler = id => () => removeCategory(id);
  const paperStyle = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: 8,
  };

  return (
    <li className={categoryItem}>
      <Paper style={paperStyle}>
        <CardTravel />
        <p className={categoryNameCopy}>{categoryName}</p>
        <div className={iconButton}>
          <IconButton onClick={removeItemHandler(category.id)} aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </div>
      </Paper>
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

