import { AppBar } from '@mui/material';
import { styled, experimental_sx as sx } from '@mui/system';

const StyledAppBar = styled(AppBar)(
  sx({
    bgcolor: 'common.bg',
    height: '50px',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: ['space-between', 'flex-start'],
    px: ['5px', '10px', '15px'],
    '.MuiTypography-h2': {
      order: [2, 1],
      display: 'flex',
      alignItems: 'center',
      fontSize: '1.35rem',
      fontWeight: 400,
    },

    '.Header__Nav': {
      pl: ['0px', '15px'],
      order: [1, 2],
      display: 'flex',
      // flexGrow: 1,
      height: '50px',
      alignItems: 'center',
      '.MuiListItemText-root': {
        pr: '15px',
        height: '44px',
        display: 'flex',
        alignItems: 'center',
        borderTop: 3,
        borderBottom: 3,
        borderColor: 'transparent',
        '&:hover': {
          borderBottomColor: 'common.active',
        },
      },
      'div.MuiButtonBase-root': {
        display: ['none', 'flex'],
      },
    },
    '.MuiBox-root': {
      display: ['none', 'block'],
      order: 3,
      flexGrow: 1,
    },
  })
);

export default StyledAppBar;
