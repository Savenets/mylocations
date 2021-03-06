import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SnackbarContainer from '../containers/SnackbarContainer';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './Layout.css';

const Layout = ({ children, theme }) => {
  return (
    <MuiThemeProvider muiTheme={theme}>
      <div className={styles.layoutWrapper} >
        <div className={styles.content}>
          <Header />
          {children}
        </div>
        <Footer />
        <SnackbarContainer autoHideDuration={3000} />
      </div>
    </MuiThemeProvider>
  );
};

Layout.defaultProps = {
  theme: {},
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.shape({
    appBar: PropTypes.shape({
      height: PropTypes.number,
    }),
  }),
};

export default Layout;
