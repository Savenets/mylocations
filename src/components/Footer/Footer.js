import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import NavigationContainer from '../../containers/NavigationContainer';

import { footerWrapper } from './Footer.css';

const Footer = ({ style }) => {

  return (
    <div style={style} className={footerWrapper}>
      <Divider />
      <NavigationContainer />
    </div>
  );
};

Footer.defaultProps = {
  style: null,
};

Footer.propTypes = {
  style: PropTypes.shape({}),
};

export default Footer;
