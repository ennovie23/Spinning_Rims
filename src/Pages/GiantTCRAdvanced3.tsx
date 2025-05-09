import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb from "../Components/Images/bike/GiantTCRimg0.png";
import img1 from "../Components/Images/bike/GiantTCRimg1.png";
import img2 from "../Components/Images/bike/GiantTCRimg2.png";
import img3 from "../Components/Images/bike/GiantTCRimg3.png";
import img4 from "../Components/Images/bike/GiantTCRimg4.png";

function GiantTCR() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "Giant TCR Advanced-grade composite" },
        { name: "Fork", value: "Advanced-grade composite, full-composite OverDrive steerer" },
      ],
    },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "Giant alloy, QR, 6-bolt, 5x100mm QR" },
        { name: "Hub Rear", value: "Giant alloy, QR, 6-bolt, 5x100mm QR, 6-bolt, freehub QR" },
        { name: "Rims", value: "Giant P-R2 wheelset, alloy" },
        { name: "Spokes", value: "Sapim" },
        { name: "Tire", value: "Giant AC 1, tubeless, 700x25c (28mm), folding" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "Shimano 105 2x11" },
        { name: "Front Derailleur", value: "Shimano 105 2 speed" },
        { name: "Rear Derailleur", value: "Shimano 105 11 speed" },
        { name: "Crank", value: "Shimano 105, 36/52 S:170mm, M:172.5mm, M/L:172.5mm, L:175mm, XL:175mm" },
        { name: "Bottom Bracket", value: "Shimano, press fit" },
        { name: "Cassette", value: "Shimano 105, 11-speed, 11x30" },
        { name: "Chain", value: "KMC X11EL-1" },
        { name: "Pedal", value: "Favero Assioma PRO MX-1" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Giant Approach" },
        { name: "Seat Post", value: "Giant Variant, composite, -5/+15mm offset" },
        { name: "Brake Set", value: "Shimano 105 Brakes" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Giant TCR Advanced 3"
        price="₱83,400"
        description="The Giant TCR Advanced 2 is a lightweight, aero road bike with an Advanced-Grade Composite frame, Shimano 105 12-speed drivetrain, and tubeless-ready wheels, offering speed and efficiency for competitive and endurance riders."
        images={[mtb, img1, img2, img3, img4]}
        colors={["#1987d4", "#ff9b16", "#000000"]}
        sizes={["46", "48", "50"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default GiantTCR;
