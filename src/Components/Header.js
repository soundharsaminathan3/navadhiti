import React from 'react';
import { Box, MenuItem, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import StyledAppBar from '../Styles/StyledAppBar';
import ToolBar from '../Elements/ToolBar';
import StyledMenu from '../Styles/StyledMenu';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [settingAnchorEl, setSettingAnchorEl] = React.useState(null);
  const isProfileMenuOpen = Boolean(anchorEl);
  const isSettingAnchorElMenuOpen = Boolean(settingAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSettingMenuOpen = (event) => {
    setSettingAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSettingAnchorEl(null);
  };

  const profileMenuId = 'primary-search-account-menu';

  const profileMenu = (
    <StyledMenu
      anchorEl={anchorEl}
      id={profileMenuId}
      keepMounted
      open={isProfileMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </StyledMenu>
  );
  const settingMenuId = 'primary-search-setting-menu';
  const settingMenu = (
    <StyledMenu
      anchorEl={settingAnchorEl}
      id={settingMenuId}
      keepMounted
      open={isSettingAnchorElMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Settings Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </StyledMenu>
  );
  return (
    <StyledAppBar position='fixed'>
      <Typography variant='h2' noWrap component='div'>
        Dynamic Form
      </Typography>
      <List className='Header__Nav'>
        <IconButton size='large' color='inherit'>
          <MenuIcon />
        </IconButton>
        <ListItem button>
          <ListItemText primary={'Home'} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={'Forms'} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={'Tasks'} />
        </ListItem>
      </List>
      <Box></Box>
      <ToolBar
        profileMenuId
        settingMenuId
        handleProfileMenuOpen={handleProfileMenuOpen}
        handleSettingMenuOpen={handleSettingMenuOpen}
      />
      {profileMenu}
      {settingMenu}
    </StyledAppBar>
  );
};

export default Header;
