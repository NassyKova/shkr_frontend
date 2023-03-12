import Title from "../styled/Title";
import { MainWrapper, RebrandWrapper } from "./AdminOptions.styles";
import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import SearchBarAdmin from "../SearchBy/SearchByNameAdmin";

// This is the AdminOptions component
const AdminOptions = () => {
    // This component returns a div containing the Manage cocktails title,
    // a wrapper for the main content and a wrapper for the rebrand content.
    return (
        <div>
            <Title>Manage cocktails</Title>
            <MainWrapper>
                <RebrandWrapper>
                    {/* This link leads to the deleted cocktails page */}
                    <Link to="/deleted" style={{ textDecoration: "none" }}>
                        <Button
                            className="menu"
                            style={{
                                backgroundColor: "#d585b2",
                                color: "black",
                                textTransform: "none",
                            }}
                            variant="outlined"
                        >
                            {" "}
                            See all deleted cocktails
                        </Button>
                        {/* // This sets the class name for the button */}
                    </Link>
                </RebrandWrapper>
                {/* This is the search bar for the AdminOptions page */}
                <SearchBarAdmin />
            </MainWrapper>
        </div>
    );
};

export default AdminOptions;
