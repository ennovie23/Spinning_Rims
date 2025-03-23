import { Box, Typography } from "@mui/material";
import Button from "./Buttons";

type BikeDisplayBoxProps = {
  name?: string;
  price?: string;
  image?: string;
  navigateTo?: string;
};

const BikeItemDisplayTemplate = ({
  name,
  price,
  image,
  navigateTo
}: BikeDisplayBoxProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: 250,
        height: 319,
        backgroundColor: "white",
        padding: 2.5,
        paddingBottom: 3,
        borderRadius: 2,

        transition: "box-shadow 0.3s ease-in-out", // Smooth transition
        "&:hover": {
          boxShadow: "0px 5px 20px  rgba(0, 0, 0, 0.3)", // Shadow effect
        },
      }}
    >
      <img src={image} alt={name} style={{ width: 209, height: 209 }} />

      <Typography
        sx={{
          fontFamily: '"Alexandria", sans-serif',
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        {name}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            position: "absolute",
            top: 277,
            fontFamily: '"Alexandria", sans-serif',
            fontSize: 16,
          }}
        >
          {price}
        </Typography>

        <Box
          sx={{
            position: "absolute",
            display: "flex",
            left: 173,
            top: 267,
          }}
        >
          <Button text="View" size="small" navigateTo={navigateTo}/>
        </Box>
      </Box>
    </Box>
  );
};

export default BikeItemDisplayTemplate;
