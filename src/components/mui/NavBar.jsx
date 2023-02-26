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

function NavBar() {
    const navBarItems = [
        {
            title: "Base",
            id: "#base",
        },
        {
            title: "Fruity",
            id: "#fruity",
        },
        {
            title: "Heavy",
            id: "#heavy",
        },
        {
            title: "Fizzy",
            id: "#fizzy",
        },
        {
            title: "No Alc",
            id: "#noAlc",
        },
        {
            title: "Search By Name",
            id: "#searchByName",
        },
        {
            title: "Add Product",
            id: "#addProduct",
        },
    ];
    return (
        <AppBar position="static" style={{ background: "#252c27" }}>
            <Container maxWidth="xl"></Container>
            <Toolbar disableGutters>
                <Box
                    sx={{
                        flexGrow: 1,
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    {navBarItems.map((item) => {
                        return (
                            <a
                                key={item.title}
                                style={{
                                    textDecoration: "none",
                                }}
                                href={item.id}
                            >
                                <Button
                                    style={{
                                        background: "#43d9f0",
                                        margin: "5px",
                                    }}
                                    sx={{
                                        my: 2,
                                        color: "black",
                                        display: "block",
                                    }}
                                >
                                    {item.title}
                                </Button>
                            </a>
                        );
                    })}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
