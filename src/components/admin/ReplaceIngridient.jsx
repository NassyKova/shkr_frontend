import Title from "../styled/Title";
import { Wrapper } from "./AdminOptions.styles";
import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

const ReplaceIngridient= () => {
    return (
        <div>
            <Title>Update or delete cocktail</Title>
            <Wrapper>
                <Stack direction="row" spacing={2}>
                    <Link to="/update" style={{ textDecoration: "none" }}>
                        <Button
                            style={{
                                backgroundColor: "green",
                                color: "black",
                                textTransform: "none",
                            }}
                            variant="outlined"
                        >
                            {" "}
                            Search
                        </Button>
                    </Link>
                </Stack>
                <Link to="/delete" style={{ textDecoration: "none" }}>
                    <Button style={{ backgroundColor: "green" }}>Update</Button>
                </Link>
                <Button
                    onCLick="deleteCocktail"
                    style={{ backgroundColor: "#d585b2" }}
                >
                    Delete
                </Button>
            </Wrapper>
        </div>
    );
};

export default ReplaceIngridient;