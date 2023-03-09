import Title from "../styled/Title";
import { Wrapper } from "./AdminOptions.styles";
import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

const AdminOptions = () => {
    return (
        <div>
            <Title>What would you like to do?</Title>
            <Wrapper>
                <Stack direction="row" spacing={2}>
                <Link to="/cocktail" style={{ textDecoration: "none" }}><Button
                        style={{
                            backgroundColor: "white",
                            color: "black",
                            textTransform: "none",
                        }}
                        variant="outlined"

                    >
                        {" "}
                        Update or delete cockail
                    </Button>
                    </Link>
                    <Button 
                        style={{
                            backgroundColor: "white",
                            color: "black",
                            textTransform: "none",
                        }}
                        variant="outlined"
                        href="#outlined-buttons"
                    >
                        Update or replace ingridient
                    </Button>
                </Stack>
            </Wrapper>
        </div>
    );
};

export default AdminOptions;
