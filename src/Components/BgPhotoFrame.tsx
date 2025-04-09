import { Box } from "@mui/material";

interface BgPhotoFrameProps {
  image: string;
}

export default function BgPhotoFrame({ image }: BgPhotoFrameProps) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",  // Changed from "contain" to "cover"
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    />
  );
}
