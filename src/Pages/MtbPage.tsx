import { Box, Typography } from "@mui/material";
import BikeItemDisplayTemplate from "../Components/BikeItemDisplayTemplate";
import Dropdown from "../Components/Dropdown";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import coverPhoto from "../Components/Images/mtb-page-bg-photo.jpg";
import mtb1 from "../Components/Images/bike/mtb1.jpg";
import mtb10 from "../Components/Images/bike/mtb10.jpg";
import mtb2 from "../Components/Images/bike/mtb2.jpg";
import mtb3 from "../Components/Images/bike/mtb3.jpg";
import mtb4 from "../Components/Images/bike/mtb4.jpg";
import mtb5 from "../Components/Images/bike/mtb5.jpg";
import mtb6 from "../Components/Images/bike/mtb6.jpg";
import mtb7 from "../Components/Images/bike/mtb7.jpg";
import mtb8 from "../Components/Images/bike/mtb8.jpg";
import mtb9 from "../Components/Images/bike/mtb9.jpg";
import BgPhotoFrame from "../Components/BgPhotoFrame";

function MtbPage() {
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
          Mountain Bikes
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
          name="Trek Marlin 5"
          price="₱29,490"
          image={mtb1}
        />
        <BikeItemDisplayTemplate
          name="Trek Marlin 7"
          price="₱47,490"
          image={mtb2}
          navigateTo="/TrekMarlin7"
        />
        <BikeItemDisplayTemplate
          name="Scott Scale 925"
          price="₱45,000"
          image={mtb3}
          navigateTo="/ScottScale925"
        />
        <BikeItemDisplayTemplate
          name="Scott Scale RC World Cup"
          price="₱270,000"
          image={mtb4}
        />
        <BikeItemDisplayTemplate
          name="Cube Aim SLX"
          price="₱42,180"
          image={mtb5}
        />
        <BikeItemDisplayTemplate
          name="Cube Attention SL"
          price="₱60,420"
          image={mtb6}
        />
        <BikeItemDisplayTemplate
          name="Cannondale F - Si Carbon 5"
          price="₱145,000"
          image={mtb7}
        />
        <BikeItemDisplayTemplate
          name="Cannondale Scalpel HT Carbon 2"
          price="₱265,400"
          image={mtb8}
        />
        <BikeItemDisplayTemplate
          name="Santa Cruz High Ball C R"
          price="₱200,400"
          image={mtb9}
        />
        <BikeItemDisplayTemplate
          name="Santa Cruz Chameleon R MX"
          price="₱200,400"
          image={mtb10}
        />
      </Box>

      <Footer />
    </Box>
  );
}

export default MtbPage;
