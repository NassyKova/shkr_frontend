import Title from "../styled/Title";
import { React, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import SpinnerBlue from "../Spinner";
import Box from "@mui/material/Box";
import styled from "styled-components";

const InputWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    justify-items: center;
    margin-bottom: 20px;
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
            <Title>Removed cocktails:</Title><br/><br/>

                {forbiddenCocktailsData.map((item, key) => {
                    return (
                        <InputWrapper>
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
                        </InputWrapper>
                    );
                })}

        </div>
    );
};

export default ForbiddenCocktails;
