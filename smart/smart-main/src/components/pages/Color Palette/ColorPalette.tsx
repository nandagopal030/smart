// import React from 'react'

// import './colorpalette.css'
// import locationIcon from '../../../assets/location-icon.svg'

// const ColorPalette = () => {
//   return (
//     <div className="main-container-color">
//       <div className="color-container">
//         <div className="color-location">
//           <img src={locationIcon} alt="" />
//         </div>
//         <div className="color-header">
//           <h2>Color Palette</h2>
//           <p>A color palette, in the digital world, refers to full range of colors that can be displayed on a device screen or other interface, or in <br />
//             some cases, collection and tools for use in aleo Projects
//           </p>
//         </div>
//       </div>
//       <div className="main-colors">
//         <h3>Main colors</h3>
//         <p>The main colors are blue <span>(#0075A9)</span> to be used as a visual recognition and the dark blue <span>(#193CGB)</span> of the winglet to be used to <br />
//           enhance the layout oc communication material.
//         </p>
//       </div>
//       <div className="grid-container-color1">
//         <div className="grid-item1">
//           <h3>#0075A9</h3>
//         </div>
//         <div className="grid-item2">
//           <h3>#4C9EC2</h3>
//         </div>
//         <div className="grid-item3">
//           <h3>#E5F1F6</h3>
//         </div>
//         <div className="grid-item4">
//           <h3>#193C6B</h3>
//         </div>
//         <div className="grid-item5">
//           <h3>#5D7697</h3>
//         </div>
//         <div className="grid-item6">
//           <h3>#E7EBF0</h3>
//         </div>
//       </div>
//       <div className="color-percentage">
//         <div className="grid-percent-item1">
//           <h3>100%</h3>
//         </div>
//         <div className="grid-percent-item1">
//           <h3>70%</h3>
//         </div>
//         <div className="grid-percent-item1">
//           <h3>10%</h3>
//         </div>
//         <div className="grid-percent-item1">
//           <h3>100%</h3>
//         </div>
//         <div className="grid-percent-item1">
//           <h3>70%</h3>
//         </div>
//         <div className="grid-percent-item1">
//           <h3>10%</h3>
//         </div>
//       </div>
//       <div className="main-colors">
//         <h3>Secondary colors</h3>
//         <p>The 9 secondary colors and their screened versions must be used to energize the layout (solid colors, keys, etc.).</p>
//       </div>
//       <div className="secondary-color-container">
//         <div className="color-container-parent1">
//           <div className="col-container1">
//             <div className='packedcontainer'>
//               <div className="col1-item1">
//                 <h3>#82e600</h3>
//               </div>
//               <div className="color-col1-item11">
//                 <h3>100%</h3>
//               </div>
//             </div>
//             <div className='packedcontainer'>
//               <div className="col1-item2">
//                 <h3>#A7ED4C</h3>
//               </div>
//               <div className="color-col1-item11">
//                 <h3>70%</h3>
//               </div>
//             </div>
//             <div className='packedcontainer'>
//               <div className="col1-item3">
//                 <h3>#F2FDE5</h3>
//               </div>
//               <div className="color-col1-item11">
//                 <h3>10%</h3>
//               </div>
//             </div>
//           </div>
//           <div className="col-container2">
//             <div className='packedcontainer'>
//               <div className="col2-item1">
//                 <h3>#4E6B7C</h3>
//               </div>
//               <div className="color-col1-item11">
//                 <h3>100%</h3>
//               </div>
//             </div>
//             <div className='packedcontainer'>

