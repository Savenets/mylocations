import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import CardTravel from '@material-ui/icons/CardTravel';
import Button from '@material-ui/core/Button';

import { locationItem, iconButton, locationNameCopy, chips } from './LocationsList.css';

const LocationListItem = ({ location, removeLocationHandler, editLocationHandler, index, handleGoogleMapLocationChange }) => {
  const { locationName, selectedCategories, id } = location;
  const removeItemHandler = id => () => removeLocationHandler(id);
  const editLocationHandlerInset = index => () => editLocationHandler(index);
  const handleChangeActiveAddress = index => () => handleGoogleMapLocationChange(index);
  const renderCategories = categories => (
    categories.map((category, index) => (<Chip style={{ margin: '0 4px' }} key={index} avatar={<Avatar><CardTravel /></Avatar>} label={category} />)
    ));

  return (
    <li>
      <div
        role="button"
        className={locationItem}
        aria-pressed="false"
        tabIndex={-1}
        onClick={handleChangeActiveAddress(index)}
        onKeyPress={handleChangeActiveAddress(index)}
      >
        <div className={chips}>
          { Array.isArray(selectedCategories) && selectedCategories.length > 0 && renderCategories(selectedCategories) }
          <p className={locationNameCopy}>{locationName}</p>
        </div>
        <div className={iconButton}>
          <Button onClick={editLocationHandlerInset(index)}>Edit</Button>
          <Button onClick={removeItemHandler(id)}>Remove</Button>
        </div>
      </div>
    </li>
  );
};

LocationListItem.defaultProps = {
  removeLocationHandler: ()=>{},
};

LocationListItem.propTypes = {
  location: PropTypes.shape({
    locationName: PropTypes.string.isRequired,
  }).isRequired,
  removeLocationHandler: PropTypes.func,
  editLocationHandler: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  handleGoogleMapLocationChange: PropTypes.func.isRequired,
};

export default LocationListItem;

