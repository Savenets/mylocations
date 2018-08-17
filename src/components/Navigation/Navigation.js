import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CardTravel from '@material-ui/icons/CardTravel';
import Place from '@material-ui/icons/Place';
import { cyan, defaultText } from '../../styles/colors.css';

import { navigationItem } from './Navigation.css';

const Navigation = ({ currentRoute }) => {
  const Fragment = React.Fragment;
  const styles = {
    link: {
      color: defaultText,
    },
    linkActive: {
      color: cyan,
    },
  };

  return (
    <Fragment>
      <Link to="/" className={navigationItem} style={currentRoute === '/' ? styles.linkActive : styles.link}>
        <CardTravel color="inherit" /><span>Categories</span>
      </Link>
      <Link to="/locations" className={navigationItem} style={currentRoute === '/locations' ? styles.linkActive : styles.link}>
        <Place color="inherit" /><span>Locations</span>
      </Link>
    </Fragment>
  );
};

Navigation.defaultProps = {
  style: null,
};

Navigation.propTypes = {
  currentRoute: PropTypes.string.isRequired,
  style: PropTypes.shape({}),
};

export default Navigation;
