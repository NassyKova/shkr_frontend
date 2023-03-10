import Title from "../styled/Title";
import { Wrapper } from "./AdminOptions.styles";
import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

const DeletedCocktails = () => {
    function RemoveDeletedCocktail() {
        return;
    }
    return (
        <div>
            <Title>Deleted cocktails:</Title>

            <Wrapper>
                List deleted cocktails and option to remove??{" "}
                <Link style={{ textDecoration: "none", textTransform: "none" }}>
                    <Button
                        onClick={RemoveDeletedCocktail}
                        style={{
                            backgroundColor: "white",
                            color: "black",
                            textTransform: "none",
                            backgroundColor: "#d585b2",
                        }}
                        variant="outlined"
                    >
                        Remove from the removed cocktails
                    </Button>
                </Link>
            </Wrapper>
        </div>
    );
};

export default DeletedCocktails;
