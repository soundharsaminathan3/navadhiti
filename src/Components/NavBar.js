import React from 'react';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';

import StyledNavBar from '../Styles/StyledNavBar';

const open = true;

function NavBar() {
  return (
    <StyledNavBar variant='persistent' anchor='left' open={open}>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={'Home'} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={'Forms'} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={'Tasks'} />
        </ListItem>
      </List>
      <Divider variant='middle' />
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={'Mail'} />
        </ListItem>
      </List>
    </StyledNavBar>
  );
}

export default NavBar;
