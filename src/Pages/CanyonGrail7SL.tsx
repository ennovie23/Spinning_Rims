import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb from "../Components/Images/bike/CanyonGrailimg0.png";
import img1 from "../Components/Images/bike/CanyonGrailimg1.png";
import img2 from "../Components/Images/bike/CanyonGrailimg2.png";
import img3 from "../Components/Images/bike/CanyonGrailimg3.png";
import img4 from "../Components/Images/bike/CanyonGrailimg4.png";

function CanyonGrail() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "Canyon Grail CF SL" },
        { name: "Fork", value: "Canyon FK0117 CF Disc" },
      ],
    },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "Canyon GP0235-01" },
        { name: "Hub Rear", value: "Canyon GP0235-01,  28H" },
        { name: "Rims", value: "DT Swiss Gravel LN" },
        { name: "Spokes", value: "DT Swiss Gravel LN" },
        { name: "Tire", value: "Schwalbe G-One R, 40mm" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "Shimano GRX RX820 2x12 Speed" },
        { name: "Front Derailleur", value: "Shimano GRX RX820 2 Speed" },
        { name: "Rear Derailleur", value: "Shimano GRX RX820 12 Speed" },
        { name: "Crank", value: "Shimano GRX RX610" },
        { name: "Bottom Bracket", value: "Token Ninja Lite BB4124" },
        { name: "Cassette", value: "Shimano 105 R7101 11-34 12s" },
        { name: "Chain", value: "Shimano CN-M6100" },
        { name: "Pedal", value: "Crankbrothers Crank 3" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Vento Argo X5" },
        { name: "Seat Post", value: "Canyon SP0072" },
        { name: "Brake Set", value: "Shimano GRX RX610, Shimano RT70" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Canyon Grail 7 AL"
        price="₱165,000"
        description="The Canyon Grail 7 AL is a versatile gravel bike built for adventure. Featuring a lightweight aluminum frame, a carbon fork, and a Shimano GRX 11-speed drivetrain, it delivers stability, comfort, and control on rough terrain. Perfect for long rides on and off the road."
        images={[mtb, img1, img2, img3, img4]}
        colors={["#778472", "#e4d7b4"]}
        sizes={["46", "48", "50"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default CanyonGrail;
