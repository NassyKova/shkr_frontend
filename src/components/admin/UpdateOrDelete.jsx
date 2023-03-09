import Title from "../styled/Title";
import { Wrapper } from "./AdminOptions.styles";
import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";


const UpdateOrDelete = () => {
    return (
        <div>
            <Title>Update or delete cocktail</Title>
            <Wrapper>
                <Stack direction="row" spacing={2}>
                    <Link><Button
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
                <Button style={{ backgroundColor: "green" }}>Update</Button>
                <Button onCLick="deleteCocktail" style={{ backgroundColor: "red" }}>Delete</Button>
            </Wrapper>
        </div>
    );
};

export default UpdateOrDelete;
