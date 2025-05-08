import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb from "../Components/Images/bike/ScottAspectimg0.png";
import img1 from "../Components/Images/bike/ScottAspectimg1.png";
import img2 from "../Components/Images/bike/ScottAspectimg2.png";
import img3 from "../Components/Images/bike/ScottAspectimg3.png";
import img4 from "../Components/Images/bike/ScottAspectimg4.png";

function ScottAspect() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "6061 Alloy custom butted tubing Bosch Integr. removable Battery internal cable routing" },
        { name: "Fork", value: "SR Suntour XCM34 Coil 15x110mm QR axle / Tapered Steerer Remote Lockout / 120mm travel" },
      ],
    },
    {
        title: "E-System",
        items: [
          { name: "Battery", value: "PowerTube 625Wh" },
          { name: "Charger", value: "4A Charger" },
          { name: "Computer", value: "Bosch LED Remote" },
          { name: "Motor", value: "Bosch Performance EU: 25kmh / INT: 20mph" },
        ],
      },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "Shimano FH-MT400-B CL  Boost" },
        { name: "Hub Rear", value: "Shimano FH-MT400-B CL / Boost 12x148mm" },
        { name: "Rims", value: "Syncros X18 / 32H / 30mm / Pin Joint" },
        { name: "Spokes", value: "Stainless Black, Bladed" },
        { name: "Tire", value: "Kenda Booster 29x2.6 / 30TPI" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "Shimano SL-M4100" },
        { name: "Rear Derailleur", value: "Shimano RD-M5120 / 10 Speed" },
        { name: "Crank", value: "FSA CK-200 / 165mm" },
        { name: "Bottom Bracket", value: "FSA BB, Threaded "},
        { name: "Cassette", value: "Shimano CS-M4100 11-46" },
        { name: "Chain", value: "KMC e10S" },
        { name: "Pedal", value: "Bontrager Line Pro pedals" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Syncros ER2.5" },
        { name: "Seat Post", value: "Syncros 3.0 / 31.6mm" },
        { name: "Brake Set", value: "Shimano BR-MT200 Disc, Front: SM-RT30 CL 180mm / Rear: RT-EM300 CL 180mm" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Scott Aspect"
        price="₱200,000"
        description="The Scott Aspect is a lightweight hardtail mountain bike with an aluminum frame, 100mm suspension fork, and a reliable Shimano or SRAM drivetrain (varies by model), offering efficiency and control for trail and off-road riding."
        images={[mtb, img1, img2, img3, img4]}
        colors={["#80878e", "#21384f", "#778472"]}
        sizes={["26", "27.5", "29"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default ScottAspect;
