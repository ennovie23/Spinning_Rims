import { Box, Typography } from "@mui/material";
import Header from "./Header";
import coverPhoto from "./Images/home-page-bg-photo.jpeg";
import Button from "./Button";
import AccItemDisplayTemplate from "./AccItemDisplayTemplate";
import cleats from "./Images/accessories/cleats.jpg";
import cleats1 from "./Images/accessories/cleats2.jpg";
import speed from "./Images/accessories/speed.jpg";
import speed1 from "./Images/accessories/speed2.jpg";
import rockbros from "./Images/accessories/rockbros.png";
import rockbros1 from "./Images/accessories/rockbros1.png";
import flight from "./Images/accessories/flight.jpg";
import flight1 from "./Images/accessories/flight1.jpeg";
import jer from "./Images/accessories/jer.jpg";
import jer1 from "./Images/accessories/jer1.jpg";
import "../App.css";
import rbbg from "./Images/rb bg.png";
import mtbbg from "./Images/mtb bg.png";
import gbbg from "./Images/gb bg.png";
import ebbg from "./Images/eb bg.png";
import fsbbg from "./Images/fsb bg.png";
import BrowseButton from "./Button";
import Footer from "./Footer";

function Home() {
  return (
    <Box>
      <Header />
      <Box
        sx={{
          paddingTop: 17,
        }}
      >
        <img
          src={coverPhoto}
          alt="Cover Photo"
          height="755"
          style={{
            display: "block",
            filter: "brightness(0.75)",
          }}
        />

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
          <Button text="SHOP NOW!" size="large" />
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
          }}
        >
          SHOP THE BEST BIKE FOR YOU!
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: 5,
          paddingRight: 5,
          marginBottom: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={rbbg} alt="road bike bg" className="smallBgHomepage" />

          <Box
            sx={{
              position: "absolute",
            }}
          >
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
            <BrowseButton text="SHOP NOW!" size="medium" />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={mtbbg} alt="mt bike bg" className="smallBgHomepage" />

          <Box
            sx={{
              position: "absolute",
            }}
          >
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
            <BrowseButton text="SHOP NOW!" size="medium" />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={gbbg} alt="gravel bike bg" className="smallBgHomepage" />

          <Box
            sx={{
              position: "absolute",
            }}
          >
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
            <BrowseButton text="SHOP NOW!" size="medium" />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingLeft: 5,
          paddingRight: 5,
          gap: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={ebbg} alt="e-bike bg" className="smallBgHomepage" />

          <Box
            sx={{
              position: "absolute",
            }}
          >
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
            <BrowseButton text="SHOP NOW!" size="medium" />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={fsbbg}
            alt="full suspension bike bg"
            className="smallBgHomepage"
          />

          <Box
            sx={{
              position: "absolute",
            }}
          >
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
            <BrowseButton text="SHOP NOW!" size="medium" />
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

export default Home;
