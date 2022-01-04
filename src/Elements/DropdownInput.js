import { FormControl, FormGroup, MenuItem, Select } from '@mui/material';
import React from 'react';

const DropdownInput = React.forwardRef(({ input }, ref) => {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <FormControl>
      <Select
        required={input.isRequired}
        disabled={input.isReadonly}
        type={input.type}
        id={input.key}
        inputRef={ref}
        value={age}
        onChange={handleChange}
      >
        {input.items.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
});

export default DropdownInput;
