import React from 'react';
import { Badge, IconButton } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';

import StyledAppBarToolBar from '../Styles/StyledAppBarToolbar';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';

const ToolBar = ({
  settingMenuId,
  profilemenuId,
  handleProfileMenuOpen,
  handleSettingMenuOpen,
}) => {
  return (
    <StyledAppBarToolBar>
      <IconButton>
        <Badge badgeContent={4} color='success'>
          <NotificationsActiveIcon />
        </Badge>
      </IconButton>
      <IconButton
        size='large'
        edge='end'
        aria-label='account of current user'
        aria-controls={settingMenuId}
        aria-haspopup='true'
        onClick={handleSettingMenuOpen}
        color='inherit'
      >
        <SettingsIcon />
      </IconButton>
      <IconButton
        size='large'
        edge='end'
        aria-label='account of current user'
        aria-controls={profilemenuId}
        aria-haspopup='true'
        onClick={handleProfileMenuOpen}
        color='inherit'
      >
        <FaceIcon />
      </IconButton>
    </StyledAppBarToolBar>
  );
};

export default ToolBar;
