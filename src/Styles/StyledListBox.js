import { Box } from '@mui/material';
import { styled, experimental_sx as sx } from '@mui/system';

const StyledListBox = styled(Box)(
  sx({
    width: '450px',
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100%-70px)',
    borderRight: 1,
    borderColor: 'common.black',
    pt: '60px',
    '.MuiFormControl-root': {
      pl: '3px',
      pr: '7px',
      pb: '10px',
      display: 'flex',
      boxSizing: 'border-box',
    },
    '.MuiOutlinedInput-root': {
      border: 0,
    },
    '.MuiBox-root': {
      display: 'flex',
    },
    '.MuiButtonBase-root ': {
      marginBottom: '15px',
      marginTop: '5px',
      mx: '3px',
      backgroundColor: 'common.bg',
      color: 'common.white',
      '&:hover': {
        backgroundColor: 'common.bg',
      },
    },

    '.MuiChip-root,.MuiAccordionSummary-expandIconWrapper': {
      backgroundColor: 'common.bg',
      color: 'common.white',
    },
  })
);
export default StyledListBox;
