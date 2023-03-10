import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Product from "../Product";
import SpinnerBlue from "../Spinner";
import Box from "@mui/material/Box";

// define a functional component for the search bar
function SearchBar() {
    // define states for the input and the data received from the API
    const [drinkName, setDrinkName] = useState("");
    // define a function to handle input changes
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        // convert input text to lowercase
        setDrinkName(lowerCase);
    };

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // define a function to handle search button click
    function onClickSearchByName() {
        // send a GET request to the API with the search query
        axios
            .get(`/drinks/name/${drinkName}`)
            .then((res) => res.data)
            .then((json) => {
                // map the returned data and set it as the new state
                const newItems = json.drinks.map((product) => {
                    return product;
                });
                console.log(newItems);
                setData(newItems.slice(0, 5));
                setIsLoading(false);
            });
    }
    // return the UI for the search bar component
    return (
        <div
            style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                flexDirection: "column",
                rowGap: "20px",
                borderRadius: "10px",
            }}
        >
            <div style={{ width: "30%" }}>
                {/* input field to enter the search query */}
                <TextField
                    style={{
                        backgroundColor: "white",
                        color: "#00a18e",
                        borderRadius: "15px",
                    }}
                    id="outlined-basic"
                    onChange={inputHandler}
                    variant="outlined"
                    fullWidth
                    label="Search"
                />
                {/* search button */}
                <button
                    className="menu"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#37a01b",
                        borderRadius: "15px",
                        height: "50px",
                        width: "100px",
                        margin: "20px",
                        cursor: "pointer",
                    }}
                    onClick={onClickSearchByName}
                >
                    Search
                </button>
            </div>
            <div>
                {/* display the products returned by the API */}
                {data.map((item) => {
                    return (
                        <>
                            {/* if data is still loading, show a spinner */}
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
                                // otherwise, show the product component
                                <Product
                                    key={"product-base-" + item.strDrink}
                                    productInfo={item}
                                />
                            )}
                        </>
                    );
                })}
            </div>
        </div>
    );
}

export default SearchBar;
