import { Box, Typography } from "@mui/material";
import PedalBikeRoundedIcon from "@mui/icons-material/PedalBikeRounded";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",

        height: 335,
        width: "100%",
        backgroundColor: "#ffffff",
        marginTop: 20,
        paddingTop: 3,
        paddingLeft: 3,
        paddingRight: 3,
        borderTop: "1px solid #ccc",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Freeman", sans-serif',
            fontSize: 36,
          }}
        >
          <span style={{ color: "red", marginRight: 4 }}>SPINNING</span>
          RIMS
        </Typography>

        <PedalBikeRoundedIcon
          sx={{
            fontSize: 50,
            color: "black",
            transform: "scaleX(-1)",
          }}
        />
      </Box>
      <hr style={{ color: "black", width: "100%", height: 1, margin: 0 }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 6,
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 6,
        }}
      >
        <Box>
          <Typography className="footerRegText">
            <span className="footerBoldText"> Support</span>
            <br />
            Contact Us
            <br />
            FAQ
          </Typography>
        </Box>

        <Box>
          <Typography className="footerRegText">
            <span className="footerBoldText"> About</span>
            <br />
            Our story
            <br />
            Creators
          </Typography>
        </Box>

        <Box>
          <Typography className="footerRegText">
            <span className="footerBoldText"> Follow us</span>
            <br />
            Facebook: Spinning Rims
            <br />
            Instagram: Spinning Rims
          </Typography>
        </Box>

        <Box>
          <Typography className="footerRegText">
            <span className="footerBoldText"> Message us</span>
            <br />
            Email: SpinningRims@gmail.com
          </Typography>
        </Box>

        <Box>
          <Typography className="footerRegText">
            PRIVACY
            <br />
            TERMS OF USE
          </Typography>
        </Box>
      </Box>

      <hr style={{ color: "black", width: "100%", height: 1, margin: 0 }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100px",
          fontSize: 20,
          fontFamily: '"Afacad", san-serif',
        }}
      >
        © 2025 Spinning Rims. All rights reserved.
      </Box>
    </Box>
  );
}

export default Footer;
