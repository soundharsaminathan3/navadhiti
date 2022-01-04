import { Toolbar } from '@mui/material';
import { styled, experimental_sx as sx } from '@mui/system';

const StyledAppBarToolBar = styled(Toolbar)(
  sx({
    order: [3, 4],
    display: 'flex',
    alignItems: 'center',
    '.MuiIconButton-root': {
      color: 'common.white',
    },
    '.MuiIconButton-root:hover': {
      color: 'common.active',
    },
    '.MuiButtonBase-root': {
      display: ['none', 'flex'],
    },
    '.MuiButtonBase-root:last-child': {
      display: 'flex',
    },
  })
);

export default StyledAppBarToolBar;
