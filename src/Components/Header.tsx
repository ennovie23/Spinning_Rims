import { Box, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleToggle = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <>
      {/* First Row */}
      <Box
        sx={{
          backgroundColor: "#000000",
          color: "#ffffff",
          width: "100%",
          height: 36,
          fontSize: 12,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          marginRight: 5,
        }}
      >
        {/* CONTACT US */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginRight: 2,
            fontFamily: '"Inter", sans-serif',
          }}
        >
          <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: 4 }} />
          <Typography
            sx={{
              cursor: "pointer",
              fontSize: 12,
              color: "white",
              "&:hover": { color: "red" },
            }}
          >
            CONTACT US
          </Typography>
        </Box>

        {/* SIGN IN */}
        <Box
          sx={{
            backgroundColor: "#414141",
            width: 142,
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: '"Inter", sans-serif',
          }}
        >
          <Typography
            sx={{
              cursor: "pointer",
              fontSize: 12,
              color: "white",
              "&:hover": { color: "red" },
            }}
          >
            SIGN IN
          </Typography>
        </Box>
      </Box>

      {/* Second Row */}
      <Box
        sx={{
          height: 64,
          width: "100%",
          display: "flex",
          paddingLeft: 5,
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Typography
          sx={{
            color: "red",
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
            fontFamily: '"Freeman", sans-serif',
            fontSize: 36,
          }}
        >
          RIMS
        </Typography>

        {/* Navigation */}
        <Box
          sx={{
            display: "flex",
            gap: "70px",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontSize: 12,
              cursor: "pointer",
              color: "black",
              "&:hover": { color: "red" },
            }}
          >
            HOME
          </Typography>

          {/* BIKES Dropdown */}
          <Box
            sx={{ position: "relative" }}
            
            onClick={handleToggle} // Toggle dropdown on click
          >
            <Typography
              sx={{
                fontFamily: '"Inter", sans-serif',
                fontSize: 12,
                cursor: "pointer",
                color: "black",
                "&:hover": { color: "red" },
              }}
            >
              BIKES
            </Typography>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <Box
                sx={{
                  position: "absolute",
                  top: "230%",
                  left: -613,
                  width: "100vw",
                  backgroundColor: "#ffffff",
                  boxShadow: "0px 2px 20px 2px rgba(0,0,0,0.25)",
                  paddingTop: 5,
                  paddingBottom: 5,
                  paddingRight: 15,
                  paddingLeft: 15,
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 1fr)",
                  zIndex: 1000,
                }}
              >
                {/* Categories */}
                {[
                  "ROAD BIKES",
                  "MOUNTAIN BIKES",
                  "GRAVEL BIKES",
                  "ELECTRIC BIKES",
                  "FULL SUSPENSION BIKES",
                ].map((bikeCategory) => (
                  <Box key={bikeCategory}>
                    <Typography
                      sx={{
                        fontSize: 20,
                        fontFamily: '"Afacad", sans-serif',
                        fontWeight: "bold",
                      }}
                    >
                      {bikeCategory}
                    </Typography>
                  </Box>
                ))}

                {/* Bike Models */}
                {[
                  "Giant TCR Advanced 3",
                  "Trek Marlin 5",
                  "Canyon Grail 7 AL",
                  "Trek Trail 9",
                  "Cube Stereo HPC",
                  "Giant TCR Advanced Pro",
                  "Trek Marlin 7",
                  "Canyon Grail CF SL 7",
                  "Trek Marin+ 6d",
                  "Cube AMS",
                  "Canyon Aeroad CF SLX",
                  "Scott Scale 925",
                  "Cube Nuroad Race FE",
                  "Trek Powerfly 7",
                  "Trek Fuel EX 9.8 GX",
                  "Canyon Ultimate CF SL",
                  "Scott Scale RC World Cup",
                  "Cube Nuroad C:62 Pro",
                  "Cube Kathmandu Hybrid",
                  "Trek Supercaliber 9.7",
                  "S-Works Tarmac SL",
                  "Cube Aim SLX",
                  "Giant Revolt X Advanced Pro",
                  "Cube Reaction",
                  "Santa Cruz Blur CS",
                  "Specialized Allez",
                  "Cube Attention SL",
                  "Giant Revolt 2",
                  "Cube Stereo Hybrid",
                  "Santa Cruz Mega Tower 2",
                  "Pinarello F5 105",
                  "Cannondale F - Si Carbon",
                  "Cervelo Aspero",
                  "Scott Contessa eRide",
                  "Scott Genius 910",
                  "Pinarello Paris 105",
                  "Cannondale Scalpel HT Carbon 2",
                  "Cervelo Aspero Rival XPLRS",
                  "Scott Strike",
                  "Scott Spark 970",
                  "Cervelo Soloist",
                  "Santa Cruz Highball C R",
                  "Pinarello Grevil F grx810",
                  "Scott Aspect",
                  "S-Works Stumpjumper",
                  "Cervelo Celadonia",
                  "Santa Cruz Chameleon R MX",
                  "S-Works Crux",
                  "Giant Trance X Advanced e+",
                  "S-Works Enduro LTD",
                ].map((bike) => (
                  <Box key={bike}>
                    <Typography
                      sx={{
                        fontSize: 16,
                        fontFamily: '"Afacad", sans-serif',
                        color: "#727272",
                        cursor: "pointer",
                        "&:hover": { color: "black" },
                      }}
                    >
                      {bike}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Box>

          <Typography
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontSize: 12,
              cursor: "pointer",
              color: "black",
              "&:hover": { color: "red" },
            }}
          >
            ACCESSORIES
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontSize: 12,
              cursor: "pointer",
              color: "black",
              "&:hover": { color: "red" },
            }}
          >
            ABOUT US
          </Typography>
        </Box>
      </Box>

      {/* Third Row */}
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
    </>
  );
}

export default Header;
