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
          paddingTop: 17,
        }}
      >
         <BgPhotoFrame image={coverPhoto}/>

        <Typography
          sx={{
            position: "absolute",
            top: "103%",
            left: "20%",
            transform: "translate(-50%, -50%)",
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
          gap: 2,
        }}
      >
        <BikeItemDisplayTemplate
          name="Trek Rail 9"
          price="₱500,000"
          image={eb1}
        />

        <BikeItemDisplayTemplate
          name="Trek Marlin+ 6d"
          price="₱200,000"
          image={eb2}
        />

        <BikeItemDisplayTemplate
          name="Trek Powerfly 7"
          price="₱200,000"
          image={eb3}
        />

        <BikeItemDisplayTemplate
          name="Cube Kathmandu Hybrid"
          price="₱350,000"
          image={eb4}
        />

        <BikeItemDisplayTemplate
          name="Cube Reaction"
          price="₱200,000"
          image={eb5}
        />

        <BikeItemDisplayTemplate
          name="Cube Stereo Hybrid"
          price="₱300,000"
          image={eb6}
        />

        <BikeItemDisplayTemplate
          name="Scott Contessa eRide"
          price="₱350,000"
          image={eb7}
        />

        <BikeItemDisplayTemplate
          name="Scott Strike"
          price="₱350,000"
          image={eb8}
        />

        <BikeItemDisplayTemplate
          name="Scott Aspect"
          price="₱200,000"
          image={eb9}
        />

        <BikeItemDisplayTemplate
          name="Giant Trance X Advanced e+"
          price="₱800,000"
          image={eb10}
        />


        
      </Box>
      <Footer />
    </Box>
  );
}

export default EbPage;
