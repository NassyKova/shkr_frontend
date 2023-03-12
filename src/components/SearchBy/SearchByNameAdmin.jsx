import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import ProductAdmin from "../ProductAdmin";
import SpinnerBlue from "../Spinner";
import Box from "@mui/material/Box";

function SearchBarAdmin() {
    // Declare state variables using useState hook.
    const [drinkName, setDrinkName] = useState("");
    // Declare function to handle input changes and update drinkName state with the input value in lower case.
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setDrinkName(lowerCase);
    };

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Declare function to handle the search by name button click. It makes a GET request to the server, retrieves data, updates the data state, and sets isLoading to false.
    function onClickSearchByName() {
        axios
            .get(`/drinks/name/${drinkName}`)
            .then((res) => res.data)
            .then((json) => {
                const newItems = json.drinks.map((product) => {
                    return product;
                });
                console.log(newItems);

                setData(newItems.slice(0, 5));
                setIsLoading(false);
            });
    }
    // Return the search bar and the results. The search bar consists of a TextField component and a button. The results are displayed using the ProductAdmin component and the SpinnerBlue component.
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
                {/* Render the TextField component with styles and the inputHandler function as onChange event handler */}
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
                {/* Render the search button with styles and the onClickSearchByName function as onClick event handler */}
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
            {/* Render the results using the ProductAdmin and SpinnerBlue components. If isLoading is true, render the SpinnerBlue component. Otherwise, render the ProductAdmin component. */}

            <div>
                {data.map((item) => {
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
                                <ProductAdmin
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

export default SearchBarAdmin;
