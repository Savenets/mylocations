import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import NavigationContainer from '../../containers/NavigationContainer';

import { footerWrapper } from './Footer.css';

const Footer = ({ style }) => {

  return (
    <BottomNavigation style={style} className={footerWrapper}>
      <Divider />
      <NavigationContainer />
    </BottomNavigation>
  );
};

Footer.defaultProps = {
  style: null,
};

Footer.propTypes = {
  style: PropTypes.shape({}),
};

export default Footer;
