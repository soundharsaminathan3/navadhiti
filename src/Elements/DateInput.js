import React from 'react';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField } from '@mui/material';

const DateInput = React.forwardRef(({ input }, ref) => {
  const [value, setValue] = React.useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        required={input.isRequired}
        disabled={input.isReadonly}
        type={input.type}
        id={input.key}
        inputRef={ref}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField required={input.isRequired} {...params} />
        )}
      />
    </LocalizationProvider>
  );
});

export default DateInput;
