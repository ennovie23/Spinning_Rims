
import { Box, Typography } from "@mui/material";

function Message() {
    const name = 'nobi';
        
            if (name){
                return (
                    <Box sx={{ backgroundColor: 'lightblue', height: '300px',
                        textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            // top: '50%',
                    }}>
                        <Typography variant="h4" sx={{
                            
                        }}>
                            Hello, {name}!
                        </Typography>
                    </Box>
                )
            }

    
}

export default Message;
