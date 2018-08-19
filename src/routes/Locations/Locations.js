import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import IconButton from '@material-ui/core/IconButton';
import SortByAlpha from '@material-ui/icons/SortByAlpha';
import LocationsList from './components/LocationsList';
import GoogleMapsEmbed from '../../components/GoogleMapsEmbed';

import { wrapper, noLocationsCopy, map, sort, locationDescription, additionalDescriptionTitle } from './Locations.css';

class Locations extends React.Component {

  state = {
    activeLocation: 0,
    sortDirection: 'descending',
    locations: this.props.locations,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.locations !== this.props.locations) {
      this.setState({ locations: nextProps.locations });
    }
  }

  handleGoogleMapLocationChange = key => {
    this.setState({ activeLocation: key });
  };

  sortData = () => {
    if(this.state.sortDirection==='descending') {
      this.setState({
        sortDirection: 'ascending',
        locations: this.props.locations.sort((a,b) => a - b),
      });
    } else {
      this.setState({
        sortDirection: 'descending',
        locations: this.props.locations.sort((a,b) => a - b).reverse(),
      });
    }
  };

  render() {
    const { locations, removeLocationHandler, editLocationHandler, ...rest } = this.props;
    const address = get(locations[this.state.activeLocation], 'locationAddress', 0);
    const locationDetails = get(locations[this.state.activeLocation], 'locationDetails', 0);

    if (locations.length <= 0) {
      return (
        <h1 className={noLocationsCopy}>You have no locations yet. Please add some</h1>
      );
    }
    return (
      <div className={wrapper}>
        <div className={map}>
          <GoogleMapsEmbed styles={{ height: '100%' }} address={address} />
          <div className={locationDescription}>
            <h3 className={additionalDescriptionTitle}>Aditional description</h3>
            <p>{locationDetails}</p>
          </div>
        </div>
        <LocationsList
          handleGoogleMapLocationChange={this.handleGoogleMapLocationChange}
          locations={this.state.locations}
          removeLocationHandler={removeLocationHandler}
          editLocationHandler={editLocationHandler}
          {...rest}
        />
        <div className={sort}>
          <IconButton
            onClick={this.sortData}
          >
            <SortByAlpha />
          </IconButton>
        </div>
      </div>
    );
  }
}

Locations.defaultProps = {
  locations: [],
  removeLocationHandler: ()=>{},
  editLocationHandler: ()=>{},
};

Locations.propTypes = {
  locations: PropTypes.array,
  removeLocationHandler: PropTypes.func,
  editLocationHandler: PropTypes.func,
};

export default Locations;

