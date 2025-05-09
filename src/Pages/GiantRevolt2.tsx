import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb from "../Components/Images/bike/GiantRevolt2img0.png";
import img1 from "../Components/Images/bike/GiantRevolt2img1.png";
import img2 from "../Components/Images/bike/GiantRevolt2img2.png";
import img3 from "../Components/Images/bike/GiantRevolt2img3.png";
import img4 from "../Components/Images/bike/GiantRevolt2img4.png";

function GiantRevolt2() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "ALUXX-Grade Aluminum, 12x142mm thru-axle, disc, flip chip dropout" },
        { name: "Fork", value: "Advanced-Grade Composite, full-composite OverDrive steerer, 12mm thru-axle, disc" },
      ],
    },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "Giant S-X2 Disc wheelset" },
        { name: "Hub Rear", value: "Giant S-X2 Disc wheelset" },
        { name: "Rims", value: "Giant S-X2 Disc wheelset" },
        { name: "Spokes", value: "Giant S-X2 Disc wheelset" },
        { name: "Tire", value: "Giant CrossCut AT 2, 700x38c, tubeless" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "Shimano Sora, 2x9" },
        { name: "Front Derailleur", value: "Shimano Sora 2 Speed" },
        { name: "Rear Derailleur", value: "Shimano Sora, long cage , 12 Speed" },
        { name: "Crank", value: "FSA Vero Pro, 32/48" },
        { name: "Bottom Bracket", value: "cartridge" },
        { name: "Cassette", value: "Shimano HG400, 11x34" },
        { name: "Chain", value: "KMC X9 with Missing Link" },
        { name: "Pedal", value: "Race Face Chester Pedal" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Giant Approach" },
        { name: "Seat Post", value: "Giant D-Fuse, alloy, 14mm offset" },
        { name: "Brake Set", value: "Shimano Sora, Giant MPH rotors [F]160mm, [R]160mm" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Giant Revolt 2"
        price="₱75,000"
        description="The Giant Revolt X Advanced is a high-performance gravel bike designed for rough terrain. Featuring an Advanced-Grade Composite frame, 40mm front suspension, and a Shimano or SRAM 12-speed drivetrain (varies by model), it offers smooth handling, comfort, and control for off-road adventures."
        images={[mtb, img1, img2, img3, img4]}
        colors={["#000000", "#80878f", "#1987d4"]}
        sizes={["46", "48", "50"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default GiantRevolt2;
