import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb1 from "../Components/Images/bike/Trek7img0.png";
import Trek7img1 from "../Components/Images/bike/Trek7img1.png";
import Trek7img2 from "../Components/Images/bike/Trek7img2.png";
import Trek7img3 from "../Components/Images/bike/Trek7img3.png";
import Trek7img4 from "../Components/Images/bike/Trek7img4.png";

function TrekMarlin7() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "Alpha Silver Aluminium, curved top tube, internal routing, 135x5mm QR" },
        { name: "Fork", value: "SR Suntour XCE 28" },
      ],
    },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "Formula DC-20, alloy, 6-bolt, 5x100mm QR" },
        { name: "Hub Rear", value: "Formula DC-27, alloy, 6-bolt, 7sp freehub, 135x5mm QR" },
        { name: "Tire", value: "Bontrager XR2 Comp, 27.5x2.20, 30 tpi" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "Shimano Altus M315, 7x3 speed" },
        { name: "Crank", value: "Shimano Tourney TY301, 42/34/24, 170mm length" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Shifter", value: "Shimano Altus M315, 7x3 speed" },
        { name: "Crank", value: "Shimano Tourney TY301, 42/34/24, 170mm length" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Trek Marlin 7"
        price="₱47,490"
        description="The Trek Marlin 7 is a high-performance hardtail mountain bike with premium components designed for serious riders."
        images={[mtb1, Trek7img1, Trek7img2, Trek7img3, Trek7img4]}
        colors={["#a7d2f2", "#7be0ce", "#ff9918"]}
        sizes={["27.5", "29"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default TrekMarlin7;
