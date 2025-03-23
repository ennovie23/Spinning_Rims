import { Box, Typography } from "@mui/material";
import BikeItemDisplayTemplate from "../Components/BikeItemDisplayTemplate";
import Dropdown from "../Components/Dropdown";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import coverPhoto from "../Components/Images/fsb-page-bg-photo.jpg";
import fsb1 from "../Components/Images/bike/fsb1.jpg";
import fsb10 from "../Components/Images/bike/fsb10.jpg";
import fsb2 from "../Components/Images/bike/fsb2.jpg";
import fsb3 from "../Components/Images/bike/fsb3.jpg";
import fsb4 from "../Components/Images/bike/fsb4.jpg";
import fsb5 from "../Components/Images/bike/fsb5.jpg";
import fsb6 from "../Components/Images/bike/fsb6.jpg";
import fsb7 from "../Components/Images/bike/fsb7.jpg";
import fsb8 from "../Components/Images/bike/fsb8.jpg";
import fsb9 from "../Components/Images/bike/fsb9.jpg";
import BgPhotoFrame from "../Components/BgPhotoFrame";

function FsbPage() {
  return (
    <Box>
      <Header />
      <Box
        sx={{
          paddingTop: 17,
        }}
      >
        <BgPhotoFrame image={coverPhoto}/>

        <Typography
          sx={{
            position: "absolute",
            top: "103%",
            left: "31%",
            transform: "translate(-50%, -50%)",
            fontFamily: '"Afacad", sans-serif',
            fontWeight: "bold",
            fontSize: 95,
            color: "white",
            textShadow: "2px 17px 10px rgba(0,0,0,0.5)",
            WebkitTextStroke: "1px black", 
            
          }}
        >
          Full Suspension Bikes
        </Typography>

        <Box
          sx={{
            position: "absolute",
            top: "68%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        ></Box>
      </Box>

      <Dropdown />

      <Box
        sx={{
          width: "100%",
          paddingLeft: 5,
          paddingRight: 5,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          position: "relative",
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        <BikeItemDisplayTemplate
          name="Cube Stereo HPC"
          price="₱500,000"
          image={fsb1}
        />

        <BikeItemDisplayTemplate
          name="Cube AMS"
          price="₱350,000"
          image={fsb2}
        />

        <BikeItemDisplayTemplate
          name="Trek Fuel EX 9.8 GX"
          price="₱350,000"
          image={fsb3}
        />

        <BikeItemDisplayTemplate
          name="Trek Supercaliber 9.7"
          price="₱400,000"
          image={fsb4}
        />

        <BikeItemDisplayTemplate
          name="Santa Cruz Blur CS"
          price="₱400,000"
          image={fsb5}
        />

        <BikeItemDisplayTemplate
          name="Santa Cruz Mega Tower 2"
          price="₱380,000"
          image={fsb6}
        />

        <BikeItemDisplayTemplate
          name="Scott Genius 910"
          price="₱380,000"
          image={fsb7}
        />

        <BikeItemDisplayTemplate
          name="Scott Park 970"
          price="₱180,000"
          image={fsb8}
        />

        <BikeItemDisplayTemplate
          name="S - Works Stumpjumper"
          price="₱680,000"
          image={fsb9}
        />

        <BikeItemDisplayTemplate
          name="S - Works Ennduro LTD"
          price="₱700,000"
          image={fsb10}
        />


        
      </Box>
      <Footer />
    </Box>
  );
}

export default FsbPage;
