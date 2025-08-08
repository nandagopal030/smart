import React from "react"
import { useState, useEffect } from "react";
import './Typography.css'
// 
import locationIcon from '../../../assets/location-icon.svg';


const Typography = () => {

  
  return (
    <>
      <div className="main-container" id="main">
        <div className="child-container" >
          <div className="typography-container" >
            <div className="typography-content">
              <img src={locationIcon} alt="location_Icon" />
              <div>
                <h2>Typography</h2>
                <div>
                  <p>Documentation and examples for Valeo typography, including global settings, headings, body text, lists, and more</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reference-container">
            <div className="reference-contents">
              <span className="material-symbols-outlined"></span>
              <div>
                <p>References to UI Guidelines for fonts can be found <a href="">here</a></p>
              </div>
            </div>
          </div>


          <div className="fontshead">
            <h5>Fonts</h5>
          </div>
          <div className="font-container">

            <div className="font-div-1">

              <div className="for-heading">
                <h6>For Headings</h6>
                <p><span>font-family : </span>'Montserrat', sans-serif;</p>
                <p><span>font-weight:</span> 100,200,300,400,500,600</p>
              </div>
              <div className="for-Aa">
                <h1>Aa</h1>
              </div>
            </div>

            <div className="font-div-2">
              <div className="for-body-content">
                <h6>For Body Contents</h6>
                <p> <span> font-family :</span>'Roboto', sans-serif</p>
                <p> <span>font-weight : </span>100,200,300,400,500,600</p>
              </div>
              <div className="for-Aa2">
                <h1>Aa</h1>
              </div>
            </div>
          </div>

          <div className="example-container">
            <div className="example-contents">
              <div className="example-heading">
                <h3>Examples</h3>
                <p>Below Headings are defined to work best in the meet of your page content.</p>
              </div>
              {/* <div className="example-code">
               <button>Code</button>
              </div> */}
            </div>

            <div className="text-size-container">
              <div className="text-size-row">
                <div className="tag-label"><h5>h1</h5></div>
                <div className="tag-example"><h1>Title</h1></div>
              </div>

              <div className="text-size-row">
                <div className="tag-label"><h5>h2</h5></div>
                <div className="tag-example"><h2>Subtitle</h2></div>
              </div>

              <div className="text-size-row">
                <div className="tag-label"><h5>h3</h5></div>
                <div className="tag-example"><h3>Heading 1</h3></div>
              </div>

              <div className="text-size-row">
                <div className="tag-label"><h5>h4</h5></div>
                <div className="tag-example"><h4>Heading 2</h4></div>
              </div>

              <div className="text-size-row">
                <div className="tag-label"><h5>h5</h5></div>
                <div className="tag-example"><h5>Heading 3</h5></div>
              </div>

              <div className="text-size-row">
                <div className="tag-label"><h5>h6</h5></div>
                <div className="tag-example"><h6>Heading 4</h6></div>
              </div>

              <div className="text-size-row">
                <div className="tag-label"><h5>Default Text</h5></div>
                <div className="tag-example"><h6>Default text</h6></div>
              </div>

              <div className="text-size-row">
                <div className="tag-label"><h5>Small Text</h5></div>
                <div className="tag-example"><h6>small text</h6></div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Typography;



//React using Material UI code
// import React from "react";
// import { Box, Grid, Typography, Link, Divider } from "@mui/material";
// import locationIcon from "../../../assets/location-icon.svg";

// const TypographyPage = () => {
//   return (
//     <Box
//       sx={{
//         ml: { xs: 0, sm: "6%", md: "7%", lg: "80px" },
//         px: { xs: 2, sm: 3 },
//         fontFamily: "'Montserrat', sans-serif",
//       }}
//     >
//       <Box sx={{ width: { xs: "100%", sm: "90%", md: "75%" } }}>
//         {/* Header Section */}
//         <Grid container spacing={2} alignItems="center">
//           <Grid >
//             <Box component="img" src={locationIcon} alt="Location Icon" sx={{ height: { xs: 45, sm: 55 }, mt: 2 }} />
//           </Grid>
//           <Grid >
//             <Typography variant="h5" sx={{ color: "#193C6B", fontWeight: 600, lineHeight: 1.2 }}>
//               Typography
//             </Typography>
//             <Typography sx={{ mt: 1 }}>
//               Documentation and examples for Valeo typography, including global settings, headings, body text, lists, and more.
//             </Typography>
//           </Grid>
//         </Grid>

//         {/* Reference Section */}
//         <Box
//           sx={{
//             mt: 2,
//             p: 1,
//             backgroundColor: "#f9e5f2",
//             borderLeft: "5px solid #c9007b",
//             width: "95%",
//           }}
//         >
//           <Typography sx={{ ml: { xs: 0, sm: 6 }, mt: { xs: 1, sm: 0 } }}>
//             References to UI Guidelines for fonts can be found{" "}
//             <Link href="#" color="primary">
//               here
//             </Link>
//           </Typography>
//         </Box>

//         {/* Fonts Section */}
//         <Box mt={3}>
//           <Typography variant="h6" sx={{ mb: 2 }}>
//             Fonts
//           </Typography>

//           <Grid container spacing={2}>
//             <Grid  >
//               <Typography variant="subtitle1">For Headings</Typography>
//               <Typography>
//                 <strong style={{ color: "#c9007b" }}>font-family:</strong> 'Montserrat', sans-serif
//               </Typography>
//               <Typography>
//                 <strong style={{ color: "#c9007b" }}>font-weight:</strong> 100, 200, 300, 400, 500, 600
//               </Typography>
//               <Typography variant="h2" sx={{ color: "#193C6B", fontWeight: 400, mt: 2 }}>
//                 Aa
//               </Typography>
//             </Grid>

//             <Grid >
//               <Typography variant="subtitle1" sx={{ color: "#193C6B" }}>
//                 For Body Contents
//               </Typography>
//               <Typography>
//                 <strong style={{ color: "#c9007b" }}>font-family:</strong> 'Roboto', sans-serif
//               </Typography>
//               <Typography>
//                 <strong style={{ color: "#c9007b" }}>font-weight:</strong> 100, 200, 300, 400, 500, 600
//               </Typography>
//               <Typography variant="h2" sx={{ color: "#193C6B", fontWeight: 400, mt: 2 }}>
//                 Aa
//               </Typography>
//             </Grid>
//           </Grid>
//         </Box>

//         {/* Examples Section */}
//         <Box mt={5}>
//           <Grid container spacing={2}>
//             <Grid >
//               <Typography variant="h6" sx={{ color: "#193C6B", mb: 1 }}>
//                 Examples
//               </Typography>
//               <Typography variant="body2">
//                 Below Headings are defined to work best in the meet of your page content.
//               </Typography>
//             </Grid>
//             <Grid >
//               <Typography variant="h6" align="right">
//                 Code
//               </Typography>
//             </Grid>
//           </Grid>

//           <Divider sx={{ my: 3 }} />

//           <Box display="flex" flexDirection="column" gap={2}>
//             {[
//               { tag: "h1", text: "Title", size: "h1" },
//               { tag: "h2", text: "Subtitle", size: "h2" },
//               { tag: "h3", text: "Heading 1", size: "h3" },
//               { tag: "h4", text: "Heading 2", size: "h4" },
//               { tag: "h5", text: "Heading 3", size: "h5" },
//               { tag: "h6", text: "Heading 4", size: "h6" },
//               { tag: "Default Text", text: "Default text", size: "body1" },
//               { tag: "Small Text", text: "small text", size: "body2" },
//             ].map((item, idx) => (
//               <Box key={idx} display="flex" flexDirection={{ xs: "column", sm: "row" }} gap={2} alignItems="flex-start">
//                 <Typography variant="subtitle1" sx={{ color: "#193C6B", width: { sm: 150 } }}>
//                   {item.tag}
//                 </Typography>
//                 <Typography  sx={{ color: "#193C6B" }}>
//                   {item.text}
//                 </Typography>
//               </Box>
//             ))}
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default TypographyPage;