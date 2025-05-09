import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb from "../Components/Images/bike/CanyonGrailCFimg0.png";
import img1 from "../Components/Images/bike/CanyonGrailCFimg1.png";
import img2 from "../Components/Images/bike/CanyonGrailCFimg2.png";
import img3 from "../Components/Images/bike/CanyonGrailCFimg3.png";
import img4 from "../Components/Images/bike/CanyonGrailCFimg4.png";

function CanyonGrailCF() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "Canyon Grail CF SL" },
        { name: "Fork", value: "Canyon FK0070 CF Disc" },
      ],
    },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "Canyon Thru Axle" },
        { name: "Hub Rear", value: "Canyon Thru Axle" },
        { name: "Rims", value: "DT Swiss Gravel LN" },
        { name: "Spokes", value: "DT Swiss Gravel LN" },
        { name: "Tire", value: "Schwalbe G-One R, 40mm" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "Shimano GRX RX820, 2x12 speed" },
        { name: "Front Derailleur", value: "Shimano GRX RX820, 2 speed" },
        { name: "Rear Derailleur", value: "Shimano GRX RX820, 12 speed" },
        { name: "Crank", value: "Shimano GRX RX610" },
        { name: "Bottom Bracket", value: "Token Ninja Lite BB4124" },
        { name: "Cassette", value: "Shimano HG700 11-34 11s" },
        { name: "Chain", value: "Shimano CN-HG601 11s" },
        { name: "Pedal", value: "Race Face Effect" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Fizik Argo Terra X5" },
        { name: "Seat Post", value: "Canyon SP0043 VCLS CF" },
        { name: "Brake Set", value: "Shimano GRX RX610, Shimano RT70" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Canyon Grail CF SL 7"
        price="₱229,000"
        description="The Canyon Grail CF SL 7 is a lightweight carbon gravel bike built for speed and comfort. Featuring a CF SL carbon frame, carbon fork, and a Shimano GRX 11-speed drivetrain, it delivers stability, efficiency, and control on mixed terrain. Perfect for long-distance gravel adventures."
        images={[mtb, img1, img2, img3, img4]}
        colors={["#303030", "#e4d7b4"]}
        sizes={["46", "48", "50"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default CanyonGrailCF;
