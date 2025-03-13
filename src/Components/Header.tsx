import { Box, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


function Header() {
    return (
      <>
      {/* first row */}
        <Box
          sx={{
            backgroundColor: "#000000",
            color: "#ffffff",
            width: "100%",
            height: 36,
            fontSize: 12,
            display: "flex",
            justifyContent: "flex-end", // Aligns items to the right
            alignItems: "center",
            marginRight: 5,
          }}
        >
          {/* CONTACT US Box */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginRight: 2,
              fontFamily: '"Inter", sans-serif',
            }}
          >
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: 4 }} />
            <Typography sx={{cursor: "pointer", fontSize:12}}  >CONTACT US</Typography>
          </Box>

          {/* SIGN IN Box */}
          <Box
            sx={{
              backgroundColor: "#414141",
              width: 142,
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: '"Inter", sans-serif'
            }}
          >
            <Typography sx={{cursor: "pointer", fontSize:12}}  >SIGN IN</Typography>
          </Box>
        </Box>

        {/* //second row */}
        <Box
          sx={{
            height: 64,
            width: "100%",
            display: "flex",
            // justifyContent: "center"
            paddingLeft: 5,
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "red",
              // fontWeight: "bold",
              fontFamily: '"Freeman", sans-serif',
              fontSize: 36,
              marginRight: 1,
            }}
          >
            SPINNING
          </Typography>
          <Typography
            sx={{
              color: "black",
              // fontWeight: "bold",
              fontFamily: '"Freeman", sans-serif',
              fontSize: 36,
            }}
          >
            RIMS
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: "70px",
              position: "absolute" /* or relative */,
              left: "50%",
              transform: "translateX(-50%)",
              
            }}
          >
            <Typography sx={{
                fontFamily: '"Inter", sans-serif',
                fontSize: 12,
                cursor: "pointer"
            }}>
                HOME
            </Typography>
            <Typography sx={{
                fontFamily: '"Inter", sans-serif',
                fontSize: 12,
                cursor: "pointer"
            }}>BIKES</Typography>
            <Typography sx={{
                fontFamily: '"Inter", sans-serif',
                fontSize: 12,
                cursor: "pointer"
            }}>ACCESSORIES</Typography>
            <Typography sx={{
                fontFamily: '"Inter", sans-serif',
                fontSize: 12,
                cursor: "pointer"
            }}>ABOUT US</Typography>
          </Box>
        </Box>

        {/* //third row */}
        <Box
          sx={{
            height: 43,
            width: "100%",
            backgroundColor: "#E9E9E9",
            display: "flex",
            justifyContent: "center",
            fontFamily: '"Inter", sans-serif',
            fontSize: 12,
            alignItems: "center",
          }}
        >
          Nature’s Best View is From The Saddle
        </Box>

        <Box>
          try add
        </Box>
      </>
    );
}

export default Header;
