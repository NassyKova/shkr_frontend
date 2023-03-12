import Title from "../styled/Title";
import { React, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import SpinnerBlue from "../Spinner";
import Box from "@mui/material/Box";
import styled from "styled-components";

// Create a styled component for the input wrapper
const InputWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    justify-items: center;
    margin-bottom: 20px;
`;

// Define a functional component called ForbiddenCocktails
const ForbiddenCocktails = () => {
    const [isLoading, setIsLoading] = useState(true);

    // Define state variables using the useState hook
    const [forbiddenCocktailsData, setForbiddenCocktailsData] = useState([]);
    // Use the useEffect hook to fetch data from an API endpoint on mount
    useEffect(() => {
        axios
            .get("products/forbidden/all")
            .then((res) => {
                // Log the response object to the console
                // console.log(res);

                // Update the state variable with the fetched data
                setForbiddenCocktailsData(res.data);

                // Log the updated state variable to the console
                // console.log(forbiddenCocktailsData);

                // Update the isLoading state variable to false
                setIsLoading(false);
            })
            .catch((error) => {
                // Log any errors to the console
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
        // Return JSX with the components and data
        <div>
            <Title>Removed cocktails:</Title>
            <br />
            <br />

            {forbiddenCocktailsData.map((item, key) => {
                return (
                    <InputWrapper>
                        {/* // Check if isLoading is true, if so render a spinner component */}
                        {isLoading ? (
                            // Add a Box component for better styling
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
                            // If not, map through the data and render it
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