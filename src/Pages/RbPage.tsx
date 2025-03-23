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
          paddingTop: 17,
        }}
      >
        <BgPhotoFrame image={coverPhoto}/>

        <Typography
          sx={{
            position: "absolute",
            top: "102.5%",
            left: "17.5%",
            transform: "translate(-50%, -50%)",
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
          gap: 3,
        }}
      >
        <BikeItemDisplayTemplate
          name="Giant TCR Advanced 3"
          price="₱83,400"
          image={rb1}
        />

        <BikeItemDisplayTemplate
          name="Giant Propel Advanced Pro"
          price="₱123,000"
          image={rb2}
        />

        <BikeItemDisplayTemplate
          name="Canyon Aeroad CF SLX"
          price="₱326,550"
          image={rb3}
        />

        <BikeItemDisplayTemplate
          name="Canyon Ultimate CF SL"
          price="₱192,450"
          image={rb4}
        />

        <BikeItemDisplayTemplate
          name="S - Works Tarmac SL7"
          price="₱235,000"
          image={rb5}
        />

        <BikeItemDisplayTemplate
          name="Specialized Allez Sprint Comp"
          price="₱113,480"
          image={rb6}
        />

        <BikeItemDisplayTemplate
          name="Pinarello F5 105"
          price="₱355,750"
          image={rb7}
        />

        <BikeItemDisplayTemplate
          name="Pinarello Paris 105"
          price="₱320,600"
          image={rb8}
        />

        <BikeItemDisplayTemplate
          name="Cervelo Soloist"
          price="₱290,000"
          image={rb9}
        />

        <BikeItemDisplayTemplate
          name="Cervelo Caledonia"
          price="₱260,000"
          image={rb10}
        />


        
      </Box>
      <Footer />
    </Box>
  );
}

export default RbPage;
