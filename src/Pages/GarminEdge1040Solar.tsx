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
import speed from "../Components/Images/accessories/speed.jpg";
import speed1 from "../Components/Images/accessories/speed1.jpg";
import speed2 from "../Components/Images/accessories/speed2.jpg";
import bt from "../Components/Images/accessories/bt.jpg";
import bt1 from "../Components/Images/accessories/bt1.jpg";
import rs from "../Components/Images/accessories/rs.jpg";
import rs1 from "../Components/Images/accessories/rs1.jpg";


function GarminEdge() {
  return (
    <Box mt={1} mb={1}>
      <Header />

      {/* Main content with margin */}
      <Box maxWidth="1500px" mx="auto" px={2}>
        <AccessoriesDetailsPage
          name="Garmin Edge 1040 Solar"
          price="₱47,080"
          description="Never stop cycling with the ultimate solar powered GPS bike computer you can depend on when you need it most. Has cutting edge technology to track yiur fitness. Edge 1040 Solar is ready for any ride, from remote gravel trails to epic climbs."
          images={[speed, speed1, speed2]}
          specs={[
            { name: "Weight", value: "4.7 oz (133 g)" },
            { name: "Water Resistance", value: "IPX71" },
            { name: "GPS", value: "Preloaded Garmin cycle map" },
            { name: "External Memory Storage", value: "64 GB internal memory only" },
            { name: "Battery Life", value: "45 Hours" },
          ]} colors={[]}        />

        {/* Suggested items */}
        <Box mt={4}>
          <Typography fontSize={16} fontWeight={500} mb={2} pl={2}>
            You Might Also Like
          </Typography>

          <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center">
            <AccItemDisplayTemplate
              name="Rockbros Q4"
              price="₱350"
              image1={rockbros}
              image2={rockbros1}
              navigateTo="/RockbrosQ4"
            />
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
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

export default GarminEdge;
