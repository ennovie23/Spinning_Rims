import { Box, Typography } from "@mui/material";
import BikeItemDisplayTemplate from "../Components/BikeItemDisplayTemplate";
import Dropdown from "../Components/Dropdown";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import coverPhoto from "../Components/Images/bike-page-bg-photo.jpg";
import eb1 from "../Components/Images/bike/eb1.jpg";
import eb10 from "../Components/Images/bike/eb10.jpg";
import eb2 from "../Components/Images/bike/eb2.jpg";
import eb3 from "../Components/Images/bike/eb3.jpg";
import eb4 from "../Components/Images/bike/eb4.jpg";
import eb5 from "../Components/Images/bike/eb5.jpg";
import eb6 from "../Components/Images/bike/eb6.jpg";
import eb7 from "../Components/Images/bike/eb7.jpg";
import eb8 from "../Components/Images/bike/eb8.jpg";
import eb9 from "../Components/Images/bike/eb9.jpg";
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

function MainBikePage() {
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
            top: "103%",
            left: "11%",
            transform: "translate(-50%, -50%)",
            fontFamily: '"Afacad", sans-serif',
            fontWeight: "bold",
            fontSize: 96,
            color: "white",
            textShadow: "2px 17px 15px rgba(0,0,0,0.5)",
            WebkitTextStroke: "1px black", 
          }}
        >
          BIKES
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
          // navigateTo="/Home" {example of navigating to its page}
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
          price="₱ 45,000"
          image={mtb3}
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

        <BikeItemDisplayTemplate
          name="Trek Rail 9"
          price="₱500,000"
          image={eb1}
        />

        <BikeItemDisplayTemplate
          name="Trek Marlin+ 6d"
          price="₱200,000"
          image={eb2}
        />

        <BikeItemDisplayTemplate
          name="Trek Powerfly 7"
          price="₱200,000"
          image={eb3}
        />

        <BikeItemDisplayTemplate
          name="Cube Kathmandu Hybrid"
          price="₱350,000"
          image={eb4}
        />

        <BikeItemDisplayTemplate
          name="Cube Reaction"
          price="₱200,000"
          image={eb5}
        />

        <BikeItemDisplayTemplate
          name="Cube Stereo Hybrid"
          price="₱300,000"
          image={eb6}
        />

        <BikeItemDisplayTemplate
          name="Scott Contessa eRide"
          price="₱350,000"
          image={eb7}
        />

        <BikeItemDisplayTemplate
          name="Scott Strike"
          price="₱350,000"
          image={eb8}
        />

        <BikeItemDisplayTemplate
          name="Scott Aspect"
          price="₱200,000"
          image={eb9}
        />

        <BikeItemDisplayTemplate
          name="Giant Trance X Advanced e+"
          price="₱800,000"
          image={eb10}
        />

        <BikeItemDisplayTemplate
          name="Cube Stereo HPC"
          price="₱500,000"
          image={fsb1}
        />

        <BikeItemDisplayTemplate
          name="Cube AMS"
          price="₱350,000"
          image={fsb2}
        />

        <BikeItemDisplayTemplate
          name="Trek Fuel EX 9.8 GX"
          price="₱350,000"
          image={fsb3}
        />

        <BikeItemDisplayTemplate
          name="Trek Supercaliber 9.7"
          price="₱400,000"
          image={fsb4}
        />

        <BikeItemDisplayTemplate
          name="Santa Cruz Blur CS"
          price="₱400,000"
          image={fsb5}
        />

        <BikeItemDisplayTemplate
          name="Santa Cruz Mega Tower 2"
          price="₱380,000"
          image={fsb6}
        />

        <BikeItemDisplayTemplate
          name="Scott Genius 910"
          price="₱380,000"
          image={fsb7}
        />

        <BikeItemDisplayTemplate
          name="Scott Park 970"
          price="₱180,000"
          image={fsb8}
        />

        <BikeItemDisplayTemplate
          name="S - Works Stumpjumper"
          price="₱680,000"
          image={fsb9}
        />

        <BikeItemDisplayTemplate
          name="S - Works Ennduro LTD"
          price="₱700,000"
          image={fsb10}
        />
      </Box>
      <Footer />
    </Box>
  );
}

export default MainBikePage;
