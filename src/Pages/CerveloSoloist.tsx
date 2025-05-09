import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb from "../Components/Images/bike/CerveloSoloistimg0.png";
import img1 from "../Components/Images/bike/CerveloSoloistimg1.png";
import img2 from "../Components/Images/bike/CerveloSoloistimg2.png";
import img3 from "../Components/Images/bike/CerveloSoloistimg3.png";
import img4 from "../Components/Images/bike/CerveloSoloistimg4.png";

function CerveloSoloist() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "Cervélo All-Carbon Frame" },
        { name: "Fork", value: "Cervélo All-Carbon, Tapered Soloist Fork" },
      ],
    },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "Zipp 176,12x142mm, HG freehub, 24H" },
        { name: "Hub Rear", value: "Zipp 176,12x142mm, HG ratchet, 24H" },
        { name: "Rims", value: "Rear: Reserve 44, 25mm IW, Zipp 176,12x142mm, HG freehub, 24H, centerlock, tubeless compatible Front: Reserve 40, 25.5mm IW, Zipp 76, 24H, centerlock, tubeless compatible" },
        { name: "Spokes", value: "24H, centerlock" },
        { name: "Tire", value: "Corsa N.EXT TLR G2.0 700x28c OR Vittoria Rubino Pro TLR G 28c Black" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "Shimano Ultegra, R8170, 2x12 speed" },
        { name: "Front Derailleur", value: "Shimano Ultegra, R8170, 2 speed" },
        { name: "Rear Derailleur", value: "Shimano Ultegra, R8170, 12 speed" },
        { name: "Crank", value: "Shimano Ultegra R8100, 52/36T, 12 Speed" },
        { name: "Bottom Bracket", value: "JY BBright T47, for 24mm spindle" },
        { name: "Cassette", value: "Shimano Ultegra, 11-30, 12 Speed" },
        { name: "Chain", value: "Shimano M8100, 12 speed" },
        { name: "Pedal", value: "Garmin Rally RS200 pedals" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Selle Italia NOVUS BOOST EVO SuperFlow Manganese" },
        { name: "Seat Post", value: "Cervélo SP27 Carbon" },
        { name: "Brake Set", value: "Shimano Ultegra, Shimano CL800 Centerlock" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Cervelo Soloist"
        price="₱290,000"
        description="The Cervélo Soloist is a lightweight aero road bike built for speed and efficiency. Featuring a carbon frame, aerodynamic tube shaping, and a Shimano 105 or Ultegra 12-speed drivetrain (varies by model), it balances race-ready performance with everyday versatility."
        images={[mtb, img1, img2, img3, img4]}
        colors={["#d1ad6f", "#000000", "#dadada"]}
        sizes={["46", "48", "50"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default CerveloSoloist;
