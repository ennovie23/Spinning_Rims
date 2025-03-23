import { Box, Typography } from "@mui/material";
import coverPhoto from "../Components/Images/acc-page-bg-photo.jpg";
import "../App.css";
import AccItemDisplayTemplate from "../Components/AccItemDisplayTemplate";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import cleats from "../Components/Images/accessories/cleats.jpg";
import cleats1 from "../Components/Images/accessories/cleats2.jpg";
import flight from "../Components/Images/accessories/flight.jpg";
import flight1 from "../Components/Images/accessories/flight1.jpeg";
import jer from "../Components/Images/accessories/jer.jpg";
import jer1 from "../Components/Images/accessories/jer1.jpg";
import rockbros from "../Components/Images/accessories/rockbros.png";
import rockbros1 from "../Components/Images/accessories/rockbros1.png";
import speed from "../Components/Images/accessories/speed.jpg";
import speed1 from "../Components/Images/accessories/speed2.jpg";
import bt from "../Components/Images/accessories/bt.jpg";
import bt1 from "../Components/Images/accessories/bt1.jpg";
import rs from "../Components/Images/accessories/rs.jpg";
import rs1 from "../Components/Images/accessories/rs1.jpg";
import rc3 from "../Components/Images/accessories/rc3.jpg";
import rc3a1 from "../Components/Images/accessories/rc3a1.jpg";
import fox from "../Components/Images/accessories/fox.jpg";
import fox1 from "../Components/Images/accessories/fox1.jpg";
import sp from "../Components/Images/accessories/sp.jpg";
import sp1 from "../Components/Images/accessories/sp1.jpg";


import BgPhotoFrame from "../Components/BgPhotoFrame";


function AccessoriesPage() {
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
          Accessories
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
            marginTop: 5
          }}
      >
        <AccItemDisplayTemplate
          name="Garmin Rally RS 100"
          price="₱39,950"
          image1={cleats}
          image2={cleats1}
          // navigateTo="/Home" {example of navigating to its page}
        />

        <AccItemDisplayTemplate
          name="Garmin Edge 1040 Solar"
          price="₱47,080"
          image1={speed}
          image2={speed1}
        />

        <AccItemDisplayTemplate
          name="Rockbros Q4"
          price="₱350"
          image1={rockbros}
          image2={rockbros1}
        />

        <AccItemDisplayTemplate
          name="Rockbros 1000 Lumens"
          price="₱1,100"
          image1={flight}
          image2={flight1}
        />

        <AccItemDisplayTemplate
          name="GCN Core 2.0"
          price="₱5,600"
          image1={jer}
          image2={jer1}
        />

<AccItemDisplayTemplate
          name="ENVE Composite Bar Tape"
          price="₱1,100"
          image1={bt}
          image2={bt1}
        />

        <AccItemDisplayTemplate
          name="RockShox Rear Coil Super Deluxe RCT"
          price="₱35,100"
          image1={rs}
          image2={rs1}
        />

        <AccItemDisplayTemplate
          name="Fox Factory 40 Triple Crown"
          price="₱102,100"
          image1={rc3}
          image2={rc3a1}
        />

        <AccItemDisplayTemplate
          name="Black Inc Carbon Seatpost"
          price="₱3,500"
          image1={fox}
          image2={fox1}
        />

        <AccItemDisplayTemplate
          name="GCN Core 2.0"
          price="₱5,600"
          image1={sp}
          image2={sp1}
        />
      </Box>

 
      <Footer />
    </Box>
  );
}

export default AccessoriesPage;
