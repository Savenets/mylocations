import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MoreVert from '@material-ui/icons/MoreVert';
import AppBarMenuContainer from '../../containers/AppBarMenuContainer';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  appBarWrapper: {
    display: 'flex',
    alignItems: 'space-between',
    backgroundColor: '#6b8796',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

class AppBarHeader extends React.Component {
  state = {
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <AppBar position="static" style={styles.appBarWrapper}>
          <Toolbar style={styles.toolbar}>
            <p className={styles.flex}>MyLocations</p>
            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <MoreVert />
              </IconButton>
              <AppBarMenuContainer
                anchorEl={this.state.anchorEl}
                isOpened={open}
                handleCloseMenu={this.handleClose}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default AppBarHeader;
