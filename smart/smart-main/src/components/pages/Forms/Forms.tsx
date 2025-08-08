//HTML and css code
// import React from 'react';
// import {
//   Box,
//   Grid,
//   Stack,
//   Typography,
//   Button
// } from '@mui/material';
// import './forms.css'
// import InfoIcon from '@mui/icons-material/Info';
// import CodeIcon from '@mui/icons-material/Code';
// import locationIcon from '../../../assets/location-icon.svg';
// import Formsdata from './Formsdata';

// const Forms = () => {
//   return (
   
//     <div className="main-container">
//       <div className="form-container">
//         <div className="form-img">
//           <img src={locationIcon} alt="locationIcon" />
//         </div>
//         <div className="forms-header">
//           <h2>Forms</h2>
//           <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
//         </div>
//       </div>
//       <div className="reference-container">
//         <div className="ref-icon">
//           <InfoIcon />
//         </div>
//         <div className="ref-para">
//           <p>References to UI Guidelines for forms can be found <span>here</span></p>
//         </div>
//       </div>

//       <div className="example-container">
//         <div className="example-header">
//           <h3>Examples</h3>
//         </div>
//         <div className="example-code">
//           <button>
//             <CodeIcon />
//             Code
//           </button>
//         </div>
//       </div>
//       <div className="wrapper">

//         <div className="example-form-header">
//           <div className="form-uname">
//             <p>UserName <span>*</span></p>
//             <input type="text"
//               placeholder="i.e John Doe"
//             />
//           </div>
//           <div className="form-pnumber">
//             <p>Phone Number <span>*</span></p>
//             <input type="text"
//               placeholder='i.e900xxxxxxx'
//             />
//           </div>
//           <div className="form-emailaddress">
//             <p>Email Address <span>*</span></p>
//             <input type="text"
//               placeholder='i.esmartui@aleo.com'
//             />
//             <p className='form-address-para'>we will not share your E-mail id with anyone</p>
//           </div>
//         </div>
//         <div className="example-form-header">
//           <div className="form-uname">
//             <p>Date of joining <span>*</span></p>
//             <input type="text"
//               placeholder="i.e John Doe"
//             />
//           </div>
//           <div className="form-pnumber">
//             <p>Hours <span>*</span></p>
//             <input type="text"
//               placeholder='i.e900xxxxxxx'
//             />
//           </div>
//           <div className="form-emailaddress">
//             <p>Search input inside icon left icon <InfoIcon className='infoicon' style={{ height: '15px' }} /> </p>
//             <input type="text"
//               placeholder='i.esmartui@aleo.com'
//             />
//           </div>
//         </div>
//       </div>
//       <hr />
//       <div className="select-container">
//         <div className="select-header">
//           <h3>Select 2</h3>
//           <p className='select-paragraph'>In this project, we used select 2 library for select options . If you prefer, you can use the single select and multiple select options listed below.</p>
//         </div>
//         <div className="select-code">
//           <button>
//             <CodeIcon />
//             Code
//           </button>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Forms;

import React from 'react';
import {
  Box,
  Grid,
  Stack,
  Typography,
  Button,
  TextField,
  InputAdornment,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import CodeIcon from '@mui/icons-material/Code';
import locationIcon from '../../../assets/location-icon.svg';
// import Formsdata from './Formsdata'; // Assuming this is not used in the final JSX

const Forms = () => {
  return (
    <Box className="main-container" sx={{marginRight:'25%' }}>
      {/* Forms Header Section */}
      <Stack direction="row" alignItems="center" spacing={2} mb={4}>
        <Box
          component="img"
          src={locationIcon}
          alt="locationIcon"
          sx={{ height: 54 }}
        />
        <Box>
          <Typography variant="h4" component="h2" fontWeight={400} mb={1}>
            Forms
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Examples and usage guidelines for form control styles, layout
            options, and custom components for creating a wide variety of forms.
          </Typography>
        </Box>
      </Stack>

      {/* Reference Container */}
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{
          backgroundColor: '#f9e5f2',
          borderLeft: '4px solid #c9007b',
          p: '26px',
          mb: 4,
        }}
      >
        <InfoIcon sx={{ color: '#c9007b' }} />
        <Typography variant="body1">
          References to UI Guidelines for forms can be found{' '}
          <Box component="span" sx={{ color: '#0076a8' }}>
            here
          </Box>
        </Typography>
      </Stack>

      {/* Examples Header with Code Button */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5" component="h3" fontWeight={600}>
          Examples
        </Typography>
        <Button
          variant="outlined"
          startIcon={<CodeIcon />}
          sx={{
            borderColor: '#0076a8',
            color: '#0076a8',
            bgcolor: '#e5f1f6',
            '&:hover': {
              bgcolor: '#dcebf2',
              borderColor: '#0076a8',
            },
          }}
        >
          Code
        </Button>
      </Stack>

      {/* Form Fields Section 1 */}
      <Grid container spacing={4} mb={4}>
        <Grid >
          <Typography variant="body1" mb={1}>
            UserName <Box component="span" sx={{ color: 'error.main' }}>*</Box>
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="i.e John Doe"
            size="small"
          />
        </Grid>
        <Grid>
          <Typography variant="body1" mb={1}>
            Phone Number <Box component="span" sx={{ color: 'error.main' }}>*</Box>
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="i.e 900xxxxxxx"
            size="small"
          />
        </Grid>
        <Grid>
          <Typography variant="body1" mb={1}>
            Email Address <Box component="span" sx={{ color: 'error.main' }}>*</Box>
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="i.e smartui@aleo.com"
            size="small"
          />
          <Typography variant="caption" color="text.secondary" mt={1}>
            we will not share your E-mail id with anyone
          </Typography>
        </Grid>
      </Grid>

      {/* Form Fields Section 2 */}
      <Grid container spacing={4} mb={4}>
        <Grid>
          <Typography variant="body1" mb={1}>
            Date of joining <Box component="span" sx={{ color: 'error.main' }}>*</Box>
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="i.e John Doe"
            size="small"
          />
        </Grid>
        <Grid>
          <Typography variant="body1" mb={1}>
            Hours <Box component="span" sx={{ color: 'error.main' }}>*</Box>
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="i.e 900xxxxxxx"
            size="small"
          />
        </Grid>
        <Grid>
          <Typography variant="body1" mb={1}>
            Search input inside icon left icon{' '}
            <InfoIcon sx={{ height: 15, color: '#c9007b', verticalAlign: 'middle' }} />
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="i.e smartui@aleo.com"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <InfoIcon sx={{ color: '#c9007b' }} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>

      <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '32px 0' }} />

      {/* Select 2 Section */}
      <Grid container justifyContent="space-between" alignItems="center" mb={4}>
        <Grid>
          <Typography variant="h5" component="h3" fontWeight={600}>
            Select 2
          </Typography>
          <Typography variant="body1" color="text.secondary">
            In this project, we used select 2 library for select options. If you
            prefer, you can use the single select and multiple select options listed
            below.
          </Typography>
        </Grid>
        <Grid>
          <Button
            variant="outlined"
            startIcon={<CodeIcon />}
            sx={{
              borderColor: '#0076a8',
              color: '#0076a8',
              bgcolor: '#e5f1f6',
              '&:hover': {
                bgcolor: '#dcebf2',
                borderColor: '#0076a8',
              },
            }}
          >
            Code
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Forms;