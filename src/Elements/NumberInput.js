import { InputAdornment, OutlinedInput } from '@mui/material';
import React from 'react';

const NumberInput = React.forwardRef(({ input }, ref) => {
  const [value, setValue] = React.useState('');
  const handleChange = (prop) => (event) => {
    setValue(event.target.value);
  };
  return (
    <OutlinedInput
      required={input.isRequired}
      disabled={input.isReadonly}
      type={input.type}
      id={input.key}
      value={value}
      inputRef={ref}
      onChange={handleChange()}
      endAdornment={
        <InputAdornment position='end'>{input.unit}</InputAdornment>
      }
      aria-describedby='outlined-weight-helper-text'
      inputProps={{
        'aria-label': input.unit,
      }}
    />
  );
});

export default NumberInput;
