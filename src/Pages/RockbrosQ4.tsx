import { Box, Typography } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import AccessoriesDetailsPage from "../Components/AccessoriesDeatilsPage1";
import AccItemDisplayTemplate from "../Components/AccItemDisplayTemplate";

import cleats from "../Components/Images/accessories/cleats.jpg";
import cleats1 from "../Components/Images/accessories/cleats1.jpg";
import cleats2 from "../Components/Images/accessories/cleats2.jpg";
import flight from "../Components/Images/accessories/flight.jpg";
import flight1 from "../Components/Images/accessories/flight1.jpeg";
import jer from "../Components/Images/accessories/jer.jpg";
import jer1 from "../Components/Images/accessories/jer1.jpg";
import rockbros from "../Components/Images/accessories/rockbros.png";
import rockbros1 from "../Components/Images/accessories/rockbros1.png";
import rockbros2 from "../Components/Images/accessories/rockbros2.jpg";
import rockbros3 from "../Components/Images/accessories/rockbros3.jpg";
import rockbros4 from "../Components/Images/accessories/rockbros4.jpg";
import speed from "../Components/Images/accessories/speed.jpg";
import speed1 from "../Components/Images/accessories/speed1.jpg";
import speed2 from "../Components/Images/accessories/speed2.jpg";
import bt from "../Components/Images/accessories/bt.jpg";
import bt1 from "../Components/Images/accessories/bt1.jpg";
import rs from "../Components/Images/accessories/rs.jpg";
import rs1 from "../Components/Images/accessories/rs1.jpg";
import fox from "../Components/Images/accessories/fox.jpg";
import fox1 from "../Components/Images/accessories/fox1.jpg";


function Q4() {
  return (
    <Box mt={1} mb={1}>
      <Header />

      {/* Main content with margin */}
      <Box maxWidth="1500px" mx="auto" px={2}>
        <AccessoriesDetailsPage
          name="Rockbros Q4"
          price="₱350"
          description="The ROCKBROS Smart Bike Brake & Tail Light Q4 is perfect for your daily ride. It shows other road users you and your bike clearly from behind and lights up brighter when you brake—signalling to drivers and other road users of your braking intentions.
"
          images={[rockbros, rockbros1, rockbros2, rockbros3, rockbros4]}
          specs={[
            { name: "Weight", value: "23 g" },
            { name: "Water Resistance", value: "IPX6" },
            { name: "Modes", value: "red slow flashing / red/blue/purple breathing / red/blue/purple flash / red constant" },
            { name: "Light Modes", value: "low / medium / high" },
            { name: "Battery Life", value: "About 2000 mAh" },
          ]}
          colors={[]}
        />

        {/* Suggested items */}
        <Box mt={4}>
          <Typography fontSize={16} fontWeight={500} mb={2} pl={2}>
            You Might Also Like
          </Typography>

          <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center">
            <AccItemDisplayTemplate
              name="Rockbros 1000 Lumens"
              price="₱1,100"
              image1={flight}
              image2={flight1}
              navigateTo="/Rockbros1000Lumens"
            />
            <AccItemDisplayTemplate
              name="GCN Core 2.0"
              price="₱5,600"
              image1={jer}
              image2={jer1}
              navigateTo="/GCNCore2.0"
            />
            <AccItemDisplayTemplate
              name="ENVE Composite Bar Tape"
              price="₱1,100"
              image1={bt}
              image2={bt1}
              navigateTo="/ENVECompositeBarTape"
            />
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
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

export default Q4;
