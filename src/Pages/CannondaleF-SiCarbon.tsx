import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb from "../Components/Images/bike/CannondaleFimg0.png";
import img1 from "../Components/Images/bike/CannondaleFimg1.png";
import img2 from "../Components/Images/bike/CannondaleFimg2.png";
import img3 from "../Components/Images/bike/CannondaleFimg3.png";
import img4 from "../Components/Images/bike/CannondaleFimg4.png";

function CannondaleF() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "BallisTec Carbon, SAVE, PF30-83, tapered head tube, Speed Release 12mm thru axle, Ai Offset" },
        { name: "Fork", value: "Fox float 32 SC, 100mm , 15x100mm thru-axle , remote lockout , tapered steerer , 51mm offset." },
      ],
    },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "Shimano MT400, thru-axle" },
        { name: "Hub Rear", value: "Shimano MT400, thru-axle / 12x148mm" },
        { name: "Rims", value: "WTB STX i23 TCS, 32h, tubeless ready" },
        { name: "Spokes", value: "DT Swiss Champion" },
        { name: "Tire", value: "(F) Schwalbe Racing Ray Performance, 29x2.25, Addix Compound, tubeless ready, (R) Schwalbe Racing Ralph Performance, 29x2.25, Addix Compound, tubeless ready" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "SRAM NX Eagle, 12-speed" },
        { name: "Rear Derailleur", value: "SRAM NX Eagle, 12-Speed" },
        { name: "Crank", value: "Truvativ Stylo 6K DUB, 34T, Ai offset" },
        { name: "Bottom Bracket", value: "SRAM DUB PF30 MTB83" },
        { name: "Cassette", value: "SRAM SX Eagle, 11-50, 12-speedT" },
        { name: "Chain", value: "SRAM SX Eagle, 12-speed" },
        { name: "Pedal", value: "MTB Nylon Flat Pedal" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Fabric Scoop Shallow Sport, steel rails" },
        { name: "Seat Post", value: "Cannondale 3, 6061 Alloy, 27.2x400mm" },
        { name: "Brake Set", value: "Shimano MT500 hydraulic disc, 160/160mm RT54 rotors" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Cannondale F - Si Carbon 5"
        price="₱145,000"
        description="The Cannondale F-Si Carbon is a race-ready XC hardtail with a BallisTec Carbon frame, Lefty Ocho fork, and a Shimano XTR or SRAM Eagle drivetrain. Designed for speed and precision, it features OutFront Geometry for stability and SAVE seat stays for comfort, making it a top choice for elite racers."
        images={[mtb, img1, img2, img3, img4]}
        colors={["#f6ff0e", "#000000"]}
        sizes={["26", "27.5", "29"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default CannondaleF;
