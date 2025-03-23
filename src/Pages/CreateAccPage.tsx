import { Box, TextField, Typography } from "@mui/material";
import Header from "../Components/Header";
import Buttons from "../Components/Buttons";
import Footer from "../Components/Footer";

export default function CreateAccPage() {
  return (
    <Box>
      <Header />
      <Box
        sx={{
          width: "45%",

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "auto",
          marginTop: 20,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: 40,
              fontFamily: '"Afacad", sans-serif',
              fontWeight: "bold",
            }}
          >
            CREATE AN ACCOUNT
          </Typography>

          <Typography
            sx={{
              fontSize: 16,
              fontFamily: '"Afacad", sans-serif',
              // width: 300
            }}
          >
            Register now to enjoy a personalized shopping experience at Spinning
            Rims. By creating an account, you can:
            <ul>
              <li>Save and track your orders effortlessly.</li>
              <li>Get exclusive access to special deals and promotions.</li>
              <li>Easily manage your favorite bikes and accessories.</li>
            </ul>
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              width: "50%",
            }}
          >
            <Typography sx={{ marginTop: 3 }}>FIRST NAME</Typography>
            <TextField
              type="text"
              sx={{
                width: 250,
                height: 30,
              }}
              InputProps={{ sx: { height: 40 } }}
            />

            <Typography sx={{ marginTop: 3 }}>EMAIL</Typography>
            <TextField
              type="email"
              sx={{
                width: 250,
                height: 30,
              }}
              InputProps={{ sx: { height: 40 } }}
            />

            <Typography sx={{ marginTop: 3 }}>PASSWORD</Typography>
            <TextField
              type="password"
              sx={{
                width: 250,
                height: 30,
              }}
              InputProps={{ sx: { height: 40 } }}
            />
          </Box>

          <Box
            sx={{
              width: "50%",
            }}
          >
            <Typography sx={{ marginTop: 3 }}>LAST NAME</Typography>
            <TextField
              type="text"
              sx={{
                width: 250,
                height: 30,
              }}
              InputProps={{ sx: { height: 40 } }}
            />

            <Typography sx={{ marginTop: 3 }}>PHONE</Typography>
            <TextField
              type="tel"
              sx={{
                width: 250,
                height: 30,
              }}
              InputProps={{ sx: { height: 40 } }}
            />

            <Typography sx={{ marginTop: 3 }}>CONFIRM PASSWORD</Typography>
            <TextField
              type="password"
              sx={{
                width: 250,
                height: 30,
              }}
              InputProps={{ sx: { height: 40 } }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            marginTop: 5,
          }}
        >
          <Buttons text="CREATE" navigateTo="/Home" />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
