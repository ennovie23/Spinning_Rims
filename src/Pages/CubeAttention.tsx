import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb from "../Components/Images/bike/CubeAttentionimg0.png";
import img1 from "../Components/Images/bike/CubeAttentionimg1.png";
import img2 from "../Components/Images/bike/CubeAttentionimg2.png";
import img3 from "../Components/Images/bike/CubeAttentionimg3.png";
import img4 from "../Components/Images/bike/CubeAttentionimg4.png";

function CubeAttention() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "Aluminium Lite, AMF, Double Butted, Internal Cable Routing, Tapered Head Tube, Flat Mount Brake, SIC Mount, FM Kickstand Mount" },
        { name: "Fork", value: "RockShox Judy Silver TK AIR, 100mm, PopLoc" },
      ],
    },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "Shimano FH-MT401, QR, Centerlock" },
        { name: "Hub Rear", value: "Shimano FH-MT401, QR, Centerlock / 12x148mm" },
        { name: "Rims", value: "CUBE ZX20, 32H, Disc" },
        { name: "Spokes", value: "Stainless Black 15G / 1.8mm" },
        { name: "Tire", value: "Schwalbe Smart Sam, Active, 2.25" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "Shimano Deore SL-M6100, Rapidfire-Plus" },
        { name: "Rear Derailleur", value: "Shimano XT RD-M8100-SGS, ShadowPlus, 12-Speed" },
        { name: "Crank", value: "ACID 32T" },
        { name: "Bottom Bracket", value: "Threaded Bottom Bracket" },
        { name: "Cassette", value: "Shimano Deore CS-M6100, 10-51T" },
        { name: "Chain", value: "Shimano CN-M6100" },
        { name: "Pedal", value: "Composite OneUp" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Natural Fit Venec Lite" },
        { name: "Seat Post", value: "CUBE Performance Post, 27.2mm" },
        { name: "Brake Set", value: "Tektro MD-280/U310R, Mech. Disc Brake (160/160)" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Cube Attention SL"
        price="₱60,420"
        description="The Cube Attention SL is a high-performance hardtail mountain bike built for ambitious riders who want precision and control on the trails. Featuring a lightweight aluminum frame, a RockShox Judy Silver air fork with 100mm travel and remote lockout, and a Shimano Deore 12-speed drivetrain"
        images={[mtb, img1, img2, img3, img4]}
        colors={["#000000", "#1987d4", "#ff9b15"]}
        sizes={["27.5", "29"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default CubeAttention;
