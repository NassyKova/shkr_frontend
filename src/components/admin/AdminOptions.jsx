import Title from "../styled/Title";
import { MainWrapper, RebrandWrapper } from "./AdminOptions.styles";
import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import SearchBarAdmin from "../SearchBy/SearchByName";

const AdminOptions = () => {
    return (
        <div>
            <Title>What would you like to do?</Title>
            <MainWrapper>
                <RebrandWrapper>
                    <Link to="/ingr" style={{ textDecoration: "none" }}>
                        <Button
                            className="menu"
                            style={{
                                backgroundColor: "white",
                                color: "black",
                                textTransform: "none",
                            }}
                            variant="outlined"
                        >
                            {" "}
                            Rebrand Spirit
                        </Button>
                    </Link>
                </RebrandWrapper>
                <RebrandWrapper>
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
                            Deleted cocktails
                        </Button>
                    </Link>
                </RebrandWrapper>
                <SearchBarAdmin />
            </MainWrapper>
        </div>
    );
};

export default AdminOptions;
