import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb from "../Components/Images/bike/SworksCruximg0.png";
import img1 from "../Components/Images/bike/SworksCruximg1.png";
import img2 from "../Components/Images/bike/SworksCruximg2.png";
import img3 from "../Components/Images/bike/SworksCruximg3.png";
import img4 from "../Components/Images/bike/SworksCruximg4.png";

function SworksCrux() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "S-Works Crux FACT 12r Carbon, Rider First Engineered™, Threaded BB, 12x142mm thru-axle, flat-mount disc" },
        { name: "Fork", value: "S-Works FACT 12R Carbon, 12x100mm thru-axle, flat-mount disc" },
      ],
    },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "Fulcrum Racing 900 DB" },
        { name: "Hub Rear", value: "Fulcrum Racing 900 DB,  28H, 19mm IW, XDR freehub" },
        { name: "Rims", value: "Roval Terra CLX I, 25mm internal width, Tubeless Ready, 32mm depth, 24h, Roval AFD2, Centerlock, DT Swiss EXP internals, SRAM XDR, DT Swiss Aerolite spokes" },
        { name: "Spokes", value: "DT swiss" },
        { name: "Tire", value: "Roval Terra CLX I, 25mm internal width, Tubeless ready, 32mm depth" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "SRAM Red eTap AXS" },
        { name: "Rear Derailleur", value: "SRAM Red XPLR eTap AXS" },
        { name: "Crank", value: "SRAM Red AXS Power Meter" },
        { name: "Bottom Bracket", value: "SRAM DUB BSA" },
        { name: "Cassette", value: "SRAM XPLR, XG-1271, 12-speed, 10-44t" },
        { name: "Chain", value: "SRAM RED 12-speed" },
        { name: "Pedal", value: "Crank Brothers Double Shot" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Body Geometry S-Works Power, carbon fiber rails, carbon fiber base" },
        { name: "Seat Post", value: "Roval Alpinist Carbon Seatpost" },
        { name: "Brake Set", value: "SRAM Red eTAP AXS, hydraulic disc" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="S - Works Crux"
        price="₱700,000"
        description="The S-Works Crux is an ultralight gravel bike built for speed and performance. Featuring a FACT 12r carbon frame, race-optimized geometry, and a SRAM Red or Force eTap AXS 12-speed drivetrain (varies by model), it delivers top-tier efficiency, control, and versatility on any terrain."
        images={[mtb, img1, img2, img3, img4]}
        colors={["#7f8791"]}
        sizes={["46", "48", "50"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default SworksCrux;
