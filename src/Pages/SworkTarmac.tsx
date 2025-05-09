import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb from "../Components/Images/bike/SworkTarmacimg0.png";
import img1 from "../Components/Images/bike/SworkTarmacimg1.png";
import img2 from "../Components/Images/bike/SworkTarmacimg2.png";
import img3 from "../Components/Images/bike/SworkTarmacimg3.png";
import img4 from "../Components/Images/bike/SworkTarmacimg4.png";

function SworkTarmac() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "Tarmac SL7 FACT 9r Carbon, Rider First Engineered™, Win Tunnel Engineered, Clean Routing, Threaded BB, 12x142mm thru-axle, flat-mount disc" },
        { name: "Fork", value: "FACT Carbon, 12x100mm thru-axle, flat-mount disc" },
      ],
    },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "DT R470 Disc" },
        { name: "Hub Rear", value: "DT R470 Disc freehub, 135x5mm TA" },
        { name: "Rims", value: "DT R470 " },
        { name: "Spokes", value: "14g stainless steel, black" },
        { name: "Tire", value: "Turbo Pro, 700x26" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "Shimano 105, 12 speed Mechanical" },
        { name: "Front Derailleur", value: "Shimano 105, Braze-on" },
        { name: "Rear Derailleur", value: "Shimano 105, 12 speed Mechanical" },
        { name: "Crank", value: "Shimano 105, 12-speed" },
        { name: "Bottom Bracket", value: "Shimano Threaded BSA BB" },
        { name: "Cassette", value: "Shimano 105, 12-speed, 11-34t" },
        { name: "Chain", value: "Shimano SLX M7100, 12-speed w/ quick link" },
        { name: "Pedal", value: "Look Keo 2 Max Carbon pedals" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Body Geometry Power Sport, steel rails" },
        { name: "Seat Post", value: "2021 S-Works Tarmac Carbon seat post, FACT Carbon, 20mm offset" },
        { name: "Brake Set", value: "Shimano 105, Hydraulic disc" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="S - Works Tarmac SL7"
        price="₱235,000"
        description="The Specialized Tarmac SL7 is an ultra-light, aero-optimized road bike built for speed and efficiency. Featuring a FACT Carbon frame, integrated aerodynamics, and a Shimano or SRAM 12-speed drivetrain (varies by model), it delivers race-winning performance without compromise."
        images={[mtb, img1, img2, img3, img4]}
        colors={["#dadada", "#303030", "#821dfd"]}
        sizes={["46", "48", "50"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default SworkTarmac;
