import { Box, Typography } from "@mui/material";
import BikeItemDisplayTemplate from "../Components/BikeItemDisplayTemplate";
import Dropdown from "../Components/Dropdown";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import coverPhoto from "../Components/Images/gb-page-bg-photo.jpg";
import gb1 from "../Components/Images/bike/gb1.jpg";
import gb10 from "../Components/Images/bike/gb10.jpg";
import gb2 from "../Components/Images/bike/gb2.jpg";
import gb3 from "../Components/Images/bike/gb3.jpg";
import gb4 from "../Components/Images/bike/gb4.jpg";
import gb5 from "../Components/Images/bike/gb5.jpg";
import gb6 from "../Components/Images/bike/gb6.jpg";
import gb7 from "../Components/Images/bike/gb7.jpg";
import gb8 from "../Components/Images/bike/gb8.jpg";
import gb9 from "../Components/Images/bike/gb9.jpg";
import BgPhotoFrame from "../Components/BgPhotoFrame";

function GbPage() {
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
          Gravel Bikes
        </Typography>
      </Box>

      <Dropdown />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",  // 1 item per row for extra small screens
            sm: "repeat(2, 1fr)",  // 2 items per row for small screens
            md: "repeat(3, 1fr)",  // 3 items per row for medium screens
            lg: "repeat(4, 1fr)",  // 4 items per row for large screens
            xl: "repeat(5, 1fr)",  // 5 items per row for extra large screens
          },
          columnGap: 5,  // horizontal spacing
          rowGap: 4,     // vertical spacing
          px: 2,         // horizontal padding for container
          py: 6,         // vertical padding for container
          maxWidth: "1700px",  // max width for the container
          margin: "0 auto",    // centering the content
        }}
      >
        <BikeItemDisplayTemplate
          name="Canyon Grail 7 SL"
          price="₱165,000"
          image={gb1}
          navigateTo="/CanyonGrail7SL"
        />
        <BikeItemDisplayTemplate
          name="Canyon Grail CF SL 7"
          price="₱229,000"
          image={gb2}
          navigateTo="/CanyonGrailCFSL7"
        />
        <BikeItemDisplayTemplate
          name="Cube Nuroad Race FE"
          price="₱120,000"
          image={gb3}
          navigateTo="/CubeNuroadRaceFE"
        />
        <BikeItemDisplayTemplate
          name="Cube Nuroad C:62 Pro"
          price="₱250,500"
          image={gb4}
          navigateTo="/CubeNuroadC62Pro"
        />
        <BikeItemDisplayTemplate
          name="Giant Revolt X Advanced Pro 2"
          price="₱75,000"
          image={gb5}
          navigateTo="/GiantRevoltXAdvancedPro2"
        />
        <BikeItemDisplayTemplate
          name="Giant Revolt 2"
          price="₱75,000"
          image={gb6}
          navigateTo="/GiantRevolt2"
        />
        <BikeItemDisplayTemplate
          name="Cervelo Aspero"
          price="₱500,000"
          image={gb7}
          navigateTo="/CerveloAspero"
        />
        <BikeItemDisplayTemplate
          name="Cervelo Aspero Rival XPLRS"
          price="₱399,000"
          image={gb8}
          navigateTo="/CerveloAsperoRivalXPLRS"
        />
        <BikeItemDisplayTemplate
          name="Pinarello Grevil F grx810"
          price="₱399,000"
          image={gb9}
          navigateTo="/PinarelloGrevilFgrx810"
        />
        <BikeItemDisplayTemplate
          name="S - Works Crux"
          price="₱700,000"
          image={gb10}
          navigateTo="/S-worksCrux"
        />
      </Box>

      <Footer />
    </Box>
  );
}

export default GbPage;
