import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb from "../Components/Images/bike/GiantRevoltimg0.png";
import img1 from "../Components/Images/bike/GiantRevoltimg1.png";
import img2 from "../Components/Images/bike/GiantRevoltimg2.png";
import img3 from "../Components/Images/bike/GiantRevoltimg3.png";
import img4 from "../Components/Images/bike/GiantRevoltimg4.png";

function GiantRevolt() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "Advanced-Grade Composite, 12x142mm thru-axle, disc, flip chip dropout" },
        { name: "Fork", value: "RockShox Rudy XPLR, 40mm, cartridge damper 12x100mm thru-axle" },
      ],
    },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "Giant CXR X alloy, CenterLock, 12mm thru-axle" },
        { name: "Hub Rear", value: "Giant CXR X alloy, 60t ratchet driver, CenterLock, 12mm thru-axle" },
        { name: "Rims", value: "Giant CXR X1 Carbon Disc WheelSystem, [F] 25.8mm, [R] 25.8mm" },
        { name: "Spokes", value: "Sapim Laser" },
        { name: "Tire", value: "Giant CrossCut Grip 1, 700x45c, tubeless2" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "SRAM Rival 1, 1x11" },
        { name: "Rear Derailleur", value: "SRAM Rival 1" },
        { name: "Crank", value: "SRAM Rival D1 DUB, 40t XS:170mm, S:170mm, M:172.5mm, M/L:172.5mm, L:175mm, XL:175mm" },
        { name: "Bottom Bracket", value: "SRAM DUB, press fit" },
        { name: "Cassette", value: "SRAM Rival, 11-speed, 11x42" },
        { name: "Chain", value: "SRAM PC-1130" },
        { name: "Pedal", value: "Shimano PD-ME700" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Giant Approach SL" },
        { name: "Seat Post", value: "Postmodern, dropper, 30.9mm with 30mm of suspension" },
        { name: "Brake Set", value: "SRAM Rival 1, left lever dropper switch, SRAM Rival 1 hydraulic, SRAM PaceLine rotors [F]160mm, [R]160mm" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Giant Revolt X Advanced Pro 2"
        price="₱75,000"
        description="The Giant Revolt X Advanced is a high-performance gravel bike designed for rough terrain. Featuring an Advanced-Grade Composite frame, 40mm front suspension, and a Shimano or SRAM 12-speed drivetrain (varies by model), it offers smooth handling, comfort, and control for off-road adventures."
        images={[mtb, img1, img2, img3, img4]}
        colors={["#1e340d", "#000000"]}
        sizes={["46", "48", "50"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default GiantRevolt;
