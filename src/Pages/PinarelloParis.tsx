import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb from "../Components/Images/bike/PinarelloParisimg0.png";
import img1 from "../Components/Images/bike/PinarelloParisimg1.png";
import img2 from "../Components/Images/bike/PinarelloParisimg2.png";
import img3 from "../Components/Images/bike/PinarelloParisimg3.png";
import img4 from "../Components/Images/bike/PinarelloParisimg4.png";

function PinarelloParis() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "Pinarello Paris Disc T600 carbon" },
        { name: "Fork", value: "Pinarello Onda carbon" },
      ],
    },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "Fulcrum, 6-bolt, 5x100mm TA" },
        { name: "Hub Rear", value: "Fulcrum, 6-bolt, 135x5mm TA" },
        { name: "Rims", value: "Fulcrum Racing 700DB" },
        { name: "Spokes", value: "Fulcrum Racing 700DB" },
        { name: "Tire", value: "Pinarello Logo Pro, 700x25C" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "Shimano 105 R7020" },
        { name: "Front Derailleur", value: "Shimano 105 7000" },
        { name: "Rear Derailleur", value: "Shimano 105 7000" },
        { name: "Crank", value: "Shimano 105 Hollowtech 2" },
        { name: "Bottom Bracket", value: "Shimano SMBBR60" },
        { name: "Cassette", value: "Shimano 105" },
        { name: "Chain", value: "Shimano 105, 11-speed" },
        { name: "Pedal", value: "Time Xpresso 4" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Most Lynx Air" },
        { name: "Seat Post", value: "carbon aero" },
        { name: "Brake Set", value: "Shimano 105 flat mount" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Pinarello Paris 105"
        price="₱320,600"
        description="The Pinarello Paris 105 is an endurance-focused road bike with race-inspired performance. Featuring a T600 carbon frame, aerodynamic design, and a Shimano 105 12-speed drivetrain, it offers comfort, efficiency, and responsiveness for long rides and fast-paced cycling."
        images={[mtb, img1, img2, img3, img4]}
        colors={["#dadada", "#303030", "#203850"]}
        sizes={["46", "48", "50"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default PinarelloParis;
