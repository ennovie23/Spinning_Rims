import { Box, Typography } from "@mui/material";
import Header from "./Header";
import coverPhoto from "./Images/home-page-bg-photo.jpeg";
import Button from "./Button";
import AccItemDisplayTemplate from "./AccItemDisplayTemplate";
import Image1 from "./Images/accessories/cleats.jpg";
import Image2 from "./Images/accessories/cleats2.jpg";

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
          // width="1440"
          height="755"
          className="cover-photo"
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
          image1={Image1}
          image2={Image2}
        />

        <AccItemDisplayTemplate
          name="Garmin Rally RS 100"
          price="₱39,950"
          image1={Image1}
          image2={Image2}
        />

        <AccItemDisplayTemplate
          name="Garmin Rally RS 100"
          price="₱39,950"
          image1={Image1}
          image2={Image2}
        />

        <AccItemDisplayTemplate
          name="Garmin Rally RS 100"
          price="₱39,950"
          image1={Image1}
          image2={Image2}
        />

        <AccItemDisplayTemplate
          name="Garmin Rally RS 100"
          price="₱39,950"
          image1={Image1}
          image2={Image2}
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
    </Box>
  );
}

export default Home;
