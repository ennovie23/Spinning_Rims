import { Box, Typography } from "@mui/material";
import mtb2 from "../Components/Images/bike/mtb2.jpg";

const TrekMarlin7 = () => {
  return (
    <Box sx={{ padding: 5, textAlign: "center" }}>
      <Typography variant="h3">Trek Marlin 7</Typography>
      <img src={mtb2} alt="Trek Marlin 7" style={{ width: "50%", borderRadius: 10 }} />
      <Typography variant="h5" sx={{ marginTop: 2 }}>₱47,490</Typography>
      <Typography variant="body1" sx={{ marginTop: 2 }}>
        The Trek Marlin 7 is a high-performance mountain bike built for speed and durability.
      </Typography>
    </Box>
  );
};

export default TrekMarlin7;