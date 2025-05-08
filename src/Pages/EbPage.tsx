import { Box, Typography } from "@mui/material";
import BikeItemDisplayTemplate from "../Components/BikeItemDisplayTemplate";
import Dropdown from "../Components/Dropdown";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import coverPhoto from "../Components/Images/eb-page-bg-photo.webp";
import eb1 from "../Components/Images/bike/eb1.jpg";
import eb10 from "../Components/Images/bike/eb10.jpg";
import eb2 from "../Components/Images/bike/eb2.jpg";
import eb3 from "../Components/Images/bike/eb3.jpg";
import eb4 from "../Components/Images/bike/eb4.jpg";
import eb5 from "../Components/Images/bike/eb5.jpg";
import eb6 from "../Components/Images/bike/eb6.jpg";
import eb7 from "../Components/Images/bike/eb7.jpg";
import eb8 from "../Components/Images/bike/eb8.jpg";
import eb9 from "../Components/Images/bike/eb9.jpg";
import BgPhotoFrame from "../Components/BgPhotoFrame";

function EbPage() {
  return (
    <Box>
      <Header />
      <Box
        sx={{
          position: "relative",
        }}
      >
        <BgPhotoFrame image={coverPhoto} />

        <Typography
          sx={{
            position: "absolute", 
            bottom: "10%",     
            left: "5%",   
            marginLeft: 35,     
            marginBottom: 10,
            transform: "translate(-50%, 50%)", // Adjust so it aligns well
            fontFamily: '"Afacad", sans-serif',
            fontWeight: "bold",
            fontSize: 95,
            color: "white",
            textShadow: "2px 17px 10px rgba(0,0,0,0.5)",
            WebkitTextStroke: "1px black",
          }}
        >
          Electric Bikes
        </Typography>
      </Box>

      <Dropdown />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(5, 1fr)",
          },
          columnGap: 5,
          rowGap: 4,
          px: 2,
          py: 6,
          maxWidth: "1700px",
          margin: "0 auto",
        }}
      >
        <BikeItemDisplayTemplate 
        name="Trek Rail 9" 
        price="₱500,000" 
        image={eb1} 
        navigateTo="/TrekRail9"
        />
        <BikeItemDisplayTemplate 
        name="Trek Marlin+ 6d" 
        price="₱200,000" 
        image={eb2} 
        navigateTo="/TrekMarlin6d"
        />
        <BikeItemDisplayTemplate 
        name="Trek Powerfly 7" 
        price="₱200,000" 
        image={eb3} 
        navigateTo="/TrekPowerfly7"
        />
        <BikeItemDisplayTemplate 
        name="Cube Kathmandu Hybrid" 
        price="₱350,000" 
        image={eb4} 
        navigateTo="/CubeKath"
        />
        <BikeItemDisplayTemplate 
        name="Cube Reaction" 
        price="₱200,000" 
        image={eb5} 
        navigateTo="/CubeReac"
        />
        <BikeItemDisplayTemplate 
        name="Cube Stereo Hybrid" 
        price="₱300,000" 
        image={eb6} 
        navigateTo="/CubeStereo"
        />
        <BikeItemDisplayTemplate 
        name="Scott Contessa eRide" 
        price="₱350,000" 
        image={eb7} 
        navigateTo="/ScottCont"
        />
        <BikeItemDisplayTemplate 
        name="Scott Strike" 
        price="₱350,000" 
        image={eb8} 
        navigateTo="/ScottStrike"
        />
        <BikeItemDisplayTemplate 
        name="Scott Aspect" 
        price="₱200,000" 
        image={eb9} 
        navigateTo="/ScottAspect"
        />
        <BikeItemDisplayTemplate 
        name="Giant Trance X Advanced e+" 
        price="₱800,000" 
        image={eb10} 
        navigateTo="/GiantTrance"
        />
      </Box>

      <Footer />
    </Box>
  );
}

export default EbPage;
