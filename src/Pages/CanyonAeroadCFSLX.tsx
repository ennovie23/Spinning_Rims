import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb from "../Components/Images/bike/CanyonAeroadimg0.png";
import img1 from "../Components/Images/bike/CanyonAeroadimg1.png";
import img2 from "../Components/Images/bike/CanyonAeroadimg2.png";
import img3 from "../Components/Images/bike/CanyonAeroadimg3.png";
import img4 from "../Components/Images/bike/CanyonAeroadimg4.png";

function CanyonAeroad() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "Canyon Aeroad CF SLX Disc Lightweight carbon aero road racing frame." },
        { name: "Fork", value: "Canyon FK0060 CF Disc Aero design shaped using advanced CFD technology. Disc flat-mount disc standard. CT scanner tested and approved." },
      ],
    },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "DT Swiss through axle with Lever" },
        { name: "Hub Rear", value: "DT Swiss through axle with Lever" },
        { name: "Rims", value: "DT Swiss ARC 1400 Dicut Axle dimension" },
        { name: "Spokes", value: "DT Swiss Spokes" },
        { name: "Tire", value: "Continental GP5000 S TR" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "Shimano Ultegra Di2 R8150" },
        { name: "Front Derailleur", value: "Shimano Ultegra Di2 R8150, 2-speed" },
        { name: "Rear Derailleur", value: "Shimano Ultegra Di2 R8150, 12-speed" },
        { name: "Crank", value: "Shimano Ultegra R8100" },
        { name: "Bottom Bracket", value: "Shimano Pressfit BB72" },
        { name: "Cassette", value: "Shimano Ultegra R8100,12-speed, 11-30T" },
        { name: "Chain", value: "Shimano CN-M8100 12s" },
        { name: "Pedal", value: "Time XPro 10 pedals" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Selle Italia SLR Boost Superflow S manganese" },
        { name: "Seat Post", value: "Giant Vector, composite, -5/+15mm offset" },
        { name: "Brake Set", value: "Shimano Ultegra Di2 R8170" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Canyon Aeroad CF SLX"
        price="₱326,550"
        description="The Canyon Aeroad CF SLX is a high-performance aero road bike designed for speed and efficiency. Featuring a lightweight carbon frame, integrated aero design, and a Shimano or SRAM 12-speed drivetrain (varies by model), it delivers race-ready performance for competitive riders."
        images={[mtb, img1, img2, img3, img4]}
        colors={["#303030", "#821dff", "#7f848c"]}
        sizes={["46", "48", "50"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default CanyonAeroad;
