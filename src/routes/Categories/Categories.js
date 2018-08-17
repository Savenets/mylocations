import React from 'react';
import PropTypes from 'prop-types';
import CategoriesList from '../../components/CategoriesList';

import { wrapper, noCategoriesCopy } from './Categories.css';

const Categories = ({ categories, removeCategory }) => {

  if (categories.length <= 0) {
    return (
      <h1 className={noCategoriesCopy}>You have no categories yer. Please add some</h1>
    );
  }

  return (
    <div className={wrapper}>
      <CategoriesList categories={categories} removeCategory={removeCategory} />
    </div>
  );
};

Categories.defaultProps = {
  categories: [],
  removeCategory: ()=>{},
};

Categories.propTypes = {
  categories: PropTypes.array,
  removeCategory: PropTypes.func,
};

export default Categories;

