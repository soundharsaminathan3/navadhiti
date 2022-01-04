import React, { useRef } from 'react';

import { Button, Divider, TextareaAutosize } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StyledListBox from '../Styles/StyledListBox';
import { useDispatch } from 'react-redux';

import actions from '../Actions';

function ListBox() {
  const [expanded, setExpanded] = React.useState(true);
  const ref = useRef(null);
  const fileRef = useRef(null);
  const dispatch = useDispatch(null);

  const handleSubmit = () => {
    if (ref.current.value == '') return;
    let json = JSON.parse(ref.current.value);
    dispatch(actions.setJSON(json));
  };
  const fileUpload = (e) => {
    console.log('ref.current.ggggg');
    let reader = new FileReader();
    reader.readAsText(e.target.files[0]);
    reader.onload = function () {
      dispatch(
        actions.setJSON({
          fields: [
            ...JSON.parse(reader.result).fields.sort(function (a, b) {
              return a.order - b.order;
            }),
          ],
        })
      );
    };
  };
  return (
    <StyledListBox>
      <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>Input Json</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextareaAutosize
            aria-label='minimum height'
            minRows={30}
            placeholder='Input Json'
            style={{ width: '100%' }}
            ref={ref}
          />
          <Button onClick={handleSubmit}>Submit JSON</Button>
          <Button variant='contained' component='label'>
            Upload Input File
            <input ref={fileRef} onChange={fileUpload} type='file' hidden />
          </Button>
        </AccordionDetails>
      </Accordion>
      <Divider />

      <Divider />
    </StyledListBox>
  );
}

export default ListBox;
