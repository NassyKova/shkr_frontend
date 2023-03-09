import Title from "../styled/Title";
import { Wrapper } from "./AdminOptions.styles";
import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBy/SearchByName";

const AdminOptions = () => {
    function deleteCocktail() {
        return;
    }
    return (
        <div>
            <Title>What would you like to do?</Title>
            <SearchBar />
            <Wrapper>
                <Stack direction="row" spacing={2}>
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
                    <Link to="/deleted" style={{ textDecoration: "none" }}><Button
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
                </Stack>
            </Wrapper>
        </div>
    );
};

export default AdminOptions;
