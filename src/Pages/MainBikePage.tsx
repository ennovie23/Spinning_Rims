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
import mtb1 from "../Components/Images/bike/Trek5img0.png";
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

// all your bike item template components here...

function MainBikePage() {
  return (
    <Box>
      <Header />
      <Box sx={{ position: "relative" }}>
        <BgPhotoFrame image={coverPhoto} />

        <Typography
          sx={{
            position: "absolute", 
      bottom: "10%",     
      left: "5%",   
      marginLeft: 20,     
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
          BIKES
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
          columnGap: 10, 
          rowGap: 3,
          px: 2,
          py: 4,
          maxWidth: "1600px",
          margin: "0 auto", // <-- centers the grid horizontally
        }}
      >

        {/* Your <BikeItemDisplayTemplate /> components here */}

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

        <BikeItemDisplayTemplate
          name="Trek Marlin 5"
          price="₱29,490"
          image={mtb1}
          navigateTo="/TrekMarlin5"
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
          navigateTo="/ScottScaleRCWorldCup"
        />
        <BikeItemDisplayTemplate
          name="Cube Aim SLX"
          price="₱42,180"
          image={mtb5}
          navigateTo="/CubeAimSLX"
        />
        <BikeItemDisplayTemplate
          name="Cube Attention SL"
          price="₱60,420"
          image={mtb6}
          navigateTo="/CubeAttentionSL"
        />
        <BikeItemDisplayTemplate
          name="Cannondale F - Si Carbon 5"
          price="₱145,000"
          image={mtb7}
          navigateTo="/CannondaleF-SiCarbon"
        />
        <BikeItemDisplayTemplate
          name="Cannondale Scalpel HT Carbon 2"
          price="₱265,400"
          image={mtb8}
          navigateTo="/CannondaleScalpelHTCarbon2"
        />
        <BikeItemDisplayTemplate
          name="Santa Cruz High Ball C R"
          price="₱200,400"
          image={mtb9}
          navigateTo="/SantaCruzHighBallCR"
        />
        <BikeItemDisplayTemplate
          name="Santa Cruz Chameleon R MX"
          price="₱200,400"
          image={mtb10}
          navigateTo="/SantaCruzChameleonRMX"
        />

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

        <BikeItemDisplayTemplate 
        name="Trek Rail 9" 
        price="₱500,000" 
        image={eb1} 
        navigateTo="/TrekRail9"
        />
        <BikeItemDisplayTemplate 
        name="Trek Marlin+ 6d" 
        price="₱200,000" 
        image={eb2} 
        navigateTo="/TrekMarlin6d"
        />
        <BikeItemDisplayTemplate 
        name="Trek Powerfly 7" 
        price="₱200,000" 
        image={eb3} 
        navigateTo="/TrekPowerfly7"
        />
        <BikeItemDisplayTemplate 
        name="Cube Kathmandu Hybrid" 
        price="₱350,000" 
        image={eb4} 
        navigateTo="/CubeKathmanduHybrid"
        />
        <BikeItemDisplayTemplate 
        name="Cube Reaction" 
        price="₱200,000" 
        image={eb5} 
        navigateTo="/CubeReaction"
        />
        <BikeItemDisplayTemplate 
        name="Cube Stereo Hybrid" 
        price="₱300,000" 
        image={eb6} 
        navigateTo="/CubeStereoHybrid"
        />
        <BikeItemDisplayTemplate 
        name="Scott Contessa eRide" 
        price="₱350,000" 
        image={eb7} 
        navigateTo="/ScottContessaeRide"
        />
        <BikeItemDisplayTemplate 
        name="Scott Strike" 
        price="₱350,000" 
        image={eb8} 
        navigateTo="/ScottStrike"
        />
        <BikeItemDisplayTemplate 
        name="Scott Aspect" 
        price="₱200,000" 
        image={eb9} 
        navigateTo="/ScottAspect"
        />
        <BikeItemDisplayTemplate 
        name="Giant Trance X Advanced e+" 
        price="₱800,000" 
        image={eb10} 
        navigateTo="/GiantTranceXAdvanced"
        />

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

export default MainBikePage;
