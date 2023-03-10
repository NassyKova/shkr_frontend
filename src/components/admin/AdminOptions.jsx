import Title from "../styled/Title";
import { Wrapper, MainWrapper, RebrandWrapper } from "./AdminOptions.styles";
import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBy/SearchByName";


const AdminOptions = () => {
    function deleteCocktail() {
        return(
            <div> ???</div>
        );
    }
    return (
        <div>
            <Title>What would you like to do?</Title>
            <MainWrapper>
                <RebrandWrapper>
                    <Link to="/ingr" style={{ textDecoration: "none" }}>
                        <Button
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

                <SearchBar />
                <Wrapper>
                    <Link to="/deleted" style={{ textDecoration: "none" }}>
                        <Button
                            onClick={deleteCocktail}
                            style={{
                                backgroundColor: "#d585b2",
                                color: "black",
                                textTransform: "none",
                            }}
                        >
                            Delete cocktail
                        </Button>
                    </Link>
                </Wrapper>
            </MainWrapper>
        </div>
    );
};

export default AdminOptions;
