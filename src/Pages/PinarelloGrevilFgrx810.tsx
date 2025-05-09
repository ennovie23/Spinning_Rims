import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb from "../Components/Images/bike/PinarelloGrevilimg0.png";
import img1 from "../Components/Images/bike/PinarelloGrevilimg1.png";
import img2 from "../Components/Images/bike/PinarelloGrevilimg2.png";
import img3 from "../Components/Images/bike/PinarelloGrevilimg3.png";
import img4 from "../Components/Images/bike/PinarelloGrevilimg4.png";

function PinarelloGrevil() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "TorayCa T700 UD, TiCR™ cable routing, Italian BB" },
        { name: "Fork", value: "grevil onda fork with forkflap™, tapered head tube" },
      ],
    },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "MOST Ultralight Custom Axle 12x100" },
        { name: "Hub Rear", value: "MOST Ultralight Custom Axle 12x100 & 12x142, Tool-free removal" },
        { name: "Rims", value: "Fulcrum Rapid Red 500" },
        { name: "Spokes", value: "Berd UHMWPE (Dyneema) spokes" },
        { name: "Tire", value: "Fulcrum Rapid Red 500" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "Campagnolo Ekar 13S" },
        { name: "Rear Derailleur", value: "Campagnolo Ekar 13S" },
        { name: "Crank", value: "Campagnolo Ekar 13s 1X" },
        { name: "Bottom Bracket", value: "Campagnolo Ekar" },
        { name: "Cassette", value: "Campagnolo Ekar 13S" },
        { name: "Chain", value: "Campagnolo Ekar C13 C-link 13s" },
        { name: "Pedal", value: "MKS Compact Ezy" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Most Lynx Aircross FEC Alloy Large 145mm" },
        { name: "Seat Post", value: "Pinarello Aero Seatpost" },
        { name: "Brake Set", value: "Campagnolo Ekar Ergopower 2 pistons, 160mm rotor" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Pinarello Grevil F grx810"
        price="₱399,000"
        description="The Pinarello Grevil is a high-performance gravel bike designed for speed and versatility. Featuring a lightweight carbon frame, aero-optimized design, and a Shimano or SRAM 12-speed drivetrain (varies by model), it delivers efficiency, control, and comfort on mixed terrain."
        images={[mtb, img1, img2, img3, img4]}
        colors={["#e4d7b4", "#a2c186", "#303030"]}
        sizes={["46", "48", "50"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default PinarelloGrevil;
