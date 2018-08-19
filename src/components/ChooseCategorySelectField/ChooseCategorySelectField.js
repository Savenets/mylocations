import React from 'react';
import { Field } from 'redux-form';
import MenuItem from 'material-ui/MenuItem';

import MultipleSelectField from '../MultipleSelectField';

const ChooseCategorySelectField = props => {

  return (
    <Field
      component={MultipleSelectField}
      maxHeight={160}
      {...props}
    >
      {props.categories.map((item, key) => (
        <MenuItem
          key={key}
          value={item.categoryName}
          primaryText={item.categoryName}
        />)
      )}
    </Field>);
};

export default ChooseCategorySelectField;
