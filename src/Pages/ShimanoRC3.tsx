import { Box, Typography } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import AccessoriesDetailsPage from "../Components/AccessoriesDetailsPage";
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
import rc3a2 from "../Components/Images/accessories/rc3a2.jpg";
import sp from "../Components/Images/accessories/sp.jpg";
import sp1 from "../Components/Images/accessories/sp1.jpg";



function RC() {
  return (
    <Box mt={1} mb={1}>
      <Header />

      {/* Main content with margin */}
      <Box maxWidth="1500px" mx="auto" px={2}>
        <AccessoriesDetailsPage
                  name="Shimano RC3"
                  price="₱5,600"
                  description="DYNALAST is an anatomically curved last that eliminates angles and conforms better to the natural contours of your foot. The heel sits deeper in the shoe and the fit is snug and close to the foot."

                  images={[rc3, rc3a1, rc3a2]}
                  specs={[
                      { name: "Cleat Type", value: "SPD-SL" },
                      { name: "Pedals", value: "PD-R550, PD-RS500" },
                      { name: "Fit", value: "Unisex" },
                  ]}

                  colors={["#3a3a3c", "#db2434", "#eeecf0"]} sizes={["36-37", "38-39", "40-41", "42-43", "44-45"]}        />

        {/* Suggested items */}
        <Box mt={4}>
          <Typography fontSize={16} fontWeight={500} mb={2} pl={2}>
            You Might Also Like
          </Typography>

          <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center">
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
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

export default RC;
