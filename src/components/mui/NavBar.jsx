import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link, Outlet } from "react-router-dom";

// This function creates an array of objects representing the navigation bar items.
function NavBar() {
    // An array of objects representing each navigation bar item. Each object has a title, id, and specificUrl.
    const navBarItems = [
        {
            title: "Fruity",
            id: "fruity",
            specificUrl: "/drinks/fruity",
        },
        {
            title: "Heavy",
            id: "heavy",
            specificUrl: "/drinks/heavy",
        },
        {
            title: "Fizzy",
            id: "fizzy",
            specificUrl: "/drinks/fizzy",
        },
        {
            title: "Non Alc",
            id: "nonAlc",
            specificUrl: "/drinks/non-alc",
        },
    ];

    // This code returns a navigation bar component
    return (
        // This creates a fixed navigation bar on top of the screen with a background color
        <AppBar position="static" style={{ background: "#252c27" }}>
            {/* // This defines a container for the navigation bar with extra large size */}
            <Container maxWidth="xl"></Container>
            {/* // This removes gutters from the toolbar */}
            <Toolbar disableGutters>
                {/* // This creates a box to hold navigation bar items */}
                <Box
                    sx={{
                        flexGrow: 1,
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    {/* // This creates a button to navigate to a specific page */}
                    <Link to="/drinks/base" style={{ textDecoration: "none" }}>
                        <Button
                            style={{
                                background: "#43d9f0",
                                margin: "5px",
                                textTransform: "none",
                            }}
                            sx={{
                                my: 2,
                                color: "black",
                                display: "block",
                            }}
                        >
                            {/* // This creates a menu item with the title "Base" */}
                            <div className="menu" style={{ color: "black" }}>
                                Base
                            </div>
                        </Button>
                    </Link>
                    {/* // This loops through an array of navigation bar items to create buttons */}
                    {navBarItems.map((item) => {
                        return (
                            <div key={"navbar-item-" + item.id}>
                                <Link
                                    to={`${item.specificUrl}`}
                                    style={{ textDecoration: "none" }}
                                >
                                    {" "}
                                    <Button
                                        style={{
                                            background: "#43d9f0",
                                            margin: "5px",
                                            textTransform: "none",
                                        }}
                                        sx={{
                                            my: 2,
                                            color: "black",
                                            display: "block",
                                        }}
                                    >
                                        <div
                                            // This creates a menu item with the title of the current navigation bar item
                                            className="menu"
                                            style={{ color: "black" }}
                                        >
                                            {item.title}
                                        </div>
                                    </Button>
                                </Link>
                            </div>
                        );
                    })}
                    {/* // This creates a menu item with the title "Search By Name" */}
                    <Link to="/drinks/name" style={{ textDecoration: "none" }}>
                        <Button
                            style={{
                                background: "#43d9f0",
                                margin: "5px",
                                textTransform: "none",
                            }}
                            sx={{
                                my: 2,
                                color: "black",
                                display: "block",
                            }}
                        >
                            <div className="menu" style={{ color: "black" }}>
                                Search By Name
                            </div>
                        </Button>
                    </Link>
                </Box>
            </Toolbar>
            {/* // This component renders the current page content */}
            <Outlet />
        </AppBar>
    );
}

export default NavBar;
