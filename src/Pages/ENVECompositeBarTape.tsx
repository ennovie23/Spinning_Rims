import { Box, Typography } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import AccessoriesDetailsPage from "../Components/AccessoriesDetailsPage1";
import AccItemDisplayTemplate from "../Components/AccItemDisplayTemplate";

import cleats from "../Components/Images/accessories/cleats.jpg";
import cleats1 from "../Components/Images/accessories/cleats1.jpg";
import cleats2 from "../Components/Images/accessories/cleats2.jpg";
import flight from "../Components/Images/accessories/flight.jpg";
import flight1 from "../Components/Images/accessories/flight1.jpeg";
import flight2 from "../Components/Images/accessories/flight2.jpeg";
import jer from "../Components/Images/accessories/jer.jpg";
import jer1 from "../Components/Images/accessories/jer1.jpg";
import jer2 from "../Components/Images/accessories/jer2.jpg";
import rockbros from "../Components/Images/accessories/rockbros.png";
import rockbros1 from "../Components/Images/accessories/rockbros1.png";
import rockbros2 from "../Components/Images/accessories/rockbros2.png";
import rockbros3 from "../Components/Images/accessories/rockbros3.png";
import rockbros4 from "../Components/Images/accessories/rockbros4.png";
import speed from "../Components/Images/accessories/speed.jpg";
import speed1 from "../Components/Images/accessories/speed1.jpg";
import speed2 from "../Components/Images/accessories/speed2.jpg";
import bt from "../Components/Images/accessories/bt.jpg";
import bt1 from "../Components/Images/accessories/bt1.jpg";
import bt2 from "../Components/Images/accessories/bt2.jpg";
import bt3 from "../Components/Images/accessories/bt3.jpg";
import rs from "../Components/Images/accessories/rs.jpg";
import rs1 from "../Components/Images/accessories/rs1.jpg";
import fox from "../Components/Images/accessories/fox.jpg";
import fox1 from "../Components/Images/accessories/fox1.jpg";
import rc3 from "../Components/Images/accessories/rc3.jpg";
import rc3a1 from "../Components/Images/accessories/rc3a1.jpg";
import sp from "../Components/Images/accessories/sp.jpg";
import sp1 from "../Components/Images/accessories/sp1.jpg";



function ENVE() {
  return (
    <Box mt={1} mb={1}>
      <Header />

      {/* Main content with margin */}
      <Box maxWidth="1500px" mx="auto" px={2}>
        <AccessoriesDetailsPage
          name="ENVE Composite Bar Tape"
          price="₱1,100"
          description="ENVE designed bar tape that provides maximum ride feel without compromising comfort and ensures grip in wet conditions. 250cm in length, 3mm thick, and silicone-backed compound that provides the right amount of stretch for ease of installation and durability."

          images={[bt, bt1, bt2, bt3]}
          specs={[
            { name: "Length", value: "250cm in Length Accommodates bars up to 50cm" },
            { name: "Grip", value: "Grip compound maintains traction when wet" },
            { name: "Material", value: "Vibration damping backer strip" },
            { name: "Quality", value: "Hard wearing construction" },
            { name: "Ease Of Use", value: "Durable stretch for installation" },
          ]}

          colors={["#e6e6e6", "#8a8a8a", "#2b2b2b"]}        />

        {/* Suggested items */}
        <Box mt={4}>
          <Typography fontSize={16} fontWeight={500} mb={2} pl={2}>
            You Might Also Like
          </Typography>

          <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center">
            <AccItemDisplayTemplate
              name="RockShox Rear Coil Super Deluxe RCT"
              price="₱35,100"
              image1={rs}
              image2={rs1}
              navigateTo="/RockShoxRearCoilSuperDeluxeRCT"
            />
            <AccItemDisplayTemplate
              name="Fox Factory 40 Triple Crown"
              price="₱102,100"
              image1={fox}
              image2={fox1}
              navigateTo="/FoxFactory40TripleCrown"
            />
            <AccItemDisplayTemplate
              name="ShimanoRC3"
              price="₱5,600"
              image1={rc3}
              image2={rc3a1}
              navigateTo="/ShimanoRC3"
            />
            <AccItemDisplayTemplate
              name="Black Inc Seatpost"
              price="₱3,500"
              image1={sp}
              image2={sp1}
              navigateTo="/BlackIncSeatpost"
            />
            <AccItemDisplayTemplate
              name="Garmin Rally RS100"
              price="₱39,950"
              image1={cleats}
              image2={cleats1}
              navigateTo="/GarminRallyRS100"
            />
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

export default ENVE;
