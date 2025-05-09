import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb from "../Components/Images/bike/GiantPropelimg0.png";
import img1 from "../Components/Images/bike/GiantPropelimg1.png";
import img2 from "../Components/Images/bike/GiantPropelimg2.png";
import img3 from "../Components/Images/bike/GiantPropelimg3.png";
import img4 from "../Components/Images/bike/GiantPropelimg4.png";

function GiantPropel() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "Giant Propel Advanced-Grade Composite, disc" },
        { name: "Fork", value: "Advanced SL-Grade Composite, full-composite OverDrive Aero steerer, disc" },
      ],
    },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "Giant Low Friction Hub, CenterLock, 12mm thru-axle" },
        { name: "Hub Rear", value: "Giant Low Friction Hub, 30t ratchet driver, CenterLock, 12mm thru-axle," },
        { name: "Rims", value: "Giant SLR 1 50 Carbon Disc WheelSystem, [F]50mm, [R]50mm" },
        { name: "Spokes", value: "SAPIM CX-Ray" },
        { name: "Tire", value: "CADEX Race, tubeless, 700x25c (26.5mm), folding" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "Shimano Ultegra Di2 ST-R8170" },
        { name: "Front Derailleur", value: "Shimano Ultegra Di2 FD-R8150" },
        { name: "Rear Derailleur", value: "Shimano Ultegra Di2 RD-R8150" },
        { name: "Crank", value: "Shimano Ultegra, 36/52, XS:170mm, S:170mm, M:172.5mm, M/L:172.5mm, L:175mm, XL:175mm" },
        { name: "Bottom Bracket", value: "Shimano, press fit" },
        { name: "Cassette", value: "Shimano Ultegra, 12-speed, 11x30" },
        { name: "Chain", value: "Shimano Ultegra, CN-M8100" },
        { name: "Pedal", value: "Shimano 105 R7000 Pedals" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Giant Fleet SL" },
        { name: "Seat Post", value: "Giant Vector, composite, -5/+15mm offset" },
        { name: "Brake Set", value: "Shimano Ultegra Di2 hydraulic, Shimano RT-MT800 rotors [F]160mm, [R]140mm" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Giant Propel Advanced Pro"
        price="₱123,400"
        description="The Giant Propel Advanced Pro is an aero road bike built for speed, featuring an Advanced-Grade Composite frame, and a Shimano 105 or Ultegra 12-speed drivetrain (varies by model). Perfect for riders seeking maximum efficiency and race-ready performance."
        images={[mtb, img1, img2, img3, img4]}
        colors={["#000000", "#303030", "#a80001"]}
        sizes={["46", "48", "50"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default GiantPropel;
