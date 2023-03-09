import Title from "../styled/Title";
import { Wrapper } from "./AdminOptions.styles";
import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBy/SearchByName";

const DeletedCocktails = () => {
    function deleteCocktail() {
        return;
    }
    return (
        <div>
            <Title>Deleted cocktails:</Title>

            <Wrapper>
                List deleted cocktails and option to remove??
            </Wrapper>
        </div>
    );
};

export default DeletedCocktails;