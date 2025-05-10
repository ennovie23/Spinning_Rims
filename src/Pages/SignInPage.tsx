import { Box, Typography, TextField, Divider } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Buttons from "../Components/Buttons";

export default function SignInPage(){
    return (
        <Box>
            <Header/>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                marginTop:20,
                justifyContent: 'center'
            }}>
                {/* left side */}
                <Box sx={{
                    width: 300
                }}>
                    <Typography sx={{
                        fontSize: 40,
                        fontFamily: '"Afacad", sans-serif',
                        fontWeight: 'bold',
                    }}>
                        SIGN IN TO YOUR ACCOUNT
                    </Typography>

                    <Typography sx={{
                        fontSize: 16,
                        fontFamily: '"Afacad", sans-serif',
                        width: 300
                    }}>
                        Access your account to track orders, save your
                        favorite bikes, and enjoy a seamless shopping
                        experience. Simply enter your email and password
                        to get started.
                        <br/><br/>
                        EMAIL
                    </Typography>
                    
                    <TextField 
                    type="Email" 
                    sx={{
                        width: 250,
                        height: 30
                    }}
                    InputProps={{ sx: { height: 40 } }}
                    />  

<Typography sx={{
                        fontSize: 16,
                        fontFamily: '"Afacad", sans-serif',
                        marginTop: 3
                    }}>
                        PASSWORD
                    </Typography>
                    
                    <TextField 
                    type="Password" 
                    sx={{
                        width: 250,
                        height: 30
                    }}
                    InputProps={{ sx: { height: 40 } }}
                    />

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'left',
                        marginTop: 4
                    }}>
                    <Buttons text="SIGN IN" navigateTo="/Home" />
                    </Box>
                </Box>

                <Divider orientation="vertical" flexItem sx={{
                    height: 450,
                    marginLeft:5,
                    marginRight:5,
                    
                }}/>
                {/* right side */}
                <Box sx={{
                    width: 370
                }}>
                <Typography sx={{
                        fontSize: 40,
                        fontFamily: '"Afacad", sans-serif',
                        fontWeight: 'bold',
                    }}>
                        CREATE AN ACCOUNT
                    </Typography>

                    <Typography sx={{
                        fontSize: 16,
                        fontFamily: '"Afacad", sans-serif',
                        width: 300
                    }}>
                        Register now to enjoy a personalized shopping experience at Spinning Rims. By creating an account, you can:
                    
                    <ul>
                        <li>Save and track your orders effortlessly.</li>
                        <li>Get exclusive access to special deals and promotions.</li>
                        <li>Easily manage your favorite bikes and accessories.</li>
                    </ul>
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'left',
                        marginTop: 4
                    }}>
                    <Buttons text="CREATE" navigateTo="/CreateAccPage" />
                    </Box>
                </Box>
            </Box>
            <Footer/>
        </Box>
    );
}


