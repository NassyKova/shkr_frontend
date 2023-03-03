import Title from "../styled/Title";
import { Wrapper } from "./AdminOptions.styles";
import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const AdminOptions = () => {
    return (
        <div>
            <Title>What would you like to do?</Title>
            <Wrapper>
                <Stack direction="row" spacing={2}>
                    <Button
                        style={{
                            backgroundColor: "white",
                            color: "black",
                            textTransform: "none",
                        }}
                        variant="outlined"
                        href="#outlined-buttons"
                    >
                        {" "}
                        Update or delete cockail
                    </Button>
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
