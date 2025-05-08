import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb from "../Components/Images/bike/ScottStrikeimg0.png";
import img1 from "../Components/Images/bike/ScottStrikeimg1.png";
import img2 from "../Components/Images/bike/ScottStrikeimg2.png";
import img3 from "../Components/Images/bike/ScottStrikeimg3.png";
import img4 from "../Components/Images/bike/ScottStrikeimg4.png";

function ScottStrike() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "Alloy Frame / Virtual 4 link kinematic VLK 27.5 and 29 compatible / geo adj. / Boost 148x12mm" },
        { name: "Fork", value: "Marzocchi Z2 Air / eMTB+ Rail 3 / 3-Modes / 15x110mm QR axle / tapered steerer" },
        { name: "Rear Shock", value: "FOX Float EVOL Performace Trunnion 3 modes / Lockout-Trail-Descend DPS / Reb. Adj. Travel 140mm / 185x50mm" },
      ],
    },
    {
        title: "E-System",
        items: [
          { name: "Battery", value: "PowerTube 625Wh" },
          { name: "Charger", value: "4A Charger" },
          { name: "Computer", value: "Bosch Purion" },
          { name: "Motor", value: "Bosch Performance CX EU: 25kmh / INT: 20mph" },
        ],
      },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "Shimano FH-MT410-B CL TA" },
        { name: "Hub Rear", value: "Shimano FH-MT410-B CL / Boost 12x148mm" },
        { name: "Rims", value: "Syncros MD30 / 32H / 30mm / Pin Joint Tubeless ready" },
        { name: "Spokes", value: "Stainless Black" },
        { name: "Tire", value: "Maxxis Rekon / 29x2.6 / 120TPI Foldable Bead EXO+ / TR Tubeless ready 3C Maxx Terra" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "Shimano SL-M6100" },
        { name: "Rear Derailleur", value: "Shimano XT / 12 Speed" },
        { name: "Crank", value: "FSA CK-745 / 165mm / 34T" },
        { name: "Bottom Bracket", value: "FSA BB, Tapered" },
        { name: "Cassette", value: "Shimano CS-M6100 / 10-51 T" },
        { name: "Chain", value: "Shimano CN-M6100" },
        { name: "Pedal", value: "Pembree D2A flat pedal" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Syncros ER2.0" },
        { name: "Seat Post", value: "Syncros Duncan Dropper Post 2.5" },
        { name: "Brake Set", value: "Shimano BR-MT520 4 Piston" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Scott Strike"
        price="₱350,000"
        description="The Scott Strike eRide is a full-suspension e-MTB with a Bosch Performance CX motor, integrated battery, and 130mm travel, delivering comfort, control, and smooth pedal assist for trail adventures."
        images={[mtb, img1, img2, img3, img4]}
        colors={["#a0d5f5", "#7f888f", "#303030"]}
        sizes={["26", "27.5", "29"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default ScottStrike;
