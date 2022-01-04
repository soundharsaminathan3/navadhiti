import { Box } from '@mui/material';
import { styled, experimental_sx as sx } from '@mui/system';

const StyledForm = styled(Box)(
  sx({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    height: 'calc(100%-70px)',
    borderRight: 1,
    borderColor: 'common.black',
    pt: '60px',
    pl: '30px',
    h3: {
      pb: '50px',
    },
    '.Submit ': {
      marginBottom: '15px',
      marginTop: '5px',
      mx: '3px',
      backgroundColor: 'common.bg',
      color: 'common.white',
      '&:hover': {
        backgroundColor: 'common.bg',
      },
    },
    // 'MuiGrid-root': {
    //   justifyContent: 'center',
    // },
  })
);
export default StyledForm;
