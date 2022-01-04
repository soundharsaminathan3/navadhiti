import { Button, FormControl, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import StyledForm from '../Styles/StyledForm';
import DateInput from '../Elements/DateInput';
import NumberInput from '../Elements/NumberInput';
import DropdownInput from '../Elements/DropdownInput';
import { useRef } from 'react';

const InputSwitch = React.forwardRef(({ input }, ref) => {
  switch (input.type) {
    case 'date':
      return <DateInput input={input} ref={ref} />;
    case 'number':
      return <NumberInput input={input} ref={ref} />;
    case 'dropdown':
      return <DropdownInput input={input} ref={ref} />;
    default:
      return <></>;
  }
});

const InputGrid = React.forwardRef(({ input }, ref) => {
  return (
    <>
      <Grid item xs={3}>
        <Typography>{input.label}</Typography>
      </Grid>
      <Grid item xs={9}>
        <InputSwitch input={input} ref={ref} />
      </Grid>
    </>
  );
});

function Form() {
  const myJson = useSelector((state) => state.myJson);
  const myRefs = useRef([]);
  const [myValues, setValues] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let vals = myJson.fields.map((val, index) => {
      return { label: val.label, value: myRefs.current[index].value };
    });
    setValues([...vals]);
  };
  return (
    <StyledForm>
      <Typography variant='h3'>Dynamic Form</Typography>
      {myJson && myJson.fields && (
        <form onSubmit={handleSubmit}>
          <Grid container rowSpacing={2}>
            {myJson.fields.map((input, i) => {
              return (
                <InputGrid
                  key={input.key}
                  input={input}
                  ref={(el) => (myRefs.current[i] = el)}
                />
              );
            })}

            <Grid item xs={3}>
              <Button className='Submit' type='submit'>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
      {myValues.map((val, index) => {
        return (
          <Typography key={index}>
            {val.label} : {val.value}
          </Typography>
        );
      })}
    </StyledForm>
  );
}

export default Form;
