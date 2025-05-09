import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb from "../Components/Images/bike/CerveloAsperoimg0.png";
import img1 from "../Components/Images/bike/CerveloAsperoimg1.png";
import img2 from "../Components/Images/bike/CerveloAsperoimg2.png";
import img3 from "../Components/Images/bike/CerveloAsperoimg3.png";
import img4 from "../Components/Images/bike/CerveloAsperoimg4.png";

function CerveloAspero() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "Cervélo All-Carbon, Tapered Aspero-5" },
        { name: "Fork", value: "Cervélo All-Carbon, Tapered Aspero-5 Fork" },
      ],
    },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "Reserve 44TA GR, Zipp 176, 12x142mm" },
        { name: "Hub Rear", value: "Reserve 44TA GR, Zipp 176, 12x142mm, HG freehub, 24H centerlock," },
        { name: "Rims", value: "Tubeless compatible Front: Reserve 40TA GR, Zipp 76, 12x100mm, 24H centerlock, tubeless compatible" },
        { name: "Spokes", value: "24H, centerlock" },
        { name: "Tire", value: "Panaracer Gravel King SK 700x38c" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "Shimano GRX, RX815, 2x11 speed" },
        { name: "Front Derailleur", value: "Shimano GRX, RX815, 2 speed" },
        { name: "Rear Derailleur", value: "Shimano GRX, RX815, 11 speed" },
        { name: "Crank", value: "Shimano GRX 810, 48/31T, 11 Speed" },
        { name: "Bottom Bracket", value: "FSA, BBright thread together, 24mm spindle" },
        { name: "Cassette", value: "Shimano HG800, 11-34, 11 Speed" },
        { name: "Chain", value: "Shimano HG701, 11 speed" },
        { name: "Pedal", value: "Catalyst pedal" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Prologo Dimension NDR Nack" },
        { name: "Seat Post", value: "Cervélo SP19 Carbon 27.2 OR Easton EA50 Alloy" },
        { name: "Brake Set", value: "Shimano GRX RX810, Shimano MT800 Centerlock" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Cervelo Aspero"
        price="₱500,000"
        description="The Cervélo Áspero is a fast and lightweight gravel bike built for racing and adventure. Featuring a carbon frame, progressive geometry, and a Shimano GRX or SRAM 12-speed drivetrain (varies by model), it delivers speed, control, and versatility on mixed terrain."
        images={[mtb, img1, img2, img3, img4]}
        colors={["#490508", "#303030", "#490508"]}
        sizes={["46", "48", "50"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default CerveloAspero;
