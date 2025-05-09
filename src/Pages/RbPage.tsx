import { Box, Typography } from "@mui/material";
import BikeItemDisplayTemplate from "../Components/BikeItemDisplayTemplate";
import Dropdown from "../Components/Dropdown";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import coverPhoto from "../Components/Images/rb-page-bg-photo.jpg";
import rb1 from "../Components/Images/bike/rb1.jpg";
import rb10 from "../Components/Images/bike/rb10.jpg";
import rb2 from "../Components/Images/bike/rb2.jpg";
import rb3 from "../Components/Images/bike/rb3.jpg";
import rb4 from "../Components/Images/bike/rb4.jpg";
import rb5 from "../Components/Images/bike/rb5.jpg";
import rb6 from "../Components/Images/bike/rb6.jpg";
import rb7 from "../Components/Images/bike/rb7.jpg";
import rb8 from "../Components/Images/bike/rb8.jpg";
import rb9 from "../Components/Images/bike/rb9.jpg";
import BgPhotoFrame from "../Components/BgPhotoFrame";

function RbPage() {
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
    Road Bikes
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
          name="Giant TCR Advanced 3"
          price="₱83,400"
          image={rb1}
          navigateTo="/GiantTCRAdvanced3"
          // navigateTo="/Home" {example of navigating to its page}
        />
        <BikeItemDisplayTemplate
          name="Giant Propel Advanced Pro"
          price="₱123,000"
          image={rb2}
          navigateTo="/GiantPropelAdvancedPro"
        />

        <BikeItemDisplayTemplate
          name="Canyon Aeroad CF SLX"
          price="₱326,550"
          image={rb3}
          navigateTo="/CanyonAeroadCFSLX"
        />

        <BikeItemDisplayTemplate
          name="Canyon Ultimate CF SL"
          price="₱192,450"
          image={rb4}
          navigateTo="/CanyonUltimateCFSL"
        />

        <BikeItemDisplayTemplate
          name="S - Works Tarmac SL7"
          price="₱235,000"
          image={rb5}
          navigateTo="/S-worksTarmacSL7"
        />

        <BikeItemDisplayTemplate
          name="Specialized Allez Sprint Comp"
          price="₱113,480"
          image={rb6}
          navigateTo="/SpecializedAllezSprintComp"
        />

        <BikeItemDisplayTemplate
          name="Pinarello F5 105"
          price="₱355,750"
          image={rb7}
          navigateTo="/PinarelloF5105"
        />

        <BikeItemDisplayTemplate
          name="Pinarello Paris 105"
          price="₱320,600"
          image={rb8}
          navigateTo="/PinarelloParis105"
        />

        <BikeItemDisplayTemplate
          name="Cervelo Soloist"
          price="₱290,000"
          image={rb9}
          navigateTo="/CerveloSoloist"
        />

        <BikeItemDisplayTemplate
          name="Cervelo Caledonia"
          price="₱260,000"
          image={rb10}
          navigateTo="/CerveloCaledonia"
        />
      </Box>

      <Footer />
    </Box>
  );
}

export default RbPage;
