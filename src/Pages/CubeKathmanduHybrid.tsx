import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb from "../Components/Images/bike/CubeKathimg0.png";
import img1 from "../Components/Images/bike/CubeKathimg1.png";
import img2 from "../Components/Images/bike/CubeKathimg2.png";
import img3 from "../Components/Images/bike/CubeKathimg3.png";
import img4 from "../Components/Images/bike/CubeKathimg4.png";

function CubeKath() {
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
        { name: "Hub Front", value: "Shimano HB-MT400-B" },
        { name: "Hub Rear", value: "Shimano HB-MT400-B, 15mm, Boost, Centerlock / Shimano FH-MT400-B, 12mm, Boost, Centerlock" },
        { name: "Rims", value: "CUBE EX23, 36H, Disc, Tubeless Ready" },
        { name: "Spokes", value: "14g stainless steel Bladed" },
        { name: "Tire", value: "Schwalbe Big Ben, Performance, K-Guard, 55-622" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "Shimano Deore SL-M5100, Rapidfire-Plus" },
        { name: "Rear Derailleur", value: "Shimano Deore RD-M5100-SGS, 11-Speed" },
        { name: "Crank", value: "ACID E-Crank, 175mm" },
        { name: "Bottom Bracket", value: "Shimano, threaded cartridge" },
        { name: "Cassette", value: "Shimano Deore CS-M5100, 11-51T" },
        { name: "Chain", value: "KMC X11, 11 speed" },
        { name: "Pedal", value: "Nukeproof Horizon Pro Downhill pedal" },
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
        name="Cube Kathmandu Hybrid"
        price="₱350,000"
        description="The Cube Kathmandu Hybrid is a versatile e-touring bike with a Bosch Performance CX motor, high-capacity battery, comfortable geometry, and integrated rear rack, making it perfect for long-distance commuting and adventure rides."
        images={[mtb, img1, img2, img3, img4]}
        colors={["#a69897", "#000000"]}
        sizes={["26", "27.5", "29"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default CubeKath;
