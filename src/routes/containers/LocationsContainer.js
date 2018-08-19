import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import LocationActions from '../../actions/locations';
import { getLocations } from '../../selectors/locations';
import Locations from '../Locations';

const mapStateToProps = createStructuredSelector({
  locations: getLocations,
});

const mapDispatchToProps = dispatch => ({
  removeLocationHandler: id => dispatch(LocationActions.removeLocation(id)),
  editLocationHandler: () => dispatch(LocationActions.showLocationsModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
