import { Box, Typography } from "@mui/material";
import Header from "./Header";
import coverPhoto from "./Images/home-page-bg-photo.jpeg";
import Button from "./Button";

function Home() {
  return (
    <Box>
      <Header />
      <Box sx={{
        paddingTop: 17,
      }}>
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

      <Box sx={{
        position: "absolute",
        top: "68%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}>
        <Button text="SHOP NOW!" size="large"/>
      </Box>
      </Box>
    </Box>
  );
}

export default Home;
