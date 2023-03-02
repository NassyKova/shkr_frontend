import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";


function NavBar() {
    const { itemId } = useParams();
    const navBarItems = [
        {
            title: "Fruity",
            id: "fruity",
        },
        {
            title: "Heavy",
            id: "heavy",
        },
        {
            title: "Fizzy",
            id: "fizzy",
        },
        {
            title: "No Alc",
            id: "noAlc",
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
                    <Link
                        to="/finder/searchbybase"
                        style={{ textDecoration: "none" }}
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
                            <div class="hover-item" style={{ color: "black" }}>
                                Base
                            </div>
                        </Button>
                    </Link>
                    {navBarItems.map((item) => {
                        return (
                            <>
                                <Link
                                    to={`${item.id}`}
                                    style={{ textDecoration: "none" }}
                                >
                                    {" "}
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
                                            <div
                                                class="hover-item"
                                                style={{ color: "black" }}
                                            >
                                                {item.title}
                                            </div>
                                        </Button>
                                    </a>
                                </Link>
                            </>
                        );
                    })}
                    <Link
                        to="/finder/searchbyname"
                        style={{ textDecoration: "none" }}
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
                            <div class="hover-item" style={{ color: "black" }}>
                                Search By Name
                            </div>
                        </Button>
                    </Link>
                </Box>
            </Toolbar>
            <Outlet/>
        </AppBar>
    );
}

export default NavBar;