//               <div className="col2-item2">
//                 <h3>#8297A3</h3>
//               </div>
//               <div className="color-col1-item11">
//                 <h3>70%</h3>
//               </div>
//             </div>
//             <div className='packedcontainer'>
//               <div className="col2-item3">
//                 <h3>#EDF0F2</h3>
//               </div>
//               <div className="color-col1-item11">
//                 <h3>10%</h3>
//               </div>
//             </div>
//           </div>
//           <div className="col-container3">
//             <div className='packedcontainer'>
//               <div className="col3-item1">
//                 <h3>#37B4E5</h3>
//               </div>
//               <div className="color-col1-item11">
//                 <h3>100%</h3>
//               </div>
//             </div>
//             <div className='packedcontainer'>
//               <div className="col3-item2">
//                 <h3>#72CAED</h3>
//               </div>
//               <div className="color-col1-item11">
//                 <h3>70%</h3>
//               </div>
//             </div>
//             <div className='packedcontainer'>
//               <div className="col3-item3">
//                 <h3>#EAF7FD</h3>
//               </div>
//               <div className="color-col1-item11">
//                 <h3>10%</h3>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="color-container-parent1">
//           <div className="col-container1">
//             <div className='packedcontainer'>
//               <div className="col2-item1">
//                 <h3>#FFB600</h3>
//               </div>
//               <div className="color-col1-item11">
//                 <h3>100%</h3>
//               </div>
//             </div>
//             <div className='packedcontainer'>
//               <div className="col2-item2">
//                 <h3>#FFCB4C</h3>
//               </div>
//               <div className="color-col1-item11">
//                 <h3>70%</h3>
//               </div>
//             </div>
//             <div className='packedcontainer'>
//               <div className="col2-item3">
//                 <h3>#FFF8E5</h3>
//               </div>
//               <div className="color-col1-item11">
//                 <h3>10%</h3>
//               </div>
//             </div>
//           </div>
//           <div className="col-container2">
//             <div className='packedcontainer'>
//               <div className="col3-item1">
//                 <h3>#DF271C</h3>
//               </div>
//               <div className="color-col1-item11">
//                 <h3>100%</h3>
//               </div>
//             </div>
//             <div className='packedcontainer'>

//               <div className="col3-item2">
//                 <h3>#E8675F</h3>
//               </div>
//               <div className="color-col1-item11">
//                 <h3>70%</h3>
//               </div>
//             </div>
//             <div className='packedcontainer'>
//               <div className="col3-item3">
//                 <h3>#FDEFEF</h3>
//               </div>
//               <div className="color-col1-item11">
//                 <h3>10%</h3>
//               </div>
//             </div>
//           </div>

//           <div className="col-container2">
//             <div className='packedcontainer'>
//               <div className="col4-item1">
//                 <h3>#C9007B</h3>
//               </div>
//               <div className="color-col1-item11">
//                 <h3>100%</h3>
//               </div>
//             </div>
//             <div className='packedcontainer'>

//               <div className="col4-item2">
//                 <h3>#D94CA2</h3>
//               </div>
//               <div className="color-col1-item11">
//                 <h3>70%</h3>
//               </div>
//             </div>
//             <div className='packedcontainer'>
//               <div className="col4-item3">
//                 <h3>#FAE5F1</h3>
//               </div>
//               <div className="color-col1-item11">
//                 <h3>10%</h3>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="col-container-parent3">
//           <div className="col-container2">
//             <div className='packedcontainer'>
//               <div className="col5-item1">
//                 <h3>#008557</h3>
//               </div>
//               <div className="color-col1-item11">
//                 <h3>100%</h3>
//               </div>
//             </div>
//             <div className='packedcontainer'>

//               <div className="col5-item2">
//                 <h3>#4CA989</h3>
//               </div>
//               <div className="color-col1-item11">
//                 <h3>70%</h3>
//               </div>
//             </div>
//             <div className='packedcontainer'>
//               <div className="col5-item3">
//                 <h3>#E5F3EE</h3>
//               </div>
//               <div className="color-col1-item11">
//                 <h3>10%</h3>
//               </div>
//             </div>
//           </div>
//           <div className="col-container2">
//             <div className='packedcontainer'>
//               <div className="col6-item1">
//                 <h3>#DF271C</h3>
//               </div>
//               <div className="color-col1-item11">
//                 <h3>100%</h3>
//               </div>
//             </div>
//             <div className='packedcontainer'>

