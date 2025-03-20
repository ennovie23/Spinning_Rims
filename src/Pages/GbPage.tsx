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
          paddingTop: 17,
        }}
      >
        <BgPhotoFrame image={coverPhoto}/>

        <Typography
          sx={{
            position: "absolute",
            top: "102.5%",
            left: "19.5%",
            transform: "translate(-50%, -50%)",
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

        <Box
          sx={{
            position: "absolute",
            top: "68%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        ></Box>
      </Box>

      <Dropdown />

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
          gap: 2,
        }}
      >
        <BikeItemDisplayTemplate
          name="Canyon Grail 7 SL"
          price="₱165,000"
          image={gb1}
        />

        <BikeItemDisplayTemplate
          name="Canyon Grail CF SL 7"
          price="₱229,000"
          image={gb2}
        />

        <BikeItemDisplayTemplate
          name="Cube Nuroad Race FE"
          price="₱120,000"
          image={gb3}
        />

        <BikeItemDisplayTemplate
          name="Cube Nuroad C:62 Pro"
          price="₱250,500"
          image={gb4}
        />

        <BikeItemDisplayTemplate
          name="Giant Revolt X Advanced Pro 2"
          price="₱75,000"
          image={gb5}
        />

        <BikeItemDisplayTemplate
          name="Giant Revolt 2 "
          price="₱75,000"
          image={gb6}
        />

        <BikeItemDisplayTemplate
          name="Cervelo Aspero"
          price="₱500,000"
          image={gb7}
        />

        <BikeItemDisplayTemplate
          name="Cervelo Aspero Rival XPLRS"
          price="₱399,000"
          image={gb8}
        />

        <BikeItemDisplayTemplate
          name="Pinarello Grevil F grx810"
          price="₱399,000"
          image={gb9}
        />

        <BikeItemDisplayTemplate
          name="S - Works Crux"
          price="₱700,000"
          image={gb10}
        />


        
      </Box>
      <Footer />
    </Box>
  );
}

export default GbPage;
