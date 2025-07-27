import React from 'react';
import {
  Box,
  Grid,
  Stack,
  Typography,
  Button
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import CodeIcon from '@mui/icons-material/Code';
import locationIcon from '../../../assets/location-icon.svg';
import Formsdata from './Formsdata';

const Forms = () => {
  return (
    <Grid container>
      <Grid sx={{ marginLeft: '50px' }}>
        {/* Header */}
        <Stack className='fluid-container'>
          <Stack direction='row' flexWrap='wrap' sx={{ margin: '30px' }}>
            <img
              src={locationIcon}
              width='35px'
              height='60px'
              style={{ marginTop: '10px', padding: '5px' }}
            />
            <Stack direction='column' padding='10px'>
              <Typography
                variant='h3'
                sx={{ fontSize: '28px', fontWeight: '600', color: "#193C6B", lineHeight: '1.2' }}
              >
                Forms
              </Typography>
              <Typography
                variant='body2'
                sx={{ marginTop: '10px', display: 'block', boxSizing: 'border-box' }}
              >
                Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        {/* Info */}
        <Box
          sx={{
            display: 'flex',
            marginLeft: '40px',
            backgroundColor: '#f9e5f2',
            padding: '20px',
            borderLeft: '4px solid #c9007b'
          }}
        >
          <InfoIcon sx={{ color: '#c9007b' }} />
          <Box sx={{ marginLeft: '10px' }}>
            <Typography>
              References to UI Guidelines for forms can be found <a style={{ color: '#0076a8' }}>here</a>
            </Typography>
          </Box>
        </Box>

        {/* Code Button */}
        <Box
          display='flex'
          sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '14px 40px',
            color: '#193C6B'
          }}
        >
          <Typography variant='h6'>Examples</Typography>
          <Box
            sx={{
              border: '0px solid #0076a8',
              backgroundColor: '#e5f1f6',
              borderRadius: '1px'
            }}
          >
            <Button variant="outlined"><CodeIcon /> Code</Button>
          </Box>
        </Box>

        {/* Form Layout */}
        <Box sx={{ marginLeft: '40px', marginTop: '20px' }}>
          <Grid container spacing={2}>
            <Grid  >
              <label>User Name</label>
              <input
                type="text"
                placeholder='i.e John Doe'
                style={{ width: '100%', padding: '8px', marginTop: '4px' }}
              />
            </Grid>
            <Grid >
              <label>Phone Number</label>
              <input
                type="text"
                placeholder='i.e +91-1234567890'
                style={{ width: '100%', padding: '8px', marginTop: '4px' }}
              />
            </Grid>
            <Grid >
              <label>Email Address</label>
              <input
                type="email"
                placeholder='i.e johndoe@email.com'
                style={{ width: '100%', padding: '8px', marginTop: '4px' }}
              />
              <p style={{
                fontSize: '0.875rem',
                color: "#6c757d"
              }}>we will not share your E-mail id with anyone</p>
            </Grid>
          </Grid>
           <Grid container spacing={2}>
            <Grid  >
              <label>Date of Joining</label>
              <input
                type="text"
                placeholder='i.e John Doe'
                style={{ width: '100%', padding: '8px', marginTop: '4px' }}
              />
            </Grid>
            <Grid >
              <label>Hours</label>
              <input
                type="text"
                placeholder='i.e +91-1234567890'
                style={{ width: '100%', padding: '8px', marginTop: '4px' }}
              />
            </Grid>
            <Grid >
              <label>Search input Iconhere</label>
              <input
                type="email"
                placeholder='i.e johndoe@email.com'
                style={{ width: '100%', padding: '8px', marginTop: '4px' }}
              />
              <p style={{
                fontSize: '0.875rem',
                color: "#6c757d"
              }}>we will not share your E-mail id with anyone</p>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Forms;