//               <div className="col6-item2">
//                 <h3>#E8675F</h3>
//               </div>
//               <div className="color-col1-item11">
//                 <h3>70%</h3>
//               </div>
//             </div>
//             <div className='packedcontainer'>
//               <div className="col6-item3">
//                 <h3>#FDEFEF</h3>
//               </div>
//               <div className="color-col1-item11">
//                 <h3>10%</h3>
//               </div>
//             </div>
//           </div>
//           <div className="col-container2">
//             <div className='packedcontainer'>
//               <div className="col7-item1">
//                 <h3>#3B4544</h3>
//               </div>
//               <div className="color-col1-item11">
//                 <h3>100%</h3>
//               </div>
//             </div>
//             <div className='packedcontainer'>

//               <div className="col7-item2">
//                 <h3>#757C7B</h3>
//               </div>
//               <div className="color-col1-item11">
//                 <h3>70%</h3>
//               </div>
//             </div>
//             <div className='packedcontainer'>
//               <div className="col7-item3">
//                 <h3>#EBECEC</h3>
//               </div>
//               <div className="color-col1-item11">
//                 <h3>10%</h3>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="main-colors">
//           <h3>Text Colors</h3>
//           <p>The 100% black is recommended for standard texts.</p>
//         </div>
//       </div>
//        <div className="col-container2">
//             <div className='packedcontainer'>
//               <div className="col8-item1">
//                 <h3>#000000</h3>
//               </div>
//               <div className="color-col1-item11">
//                 <h3>100%</h3>
//               </div>
//             </div>
//             <div className='packedcontainer'>

//               <div className="col8-item2">
//                 <h3>#4C4C4C</h3>
//               </div>
//               <div className="color-col1-item11">
//                 <h3>70%</h3>
//               </div>
//             </div>
//             <div className='packedcontainer'>
//               <div className="col8-item3">
//                 <h3>#E5E5E5</h3>
//               </div>
//               <div className="color-col1-item11">
//                 <h3>10%</h3>
//               </div>
//             </div>
//           </div>
//     </div>
//   )
// }

// export default ColorPalette

import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import locationIcon from '../../../assets/location-icon.svg';


