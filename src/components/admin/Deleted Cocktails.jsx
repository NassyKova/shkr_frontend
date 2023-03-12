import Title from "../styled/Title";
import { React, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import SpinnerBlue from "../Spinner";
import Box from "@mui/material/Box";
import styled from "styled-components";
import SearchAndDelete from "../SearchBy/SearchAndDelete";

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
        console.log("use effect working!!!");
        axios
            .get("products/forbidden/all")
            .then((res) => {
                // Log the response object to the console
                console.log("all forbidden received from back end");
                console.log(res.data);

                // const filteredResponse = res.data.filter((i) => typeof i === "string")

                // console.log("Filtered response: " + filteredResponse)
                // console.log(typeof filteredResponse)
                // Update the state variable with the fetched data
                setForbiddenCocktailsData(res.data);
                console.log("set forbidden cocktails data to ");
                console.log(forbiddenCocktailsData);

                // Update the isLoading state variable to false
                setIsLoading(false);
            })
            .catch((error) => {
                // Log any errors to the console
                console.log(error.message);
            });
    }, []);

    function DeleteFromForbiddenCocktails(drink) {
        axios
            .patch("/products/forbidden/remove", { drink: drink })
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
            <SearchAndDelete />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "20px",
                }}
            >
                <Button
                    className="menu"
                    onClick={DeleteFromForbiddenCocktails}
                    style={{
                        color: "black",
                        textTransform: "none",
                        backgroundColor: "#d585b2",
                        borderRadius: "10px",
                        marginBottom: "20px",
                    }}
                    variant="outlined"
                >
                    Remove from the removed cocktails
                </Button>
            </div>
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
                    </InputWrapper>
                );
            })}
        </div>
    );
};

export default ForbiddenCocktails;
