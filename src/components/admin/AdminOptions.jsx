import Title from "../styled/Title";
import { MainWrapper, RebrandWrapper } from "./AdminOptions.styles";
import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import SearchBarAdmin from "../SearchBy/SearchByNameAdmin";

const AdminOptions = () => {
    return (
        <div>
            <Title>Manage cocktails</Title>
            <MainWrapper>
                {/* <RebrandWrapper>
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
                </RebrandWrapper> */}
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
                            See all deleted cocktails
                        </Button>
                    </Link>
                </RebrandWrapper>
                <SearchBarAdmin />
            </MainWrapper>
        </div>
    );
};

export default AdminOptions;