const ColorPalette = () => {

  const mainColors = [
    { hex: '#0075A9', percentage: '100%' },
    { hex: '#4C9EC2', percentage: '70%' },
    { hex: '#E5F1F6', percentage: '10%' },
    { hex: '#193C6B', percentage: '100%' },
    { hex: '#5D7697', percentage: '70%' },
    { hex: '#E7EBF0', percentage: '10%' },
  ];

  const secondaryColors = [
    { colors: ['#82e600', '#A7ED4C', '#F2FDE5'] },
    { colors: ['#4E6B7C', '#8297A3', '#EDF0F2'] },
    { colors: ['#37B4E5', '#72CAED', '#EAF7FD'] },
    { colors: ['#FFB600', '#FFCB4C', '#FFF8E5'] },
    { colors: ['#DF271C', '#E8675F', '#FDEFEF'] },
    { colors: ['#C9007B', '#D94CA2', '#FAE5F1'] },
    { colors: ['#008557', '#4CA989', '#E5F3EE'] },
    { colors: ['#DF271C', '#E8675F', '#FDEFEF'] },
    { colors: ['#3B4544', '#757C7B', '#EBECEC'] },
  ];

  const textColors = [
    { hex: '#000000', percentage: '100%' },
    { hex: '#4C4C4C', percentage: '70%' },
    { hex: '#E5E5E5', percentage: '10%' },
  ];

  const ColorBlock = ({ hex, percentage, color = 'text.primary' }) => (
    <Box
      sx={{
        bgcolor: hex,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: color,
        height: '60px',
        width: '110px',
        textAlign: 'center',
      }}
    >
      <Typography variant="h6" fontWeight={600}>
        {hex}
      </Typography>
    </Box>
  );

  const PercentageBlock = ({ percentage }) => (
    <Box
      sx={{
        width: '110px',
        height: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="body1" color="text.secondary">
        {percentage}
      </Typography>
    </Box>
  );

  return (
    <Box sx={{ p: 4, marginLeft:'3%',}}>
      {/* Header Section */}
      <Stack direction="row" alignItems="center" spacing={2} mb={4}>
        <Box
          component="img"
          src={locationIcon}
          alt="Location Icon"
          sx={{ height: 60 }}
        />
        <Box>
          <Typography variant="h3" component="h2" color="#193C6B" fontWeight={500} mb={1}>
            Color Palette
          </Typography>
          <Typography variant="body1" color="text.secondary">
            A color palette, in the digital world, refers to the full range of colors that can be
            displayed on a device screen or other interface, or in some cases, a collection <br />
            and tools for use in Aleo Projects.
          </Typography>
        </Box>
      </Stack>

      {/* Main Colors Section */}
      <Box mb={4}>
        <Typography variant="h4" component="h3" color="#193C6B" fontWeight={600} mb={1}>
          Main colors
        </Typography>
        <Typography variant="body1" color="text.secondary">
          The main colors are blue <Box component="span" sx={{ color: 'primary.main' }}>(#0075A9)</Box> to be used
          as a visual recognition and the dark blue <Box component="span" sx={{ color: 'primary.dark' }}>(#193C6B)</Box>
          of the winglet to be used to enhance the layout of communication material.
        </Typography>
      </Box>

      {/* Main Color Palette Grid */}
      <Grid container spacing={0} mb={2}>
        {mainColors.map((color, index) => (
          <Grid >
            <ColorBlock hex={color.hex} />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={0} mb={6}>
        {mainColors.map((color, index) => (
          <Grid >
            <PercentageBlock percentage={color.percentage} />
          </Grid>
        ))}
      </Grid>

      {/* Secondary Colors Section */}
      <Box mb={4}>
        <Typography variant="h4" component="h3" color="#193C6B" fontWeight={600} mb={1}>
          Secondary colors
        </Typography>
        <Typography variant="body1" color="text.secondary">
          The 9 secondary colors and their screened versions must be used to energize the layout (solid colors, keys, etc.).
        </Typography>
      </Box>

      {/* Secondary Color Palette Grids */}
      <Grid container spacing={2} mb={4} maxWidth='70%'>
        {secondaryColors.map((group, index) => (
          <Grid>
            <Stack direction="row" mb={1} sx={{ '& > div': { width: '33.33%' } }}>
              <ColorBlock hex={group.colors[0]} />
              <ColorBlock hex={group.colors[1]} />
              <ColorBlock hex={group.colors[2]} />
            </Stack>
            <Stack direction="row">
              <PercentageBlock percentage="100%" />
              <PercentageBlock percentage="70%" />
              <PercentageBlock percentage="10%" />
            </Stack>
          </Grid>
        ))}
      </Grid>

      {/* Text Colors Section */}
      <Box mb={2}>
        <Typography variant="h4" component="h3" color="#193C6B" fontWeight={600} mb={1}>
          Text Colors
        </Typography>
        <Typography variant="body1" color="text.secondary">
          The 100% black is recommended for standard texts.
        </Typography>
      </Box>

      {/* Text Color Palette Grid */}
      <Grid container spacing={0}>
        {textColors.map((color, index) => (
          <Grid >
            <ColorBlock hex={color.hex} color={index === 0 ? 'white' : 'black'} />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={0}>
        {textColors.map((color, index) => (
          <Grid >
            <PercentageBlock percentage={color.percentage} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ColorPalette;