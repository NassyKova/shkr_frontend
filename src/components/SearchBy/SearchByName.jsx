import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Product from "../Product";
function SearchBar() {
    const [drinkName, setDrinkName] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setDrinkName(lowerCase);
    };

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
                <button
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#37a01b",
                        borderRadius: "15px",
                        height: "50px",
                        width: "100px",
                        margin: "20px",
                        cursor: "pointer"
                    }}
                    onClick={onClickSearchByName}
                >
                    Search
                </button>
            </div>
            <div>
                    {data.map((item) => {
                        return (
                            <Product
                                key={"product-base-" + item.strDrink}
                                productInfo={item}
                                // setItem={props.setItem}
                            />
                        );
                    })}
                </div>
        </div>
    );
}

export default SearchBar;
