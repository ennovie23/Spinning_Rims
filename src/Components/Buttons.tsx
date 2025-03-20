import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type ButtonProps = {
  text?: string;
  size?: "small" | "medium" | "large";
  navigateTo?: string;
};

// Default: Browse button
function Buttons({ text = "BROWSE", size = "medium", navigateTo }: ButtonProps) {
  // Define size variations
  const sizes = {
    small: { height: 34, width: 57, fontSize: 12 },  // For view button
    medium: { height: 34, width: 110, fontSize: 12 }, // For browse button
    large: { height: 40, width: 133, fontSize: 16 }, // For shop now
  } as const; 

  const { height, width, fontSize } = sizes[size] ?? sizes.medium;
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Button
        variant="contained"
        sx={{
          height,
          width,
          backgroundColor: "#292929",
          borderRadius: "4px",
          "&:hover": { backgroundColor: "#3d3d3d" },
        }}
        onClick={() => navigateTo && navigate(navigateTo)}
      >
        <Typography
          sx={{
            color: "white",
            fontSize,
            fontFamily: '"Inter", sans-serif',
            fontWeight: 400, // Use numeric values for consistency
          }}
        >
          {text}
        </Typography>
      </Button>
    </Box>
  );
}

export default Buttons;
