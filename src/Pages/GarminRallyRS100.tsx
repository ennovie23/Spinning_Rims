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
import speed1 from "../Components/Images/accessories/speed2.jpg";
import bt from "../Components/Images/accessories/bt.jpg";
import bt1 from "../Components/Images/accessories/bt1.jpg";

function GarminRallyRS100() {
  return (
    <Box mt={1} mb={1}>
      <Header />

      {/* Main content with margin */}
      <Box maxWidth="1500px" mx="auto" px={2}>
        <AccessoriesDetailsPage
          name="Garmin Rally RS 100"
          price="₱39,950"
          description="Rally RS100 is tested to the extreme, so you can ride there too. This single-sensing power meter delivers reliable power measurements and is easy to transfer between bikes no matter what bike you’re on or where you’re riding. Compatible with shimano SPD-SL cleats"
          images={[cleats, cleats1, cleats2]}
          specs={[
            { name: "Weight", value: "328 g" },
            { name: "Water Resistance", value: "IPX7" },
            { name: "Cleat Type", value: "SPD-SL" },
            { name: "Q-Factor", value: "53 mm" },
            { name: "Stack Height", value: "12.2 mm" },
          ]} colors={[]}        />

        {/* Suggested items */}
        <Box mt={4}>
          <Typography fontSize={16} fontWeight={500} mb={2} pl={2}>
            You Might Also Like
          </Typography>

          <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center">
            <AccItemDisplayTemplate
              name="Garmin Edge 1040 Solar"
              price="₱47,080"
              image1={speed}
              image2={speed1}
              navigateTo="/GarminEdge1040Solar"
            />
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
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

export default GarminRallyRS100;
