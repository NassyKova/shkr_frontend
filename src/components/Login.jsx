// import * as React from "react";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

// const theme = createTheme();

// export default function SignIn() {
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const data = new FormData(event.currentTarget);
//         console.log({
//             email: data.get("email"),
//             password: data.get("password"),
//         });
//     };

//     return (
//         <ThemeProvider theme={theme}>
//             <Container component="main" maxWidth="xs">
//                 <CssBaseline />
//                 <Box
//                     sx={{
//                         marginTop: 8,
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "center",
//                     }}
//                 >
//                     <Typography
//                         style={{ color: "white" }}
//                         component="h1"
//                         variant="h5"
//                     >
//                         Admin login
//                     </Typography>
//                     <Box
//                         component="form"
//                         onSubmit={handleSubmit}
//                         noValidate
//                         sx={{ mt: 1 }}
//                     >
//                         <TextField
//                             margin="normal"
//                             required
//                             fullWidth
//                             id="email"
//                             label="Email Address"
//                             name="email"
//                             autoComplete="email"
//                             autoFocus
//                         />
//                         <TextField
//                             margin="normal"
//                             required
//                             fullWidth
//                             name="password"
//                             label="Password"
//                             type="password"
//                             id="password"
//                             autoComplete="current-password"
//                         />
//                         <FormControlLabel
//                             control={
//                                 <Checkbox value="remember" color="primary" />
//                             }
//                             label="Remember me"
//                         />
//                         <Button
//                             type="submit"
//                             fullWidth
//                             variant="contained"
//                             sx={{ mt: 3, mb: 2 }}
//                             style={{ backgroundColor: "#37a01b" }}
//                         >
//                             Sign In
//                         </Button>
//                         {/* <Grid container> */}
//                         {/* <Grid item xs> */}
//                         {/* <Link href="#" variant="body2">
//                                     Forgot password?
//                                 </Link> */}
//                         {/* </Grid>
//                             <Grid item> */}
//                         {/* <Link href="#" variant="body2">
//                                     {"Don't have an account? Sign Up"}
//                                 </Link> */}
//                         {/* </Grid> */}
//                         {/* </Grid> */}
//                     </Box>
//                 </Box>
//             </Container>
//         </ThemeProvider>
//     );
// }




import { useState } from "react"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';
import { useNavigate } from "react-router-dom";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useGlobalContext } from "./utils/globalStateContext"



function Login() {

    const { store, dispatch } = useGlobalContext()

    const initialUserState = {
        username: "",
        password: "",
    }
    const [user, setUser] = useState(initialUserState)


    const navigate = useNavigate();

    const handleFormChange = (e) => {

        setUser((prevUser) => {
            return {
                ...prevUser,
                [e.target.name]: e.target.value,
            }
        })
    }



    const handleFormSubmit = (e) => {
        e.preventDefault();

        dispatch({
            type: 'setUserName',
            data: e.target.username.value
        })
        dispatch({
            type: 'setToken',
            data: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
        })

        setUser(initialUserState)

        navigate("/")

    };


    const handleFormClose = () => {
        setUser(initialUserState)
        navigate("/");
    }


    return (


        <Container component="main" maxWidth="xs">
            <CssBaseline />

            <Box display="block" sx={{ marginTop: 12 }}>

            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >

                <Typography component="h1" variant="h5" sx={{ p: 2 }} >
                    Login
                </Typography>
                <ValidatorForm component="form" noValidate onSubmit={handleFormSubmit} >
                    <Grid container spacing={2}>
                        <Grid item xs={12} >
                            <TextValidator
                                name="username"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                value={user.username}
                                autoFocus
                                onChange={handleFormChange}
                                validators={['required']}
                                errorMessages={['This field is required']}

                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextValidator
                                required
                                fullWidth
                                id="password"
                                label="Password"
                                name="password"
                                type="password"
                                value={user.password}
                                onChange={handleFormChange}
                                validators={['required']}
                                errorMessages={['This field is required']}

                            />
                        </Grid>




                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, backgroundColor: "#37a01b" }}
                    >
                        Login
                    </Button>

                </ValidatorForm>
            </Box>

        </Container>

    )


}

export default Login