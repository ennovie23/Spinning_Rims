import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb from "../Components/Images/bike/SCCimg0.png";
import img1 from "../Components/Images/bike/SCCimg1.png";
import img2 from "../Components/Images/bike/SCCimg2.png";
import img3 from "../Components/Images/bike/SCCimg3.png";
import img4 from "../Components/Images/bike/SCCimg4.png";

function SCC() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "Santa Cruz Chameleon R MX" },
        { name: "Fork", value: "FOX Rhythm 34, 130mm" },
      ],
    },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "SRAM MTH 746, 12x148, 32h" },
        { name: "Hub Rear", value: "SRAM MTH 746, 12x148, 32h, TA" },
        { name: "Rims", value: "RaceFace AR Offset 30" },
        { name: "Spokes", value: "DT Swiss Champion" },
        { name: "Tire", value: "Maxxis Aggressor 27.5x2.5, EXO, TR" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "SRAM NX Eagle, 12-speed" },
        { name: "Rear Derailleur", value: "SRAM NX Eagle, 12-Speed" },
        { name: "Crank", value: "SRAM Descendant Eagle 148 DUB, 32t" },
        { name: "Bottom Bracket", value: "SRAM DUB PF30 MTB83" },
        { name: "Cassette", value: "SRAM PG1230, 12spd, 11-50t" },
        { name: "Chain", value: "SRAM NX Eagle, 12-speed" },
        { name: "Pedal", value: "BUCKLOS MTB Dual Sided Cleat Pedals" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "WTB Silverado Medium CroMo" },
        { name: "Seat Post", value: "SDG Tellis Dropper, 31.6" },
        { name: "Brake Set", value: "SRAM Guide T" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Santa Cruz Chameleon R MX"
        price="₱200,400"
        description="The Santa Cruz Chameleon R MX is a versatile hardtail with a mixed-wheel setup, 130mm RockShox Pike Base fork, and SRAM NX Eagle 12-speed drivetrain. Adjustable dropouts make it adaptable for any trail adventure."
        images={[mtb, img1, img2, img3, img4]}
        colors={["#80878f", "#000000", "#f6ff0e"]}
        sizes={["26", "27.5", "29"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default SCC;
