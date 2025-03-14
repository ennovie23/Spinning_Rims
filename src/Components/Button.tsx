import { Box, Typography } from "@mui/material";

type BrowseButtonProps = {
  text?: string;
  size?: "small" | "medium" | "large";
};
//  default : browse button
function BrowseButton({ text = "BROWSE", size = "medium" }: BrowseButtonProps) {
  // Define size variations
  const sizes = {
    small: { height: 34, width: 57, fontSize: 12 }, // for view button
    medium: { height: 34, width: 98, fontSize: 12 }, // for browse button
    large: { height: 40, width: 133, fontSize: 16 }, // for shop now
  } as const; // Ensures TypeScript treats it as a fixed object

  const { height, width, fontSize } = sizes[size] || sizes.medium;

  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height,
          width,
          backgroundColor: "#292929",
          cursor: "pointer",
          borderRadius: "4px",
          "&:hover": { backgroundColor: "#3d3d3d" },
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize,
            fontFamily: '"Inter", sans-serif',
            fontWeight: "regular",
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}

export default BrowseButton;
