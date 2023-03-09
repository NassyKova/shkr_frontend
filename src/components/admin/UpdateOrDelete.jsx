import Title from "../styled/Title";
import { Wrapper } from "./AdminOptions.styles";
import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBy/SearchByName";


const UpdateOrDelete = () => {
    function deleteCocktail() {
        return;
    }
    return (
        <div>
            <Title>Update or delete cocktail</Title>
            <SearchBar />
            <Wrapper>
                <Stack direction="row" spacing={2}>
                    <Link to="/update" style={{ textDecoration: "none" }}>
                        <Button
                            style={{
                                backgroundColor: "#37a01b",
                                color: "black",
                                textTransform: "none",
                            }}
                            variant="outlined"
                        >
                            Update
                        </Button>
                    </Link>
                    <Button
                        onClick={deleteCocktail}
                        style={{
                            backgroundColor: "#d585b2",
                            color: "black",
                            textTransform: "none",
                        }}
                    >
                        Delete
                    </Button>
                </Stack>
            </Wrapper>
        </div>
    );
};

export default UpdateOrDelete;
