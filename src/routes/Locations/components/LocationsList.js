import React from 'react';
import PropTypes from 'prop-types';
import LocationListItem from './LocationListItem';
import EditLocationsContainer from '../../containers/EditLocationsContainer';
import { wrapper } from './LocationsList.css';

class LocationsList extends React.Component {

  state = {
    activeLocation: 0,
    isDialogOpen: false,
  };

  handleEditLocation = key => {
    this.setState({ activeLocation: key, isDialogOpen: !this.state.isDialogOpen });
  };

  render () {
   const { locations, removeLocationHandler, handleGoogleMapLocationChange } = this.props;
    return (
      <ul className={wrapper}>
        { locations.map((location, index) => (<LocationListItem
          key={index}
          index={index}
          handleCloseModal={this.handleEditLocation}
          location={location}
          removeLocationHandler={removeLocationHandler}
          editLocationHandler={this.handleEditLocation}
          handleGoogleMapLocationChange={handleGoogleMapLocationChange}
        />)) }
        <EditLocationsContainer
          dialogTitle="Edit Location"
          buttonActionText="Edit"
          location={locations[this.state.activeLocation]}
          isDialogOpened={this.state.isDialogOpen}
          handleCloseModal={this.handleEditLocation}
        />
      </ul>
    );
  }
}

LocationsList.defaultProps = {
  removeLocationHandler: ()=>{},
};

LocationsList.propTypes = {
  locations: PropTypes.array.isRequired,
  removeLocationHandler: PropTypes.func,
  handleGoogleMapLocationChange: PropTypes.func.isRequired,
};

export default LocationsList;
