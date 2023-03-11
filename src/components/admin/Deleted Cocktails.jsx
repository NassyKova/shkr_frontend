import Title from "../styled/Title";
// import { Wrapper } from "./AdminOptions.styles";
import { React, useEffect, useState } from "react";
import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";
// import { Link } from "react-router-dom";
import axios from "axios";
import SpinnerBlue from "../Spinner";
import Box from "@mui/material/Box";
import styled from "styled-components";


const InputWrapper = styled.div`
    display: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 800px) {
        width: auto;
`;

const ForbiddenCocktails = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [forbiddenCocktailsData, setForbiddenCocktailsData] = useState([]);
    useEffect(() => {
        axios
            .get("products/forbidden/all")
            .then((res) => {
                // console.log(res);
                setForbiddenCocktailsData(res.data);
                // console.log(forbiddenCocktailsData);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, []);

    function DeleteFromForbiddenCocktails() {
        axios
            .patch("/products/forbidden/remove")
            .then((res) => {
                console.log("Cocktail is back in the database");
                console.log(res);
                // forbiddenCocktailsData.indexOf(name??)
                // setForbiddenCocktailsData([])
            })
            .catch((error) => {
                console.log(error.message);
            });
    }
    return (
        <div>
            <Title>Forbidden cocktails:</Title>
            <InputWrapper>
            {forbiddenCocktailsData.map((item, key) => {
                return (
                    <>
                        {isLoading ? (
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100vh",
                                }}
                            >
                                <SpinnerBlue />
                            </Box>
                        ) : (
                            
                            <h1 key={"forbidden-" + item}>{item}</h1>
                        )}
                        <Button
                        key={"button-" + item}
                            className="menu"
                            onClick={DeleteFromForbiddenCocktails}
                            style={{
                                color: "black",
                                textTransform: "none",
                                backgroundColor: "#d585b2",
                            }}
                            variant="outlined"
                        >
                            Remove from the removed cocktails
                        </Button>
                    </>
                );
            })}
</InputWrapper>
        </div>
    );
};

export default ForbiddenCocktails;
