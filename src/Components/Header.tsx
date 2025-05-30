import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PedalBikeRoundedIcon from "@mui/icons-material/PedalBikeRounded";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Buttons from "./Buttons";
import { useNavigate } from "react-router-dom";
import SignInPage from "../Pages/SignInPage";

function Header() {
  const [activeMenu, setActiveMenu] = useState(""); // Tracks the open dropdown

  const toggleMenu = (menu: string) => {
    setActiveMenu((prevMenu) => (prevMenu === menu ? "" : menu));
  };

  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          position: "fixed", // Fixes header at the top
          top: 0,
          left: 0,
          width: "100%",
          backgroundColor: "white",
          zIndex: 1000, // Ensures it's above other elements
          // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Adds shadow
        }}
      >
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
          {/* CONTACT US
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
          </Box> */}

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
            // onClick={() => navigate("/SignInPage")}
          >
            <Typography
  sx={{
    cursor: "pointer",
    fontSize: 12,
    color: "white",
    "&:hover": { color: "red" },
  }}
  onClick={() => navigate("/SignInPage")} // Move onClick here
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
          <Typography
            sx={{
              fontFamily: '"Freeman", sans-serif',
              fontSize: 36,
            }}
          >
            <span style={{ color: "red", marginRight: 4 }}>SPINNING</span>
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
              onClick={() => {
    setActiveMenu(""); // Close any open dropdown
    navigate("/home");
  }}
            >
              HOME
            </Typography>

            {/* BIKES Dropdown */}
            <Box
              sx={{ position: "relative" }}
              onClick={() => toggleMenu("bikes")}
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
              {activeMenu === "bikes" && (
                <Box
                sx={{
                  position: "fixed",
                  top: "230%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "100vw",
                  backgroundColor: "#ffffff",
                  boxShadow: "0px 2px 20px 2px rgba(0,0,0,0.25)",
                  paddingTop: 3.5,
                  paddingBottom: 3.5,
                  paddingRight: 20,
                  paddingLeft: 20,
                  columnGap: 1,
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
                    "Canyon Grail 7 SL",
                    "Trek Rail 9",
                    "Cube Stereo HPC",
                    "Giant Propel Advanced Pro",
                    "Trek Marlin 7",
                    "Canyon Grail CF SL 7",
                    "Trek Marlin 6d",
                    "Cube AMS",
                    "Canyon Aeroad CF SLX",
                    "Scott Scale 925",
                    "Cube Nuroad Race FE",
                    "Trek Powerfly 7",
                    "Trek Fuel EX 9.8 GX",
                    "Canyon Ultimate CF SL",
                    "Scott Scale RC World Cup",
                    "Cube Nuroad C62 Pro",
                    "Cube Kathmandu Hybrid",
                    "Trek Supercaliber 9.7",
                    "S-Works Tarmac SL 7",
                    "Cube Aim SLX",
                    "Giant Revolt X Advanced Pro 2",
                    "Cube Reaction",
                    "Santa Cruz Blur CS",
                    "Specialized Allez Sprint Comp",
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
                    "Cervelo Caledonia",
                    "Santa Cruz Chameleon R MX",
                    "S-Works Crux",
                    "Giant Trance X Advanced",
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
                        onClick={() => navigate(`/${bike.replace(/\s+/g, '')}`)} // Removes spaces
                      >
                        {bike}
                      </Typography>
                    </Box>
                  ))}

                  <Box
                    sx={{
                      gridColumn: "span 5",
                      textAlign: "center",
                      marginTop: 3,
                    }}
                  >
                    <Buttons navigateTo="/MainBikePage" />
                  </Box>
                </Box>
              )}
            </Box>

            <Box
              sx={{ position: "relative" }}
              onClick={() => toggleMenu("Accessories")}
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
                ACCESSORIES
              </Typography>

              {activeMenu === "Accessories" && (
                <Box
                  sx={{
                    position: "fixed",
                  top: "230%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "100vw",
                    backgroundColor: "#ffffff",
                    boxShadow: "0px 2px 20px 2px rgba(0,0,0,0.25)",
                    paddingTop: 3.5,
                    paddingBottom: 3.5,
                    paddingRight: 51,
                    paddingLeft: 51,
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    zIndex: 1000,
                    columnGap: 1,
                  }}
                >
                  {["GEARS", "PARTS", "ACCESSORIES"].map((accCategory) => (
                    <Box key={accCategory}>
                      <Typography
                        sx={{
                          fontSize: 20,
                          fontFamily: '"Afacad", sans-serif',
                          fontWeight: "bold",
                        }}
                      >
                        {accCategory}
                      </Typography>
                    </Box>
                  ))}

                  {[
                    "GCN Core 2.0",
                    "Garmin Rally RS 100",
                    "Garmin Edge 1040 Solar",
                    "Shimano RC3",
                    "Black Inc Seatpost",
                    "Rockbros Q4",
                    "",
                    "Rockshox Super Deluxe RCT",
                    "Rockbros 1000 Lumens",
                    "",
                    "Fox Factory 40 Triple Crown",
                    "",
                    "",
                    "ENVE Composite Bar Tape",
                    "",
                  ].map((acc) => (
                    <Box key={acc}>
                      <Typography
                        sx={{
                          fontSize: 16,
                          fontFamily: '"Afacad", sans-serif',
                          color: "#727272",
                          cursor: "pointer",
                          "&:hover": { color: "black" },
                        }}
                        onClick={() => navigate(`/${acc.replace(/\s+/g, '')}`)} // Removes spaces
                      >
                        {acc}
                      </Typography>
                    </Box>
                  ))}

                  <Box
                    sx={{
                      gridColumn: "span 3",
                      textAlign: "center",
                      marginTop: 3,
                    }}
                  >
                    <Buttons navigateTo="/AccessoriesPage"/>
                  </Box>
                </Box>
              )}
            </Box>

            <Box
              sx={{
                position: "relative",
              }}
              onClick={() => toggleMenu("about")}
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
                ABOUT US
              </Typography>

              {activeMenu === "about" && (
                <Box
                  sx={{
                    position: "fixed",
                  top: "230%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "100vw",
                    backgroundColor: "#ffffff",
                    boxShadow: "0px 2px 20px 2px rgba(0,0,0,0.25)",
                    paddingTop: 3.5,
                    paddingBottom: 3.5,
                    paddingRight: 30,
                    paddingLeft: 30,
                    // display: "grid",
                    // gridTemplateColumns: "repeat(3, 1fr)",
                    // zIndex: 1000,
                    // columnGap: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 20,
                      fontFamily: '"Afacad", sans-serif',
                      fontWeight: "bold",
                      display: "flex",
                      justifyContent: "center",
                      columnGap: 1,
                    }}
                  >
                    ABOUT <span style={{ color: "red" }}>SPINNING</span> RIMS
                  </Typography>

                  <Box sx={{}}>
                    <Typography
                      sx={{
                        fontSize: 16,
                        fontFamily: '"Afacad", sans-serif',
                        fontWeight: "regular",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        // alignItems: "center",
                        // alignContent: "center",
                        // columnSpan: 5,
                      }}
                    >
                      Welcome to Spinning Rims! We are passionate about
                      providing high-quality bicycles and accessories to our
                      customers.
                      <br />
                      With years of experience in the industry, we strive to
                      offer the best selection of products and excellent
                      customer service.
                      <br />
                      <br />
                      At Spinning Rims Shop, we believe in promoting a healthy
                      and active lifestyle through cycling. Whether you're a
                      casual rider or a seasoned cyclist,
                      <br />
                      we have something for everyone. Our team is dedicated to
                      helping you find the perfect bike and gear to suit your
                      needs.
                      <br />
                      <br />
                      Thank you for choosing Spinning Rims Shop for all your
                      cycling needs.
                      <br />
                      We look forward to serving you!
                    </Typography>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>

          <Box
            sx={{
              flexGrow: 5,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              paddingRight: 5,
            }}
          >
            <PedalBikeRoundedIcon
              sx={{
                fontSize: 50,
                color: "black",
                transform: "scaleX(-1)",
              }}
            />
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
      </Box>
    </>
  );
}

export default Header;