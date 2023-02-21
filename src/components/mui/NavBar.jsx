import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from "@mui/material/Container";
// import Avatar from '@mui/material/Avatar';
import Button from "@mui/material/Button";
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

const pages = ["Base", "Fruity", "Heavy", "Fizzy", "No Alc", "Search by name"];

function NavBar() {
    return (
        <AppBar position="static" style={{ background: '#252c27' }}>
            <Container maxWidth="xl" ></Container>
            <Toolbar disableGutters >
                <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }} >
                    {pages.map((page) => (
                        <Button style={{ background: '#43d9f0', margin: "5px" }}
                            key={page}
                            // onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: "black", display: "block" }}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
