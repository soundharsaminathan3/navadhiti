import { Menu } from '@mui/material';
import { styled, experimental_sx as sx } from '@mui/system';

const StyledMenu = styled(Menu)(
  sx({
    '.MuiPaper-root': {
      backgroundColor: 'common.bg',
      color: 'common.white',
      border: 1,
      borderColor: 'common.white',
    },
  })
);

export default StyledMenu;
