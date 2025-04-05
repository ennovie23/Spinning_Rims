import { Box, Typography } from "@mui/material";
import PedalBikeRoundedIcon from "@mui/icons-material/PedalBikeRounded";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundColor: "#ffffff",
        marginTop: 20,
        paddingTop: 3,
        paddingLeft: 3,
        paddingRight: 3,
        borderTop: "1px solid #ccc",
      }}
    >
      {/* Header Row */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
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

      {/* Divider */}
      <hr style={{ color: "black", width: "100%", height: 1, margin: 0 }} />

      {/* Links Section */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "center", md: "space-between" },
          gap: { xs: 4, md: 0 },
          paddingTop: 6,
          paddingX: { xs: 3, md: 10 },
          paddingBottom: 6,
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Box>
          <Typography sx={{ fontSize: { xs: 14, md: 16 } }}>
            <strong>Support</strong>
            <br />
            Contact Us
            <br />
            FAQ
          </Typography>
        </Box>

        <Box>
          <Typography sx={{ fontSize: { xs: 14, md: 16 } }}>
            <strong>About</strong>
            <br />
            Our Story
            <br />
            Creators
          </Typography>
        </Box>

        <Box>
          <Typography sx={{ fontSize: { xs: 14, md: 16 } }}>
            <strong>Follow us</strong>
            <br />
            Facebook: Spinning Rims
            <br />
            Instagram: Spinning Rims
          </Typography>
        </Box>

        <Box>
          <Typography sx={{ fontSize: { xs: 14, md: 16 } }}>
            <strong>Message us</strong>
            <br />
            Email: SpinningRims@gmail.com
          </Typography>
        </Box>

        <Box>
          <Typography sx={{ fontSize: { xs: 14, md: 16 } }}>
            PRIVACY
            <br />
            TERMS OF USE
          </Typography>
        </Box>
      </Box>

      {/* Divider */}
      <hr style={{ color: "black", width: "100%", height: 1, margin: 0 }} />

      {/* Copyright */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100px",
          fontSize: { xs: 14, md: 20 },
          fontFamily: '"Afacad", sans-serif',
          textAlign: "center",
        }}
      >
        © 2025 Spinning Rims. All rights reserved.
      </Box>
    </Box>
  );
}

export default Footer;
