import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link, Outlet } from "react-router-dom";
// import { useGlobalContext } from "../utils/globalStateContext";

function NavBar() {
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

    // const { store, dispatch } = useGlobalContext();

    // const navigate = useNavigate();

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
                        to="/drinks/base"
                        style={{ textDecoration: "none" }}
                    >
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
                                className="hover-menu"
                                style={{ color: "black" }}
                            >
                                Base
                            </div>
                        </Button>
                    </Link>
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
                                            className="hover-menu"
                                            style={{ color: "black" }}
                                        >
                                            {item.title}
                                        </div>
                                    </Button>
                                </Link>
                            </div>
                        );
                    })}
                    <Link
                        to="/drinks/name"
                        style={{ textDecoration: "none" }}
                    >
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
                                className="hover-menu"
                                style={{ color: "black" }}
                            >
                                Search By Name
                            </div>
                        </Button>
                    </Link>
                </Box>
            </Toolbar>
            <Outlet />
        </AppBar>
    );
}

export default NavBar;
