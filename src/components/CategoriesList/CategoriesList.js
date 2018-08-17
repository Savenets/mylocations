import React from 'react';
import PropTypes from 'prop-types';
import CategoryListItem from './CategoryListItem';
import { wrapper } from './CategoriesList.css';

const CategoriesList = ({ categories, removeCategory }) => {

  return (
    <ul className={wrapper}>
      { categories.map((category, index) => <CategoryListItem key={index} category={category} removeCategory={removeCategory} />) }
    </ul>
  );
};

CategoriesList.defaultProps = {
  removeCategory: ()=>{},
};

CategoriesList.propTypes = {
  categories: PropTypes.array.isRequired,
  removeCategory: PropTypes.func,
};

export default CategoriesList;
