import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const AppBarMenu = ({ anchorEl, isOpened, handleCloseMenu, handleOpenCreateCategoryModal }) => {

  const menuItemStyle = {
    fontSize: 16,
  };

  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isOpened}
      onClose={handleCloseMenu}
    >
      <MenuItem style={menuItemStyle} onClick={handleOpenCreateCategoryModal}>Create category</MenuItem>
      <MenuItem style={menuItemStyle} onClick={handleCloseMenu}>Create location</MenuItem>
    </Menu>
  );
};

AppBarMenu.defaultProps = {
  anchorEl: null,
};

AppBarMenu.propTypes = {
  anchorEl: PropTypes.shape({}),
  isOpened: PropTypes.bool.isRequired,
  handleCloseMenu: PropTypes.func.isRequired,
  handleOpenCreateCategoryModal: PropTypes.func.isRequired,
};

export default AppBarMenu;
