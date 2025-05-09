import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb from "../Components/Images/bike/SpecializedAllezimg0.png";
import img1 from "../Components/Images/bike/SpecializedAllezimg1.png";
import img2 from "../Components/Images/bike/SpecializedAllezimg2.png";
import img3 from "../Components/Images/bike/SpecializedAllezimg3.png";
import img4 from "../Components/Images/bike/SpecializedAllezimg4.png";

function SpecializedAllez() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "Specialized E5 Premium Aluminum Disc frame with D'Aluisio Smartweld Sprint Technology, hydroformed aluminum tubing, tapered head tube, fully internally routed cables, threaded BB" },
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
        { name: "Tire", value: "Turbo Pro, 60 TPI, folding bead, BlackBelt protection, 700x26mm" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "Shimano 105 R7020, hydraulic disc" },
        { name: "Front Derailleur", value: "Shimano 105 R7000, braze-on" },
        { name: "Rear Derailleur", value: "Shimano 105 R7000 GS, medium cage, 11-speed" },
        { name: "Crank", value: "Shimano 105 R7000, HollowTech 2, 11-speed" },
        { name: "Bottom Bracket", value: "Shimano Threaded BSA BB" },
        { name: "Cassette", value: "Shimano 105, 11-speed, 11-28t" },
        { name: "Chain", value: "KMC X11 Extra Lightweight, 11-speed" },
        { name: "Pedal", value: "Look Keo 2 Max Carbon pedals" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Body Geometry Power Sport, steel rails" },
        { name: "Seat Post", value: "2021 S-Works Tarmac Carbon seat post, FACT Carbon, Di2 Compatible, 20mm offset" },
        { name: "Brake Set", value: "Shimano 105, Hydraulic disc" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Specialized Allez Sprint Comp"
        price="₱235,000"
        description="The Specialized Allez Sprint Comp is a performance-focused aluminum road bike with race-ready speed. Featuring an E5 Alloy frame, carbon fork, and a Shimano 105 12-speed drivetrain, it delivers stiffness, efficiency, and responsive handling for competitive riders"
        images={[mtb, img1, img2, img3, img4]}
        colors={["#821dfd", "#80878f", "#7be0ce"]}
        sizes={["46", "48", "50"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default SpecializedAllez;
