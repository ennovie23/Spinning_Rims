import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb from "../Components/Images/bike/CubeReacimg0.png";
import img1 from "../Components/Images/bike/CubeReacimg1.png";
import img2 from "../Components/Images/bike/CubeReacimg2.png";
import img3 from "../Components/Images/bike/CubeReacimg3.png";
import img4 from "../Components/Images/bike/CubeReacimg4.png";

function CubeReac() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "Aluminum Superlite, Gravity Casting Technology" },
        { name: "Fork", value: "X-Fusion MIG32 Air, Tapered, 15x110mm, 100mm, Lockout" },
      ],
    },
    {
        title: "E-System",
        items: [
          { name: "Battery", value: "Bosch Powertube 625 Wh Smart System" },
          { name: "Charger", value: "Bosch 4A Smart System" },
          { name: "Computer", value: "Bosch Kiox 300 Smart System + Bosch LED Remote" },
          { name: "Motor", value: "Bosch Performance Line CX 250W 85 Nm Smart System" },
        ],
      },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "Shimano HB-MT400" },
        { name: "Hub Rear", value: "Shimano HB-MT400-B, 15mm, Boost, Centerlock / Shimano FH-MT400-B, 12mm, Boost, Centerlock" },
        { name: "Rims", value: "CUBE EX23, 36H, Disc, Tubeless Ready" },
        { name: "Spokes", value: "14g stainless steel, Bladed" },
        { name: "Tire", value: "Schwalbe Big Ben, Performance, K-Guard, 55-622" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "Shimano Deore SL-M5100, Rapidfire-Plus" },
        { name: "Rear Derailleur", value: "Shimano Deore RD-M5100-SGS, 11-Speed" },
        { name: "Crank", value: "ACID E-Crank, 175mm" },
        { name: "Bottom Bracket", value: "Shimano, Press Fit" },
        { name: "Cassette", value: "Shimano Deore CS-M5100, 11-51T" },
        { name: "Chain", value: "KMC X11, 11 speed" },
        { name: "Pedal", value: "Carder TenFour pedal" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Natural Fit Sequence Confort" },
        { name: "Seat Post", value: "CUBE Suspension Seatpost HD, 30.9m" },
        { name: "Brake Set", value: "Shimano BR-MT200, Hydr. Disc Brake, Shimano SM-RT30 180mm/180mm rotors" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Cube Reaction Hybrid"
        price="₱200,000"
        description="The Cube Reaction Hybrid is a powerful e-MTB with a Bosch Performance CX motor, integrated battery, and 100mm suspension fork, offering smooth assistance, control, and versatility for trail and off-road adventures."
        images={[mtb, img1, img2, img3, img4]}
        colors={["#a69897", "#1987d4"]}
        sizes={["26", "27.5", "29"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default CubeReac;
