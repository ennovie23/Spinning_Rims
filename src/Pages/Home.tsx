import { Box, Typography } from "@mui/material";
import "../App.css";
import AccItemDisplayTemplate from "../Components/AccItemDisplayTemplate";
import Buttons from "../Components/Buttons";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import cleats from "../Components/Images/accessories/cleats.jpg";
import cleats1 from "../Components/Images/accessories/cleats2.jpg";
import flight from "../Components/Images/accessories/flight.jpg";
import flight1 from "../Components/Images/accessories/flight1.jpeg";
import jer from "../Components/Images/accessories/jer.jpg";
import jer1 from "../Components/Images/accessories/jer1.jpg";
import rockbros from "../Components/Images/accessories/rockbros.png";
import rockbros1 from "../Components/Images/accessories/rockbros1.png";
import speed from "../Components/Images/accessories/speed.jpg";
import speed1 from "../Components/Images/accessories/speed2.jpg";
import ebbg from "../Components/Images/eb bg.png";
import fsbbg from "../Components/Images/fsb bg.png";
import gbbg from "../Components/Images/gb bg.png";
import coverPhoto from "../Components/Images/home-page-bg-photo.jpeg";
import mtbbg from "../Components/Images/mtb bg.png";
import rbbg from "../Components/Images/rb bg.png";
import BgPhotoFrame from "../Components/BgPhotoFrame";

function Home() {
  return (
    <Box>
      <Header />
      <Box
        sx={{
          paddingTop: 17,
        }}
      >
        <BgPhotoFrame image={coverPhoto} />

        <Typography
          sx={{
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: '"Secular-One", sans-serif',
            fontWeight: "bold",
            fontSize: 43,
            color: "white",
            textShadow: "2px 2px 10px rgba(0,0,0,0.5)",
          }}
        >
          SPEED IS A MINDSET
        </Typography>

        <Box
          sx={{
            position: "absolute",
            top: "68%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Buttons text="SHOP NOW!" size="large" navigateTo="/MainBikePage" />
        </Box>
      </Box>

      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          padding: 5,
        }}
      >
        <Typography
          sx={{
            fontSize: 48,
            fontWeight: "bold",
            fontFamily: '"Secular-One", sans-serif',
          }}
        >
          ACCESSORIES
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          paddingLeft: 5,
          paddingRight: 5,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <AccItemDisplayTemplate
          name="Garmin Rally RS 100"
          price="₱39,950"
          image1={cleats}
          image2={cleats1}
        />

        <AccItemDisplayTemplate
          name="Garmin Edge 1040 Solar"
          price="₱47,080"
          image1={speed}
          image2={speed1}
        />

        <AccItemDisplayTemplate
          name="Rockbros Q4"
          price="₱350"
          image1={rockbros}
          image2={rockbros1}
        />

        <AccItemDisplayTemplate
          name="Rockbros 1000 Lumens"
          price="₱1,100"
          image1={flight}
          image2={flight1}
        />

        <AccItemDisplayTemplate
          name="GCN Core 2.0"
          price="₱5,600"
          image1={jer}
          image2={jer1}
        />
      </Box>

      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          padding: 5,
        }}
      >
        <Typography
          sx={{
            fontSize: 48,
            fontWeight: "bold",
            fontFamily: '"Secular-One", sans-serif',
            textAlign: "center",
          }}
        >
          SHOP THE BEST BIKE FOR YOU!
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px", // Vertical gap between rows
          paddingLeft: 5,
          paddingRight: 5,
          marginBottom: 5,
        }}
      >
        {/* First row: Road, MTB, Gravel */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "15px", // Horizontal gap between items
          }}
        >
          <Box className="home-page-small-bg">
            <img src={rbbg} alt="road bike bg" className="smallBgHomepage" />
            <Box sx={{ position: "absolute" }}>
              <Typography
                sx={{
                  position: "relative",
                  fontFamily: '"Secular-One", sans-serif',
                  fontWeight: "bold",
                  fontSize: 24,
                  color: "white",
                  textShadow: "2px 2px 10px rgba(0,0,0,0.5)",
                  marginBottom: 1,
                }}
              >
                Road Bikes
              </Typography>
              <Buttons text="SHOP NOW!" size="medium" navigateTo="/RbPage" />
            </Box>
          </Box>

          <Box className="home-page-small-bg">
            <img src={mtbbg} alt="mt bike bg" className="smallBgHomepage" />
            <Box sx={{ position: "absolute" }}>
              <Typography
                sx={{
                  position: "relative",
                  fontFamily: '"Secular-One", sans-serif',
                  fontWeight: "bold",
                  fontSize: 24,
                  color: "white",
                  textShadow: "2px 2px 10px rgba(0,0,0,0.5)",
                  marginBottom: 1,
                }}
              >
                Mountain Bikes
              </Typography>
              <Buttons text="SHOP NOW!" size="medium" navigateTo="/MtbPage" />
            </Box>
          </Box>

          <Box className="home-page-small-bg">
            <img src={gbbg} alt="gravel bike bg" className="smallBgHomepage" />
            <Box sx={{ position: "absolute" }}>
              <Typography
                sx={{
                  position: "relative",
                  fontFamily: '"Secular-One", sans-serif',
                  fontWeight: "bold",
                  fontSize: 24,
                  color: "white",
                  textShadow: "2px 2px 10px rgba(0,0,0,0.5)",
                  marginBottom: 1,
                }}
              >
                Gravel Bikes
              </Typography>
              <Buttons text="SHOP NOW!" size="medium" navigateTo="/GbPage" />
            </Box>
          </Box>
        </Box>

        {/* Second row: Electric & Full Suspension */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "15px", // Horizontal gap between items
          }}
        >
          <Box className="home-page-small-bg">
            <img src={ebbg} alt="e-bike bg" className="smallBgHomepage" />
            <Box sx={{ position: "absolute" }}>
              <Typography
                sx={{
                  position: "relative",
                  fontFamily: '"Secular-One", sans-serif',
                  fontWeight: "bold",
                  fontSize: 24,
                  color: "white",
                  textShadow: "2px 2px 10px rgba(0,0,0,0.5)",
                  marginBottom: 1,
                }}
              >
                Electric Bikes
              </Typography>
              <Buttons text="SHOP NOW!" size="medium" navigateTo="/EbPage" />
            </Box>
          </Box>

          <Box className="home-page-small-bg">
            <img
              src={fsbbg}
              alt="full suspension bike bg"
              className="smallBgHomepage"
            />
            <Box sx={{ position: "absolute" }}>
              <Typography
                sx={{
                  position: "relative",
                  fontFamily: '"Secular-One", sans-serif',
                  fontWeight: "bold",
                  fontSize: 24,
                  color: "white",
                  textShadow: "2px 2px 10px rgba(0,0,0,0.5)",
                  marginBottom: 1,
                }}
              >
                Full Suspension Bikes
              </Typography>
              <Buttons text="SHOP NOW!" size="medium" navigateTo="/FsbPage" />
            </Box>
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

export default Home;
