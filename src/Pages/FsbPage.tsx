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

      <Box position="relative">
        <BgPhotoFrame image={coverPhoto} />
        <Typography
          sx={{
            position: "absolute",
            bottom: "10%",
            left: "5%",
            fontFamily: '"Afacad", sans-serif',
            fontWeight: "bold",
            fontSize: { xs: 40, sm: 60, md: 80, lg: 95 },
            color: "white",
            textShadow: "2px 17px 10px rgba(0,0,0,0.5)",
            WebkitTextStroke: "1px black",
          }}
        >
          Full Suspension Bikes
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
          name="Cube Stereo HPC"
          price="₱500,000"
          image={fsb1}
          navigateTo="/CubeStereoHPC"
        />
        <BikeItemDisplayTemplate
          name="Cube AMS"
          price="₱350,000"
          image={fsb2}
          navigateTo="/CubeAMS"
        />
        <BikeItemDisplayTemplate
          name="Trek Fuel EX 9.8 GX"
          price="₱350,000"
          image={fsb3}
          navigateTo="/TrekFuelEX9.8GX"
        />
        <BikeItemDisplayTemplate
          name="Trek Supercaliber 9.7"
          price="₱400,000"
          image={fsb4}
          navigateTo="/TrekSupercaliber9.7"
        />
        <BikeItemDisplayTemplate
          name="Santa Cruz Blur CS"
          price="₱400,000"
          image={fsb5}
          navigateTo="/SantaCruzBlurCS"
        />
        <BikeItemDisplayTemplate
          name="Santa Cruz Mega Tower 2"
          price="₱380,000"
          image={fsb6}
          navigateTo="/SantaCruzMegaTower2"
        />
        <BikeItemDisplayTemplate
          name="Scott Genius 910"
          price="₱380,000"
          image={fsb7}
          navigateTo="/ScottGenius910"
        />
        <BikeItemDisplayTemplate
          name="Scott Spark 970"
          price="₱180,000"
          image={fsb8}
          navigateTo="/ScottSpark970"
        />
        <BikeItemDisplayTemplate
          name="S - Works Stumpjumper"
          price="₱680,000"
          image={fsb9}
          navigateTo="/S-WorksStumpjumper"
        />
        <BikeItemDisplayTemplate
          name="S - Works Enduro LTD"
          price="₱700,000"
          image={fsb10}
          navigateTo="/S-WorksEnduroLTD"
        />
      </Box>

      <Footer />
    </Box>
  );
}

export default FsbPage;
