import Drawer from '@mui/material/Drawer';
import { styled, experimental_sx as sx } from '@mui/system';

const drawerWidth = 180;

const StyledNavBar = styled(Drawer)(
  sx({
    width: drawerWidth,
    display: 'flex',
    '.MuiListItemIcon-root': {
      color: 'common.white',
    },
    '.MuiDivider-root ': {
      borderColor: 'common.white',
    },
    '& .MuiDrawer-paper': {
      bgcolor: 'common.bg',
      color: 'common.white',
      width: drawerWidth,
      top: '50px',
      boxSizing: 'border-box',
    },
    '.MuiButtonBase-root:hover': {
      '.MuiListItemIcon-root': {
        color: 'common.active',
      },
      '.MuiListItemText-root ': {
        color: 'common.active',
      },
    },
  })
);

export default StyledNavBar;
