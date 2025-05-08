import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb1 from "../Components/Images/bike/ScottScale925mg0.png";
import Trek7img1 from "../Components/Images/bike/ScottScale925mg1.png";
import Trek7img2 from "../Components/Images/bike/ScottScale925mg2.png";
import Trek7img3 from "../Components/Images/bike/ScottScale925mg3.png";
import Trek7img4 from "../Components/Images/bike/ScottScale925mg4.png";

function ScottScale925() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "Scale Carbon HMF Adjustable head angle / Syncros Cable Integration System" },
        { name: "Fork", value: "FOX 32 Float Rhythm Grip 3-Modes / 15x110mm QR axle / 44mm offset / tapered steerer Reb. Adj. / Lockout / 100mm travel" },
      ],
    },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "Formula CL-811 / 15x110mm" },
        { name: "Hub Rear", value: "Formula CL-148M / 12x148mm / Micro Spline" },
        { name: "Rims", value: "Syncros X-30SE / 32H / 30mm Tubeless ready" },
        { name: "Spokes", value: "Stainless Black 15G / 1.8mm" },
        { name: "Tire", value: "Schwalbe Racing Ralph / TLE Tubeless" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "Shimano Deore SL-M6100-R / Rapidfire Plus" },
        { name: "Rear Derailleur", value: "Shimano XT RD-M8100 SGS Shadow Plus / 12 Speed" },
        { name: "Crank", value: "Shimano SLX FC-M7120-1 / Hollowtech 2 55mm CL / 32T" },
        { name: "Bottom Bracket", value: "Shimano BB-MT500 / shell 41x92mm" },
        { name: "Cassette", value: "Shimano Deore CS-M6100-12 / 10-51 T" },
        { name: "Chain", value: "Shimano CN-M6100" },
        { name: "Pedal", value: "Favero Assioma PRO MX-1" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Syncros Belcarra Regular 2.0 CrMo rails" },
        { name: "Seat Post", value: "Syncros Duncan 2.0 31.6x400mm" },
        { name: "Brake Set", value: "Shimano MT501 Disc Brake" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Scott Scale 925"
        price="₱245,000"
        description="The Scott Scale 925 is a high-performance carbon hardtail mountain bike built for speed and efficiency on cross-country trails. Featuring a lightweight HMF Carbon frame, a RockShox SID RL fork with 100mm travel, and a Shimano XT/SLX 12-speed drivetrain, it delivers precise handling and reliable power transfer."
        images={[mtb1, Trek7img1, Trek7img2, Trek7img3, Trek7img4]}
        colors={["#1e340d", "#303030", "#80878f"]}
        sizes={["26", "27.5", "29"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default ScottScale925;
