import React from 'react';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import { Box } from '@mui/material';

import ListBox from '../Components/ListBox';
import Form from '../Components/Form';

function Home() {
  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box sx={{ display: 'flex', height: '100%' }}>
        <NavBar />
        <ListBox />
        <Form />
      </Box>
    </Box>
  );
}

export default Home;
