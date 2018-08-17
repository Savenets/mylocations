import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import NavigationContainer from '../../containers/NavigationContainer';

import { footerWrapper } from './Footer.css';

const Footer = ({ style }) => {
  const Fragment = React.Fragment;

  return (
    <Fragment>
      <Divider />
      <footer className={footerWrapper} style={style}>
        <NavigationContainer />
      </footer>
    </Fragment>
  );
};

Footer.defaultProps = {
  style: null,
};

Footer.propTypes = {
  style: PropTypes.shape({}),
};

export default Footer;
