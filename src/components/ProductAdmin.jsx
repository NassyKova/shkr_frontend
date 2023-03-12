import { Wrapper, Img, Title, Ingridients, Grid } from "./Product.Styles";
import axios from "axios";
import { React, useState } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

// This is a React component called "ProductAdmin"
function ProductAdmin(props) {
    // Define a state variable "cocktail" using useState() hook
    const [cocktail, setCocktail] = useState(true);

    // Retrieve "productInfo" from props
    const item = props.productInfo;

    // Access the navigation object from React Router using useNavigate() hook
    const navigate = useNavigate();

    // Define a function to add the current cocktail to the forbidden list
    function AddToForbidden() {
        // Update the "cocktail" state with the name of the current cocktail
        setCocktail(item.strDrink);

        // Send a POST request to the server to add the cocktail to the forbidden list using Axios library
        axios
            .post("/products/forbidden/add", { drink: cocktail })
            .then((res) => {
                console.log("Successfully removed");
            });

        // Navigate to the "deleted" page
        navigate("/deleted");
    }

    // Render the component
    return (
        // Render a Grid component from Material-UI library
        <Grid>
            {/* Render a Wrapper component with onClick event listener */}
            <Wrapper
                style={{ cursor: "pointer" }}
                onClick={() => {
                    // When the Wrapper component is clicked, set the "item" in props to be the current cocktail
                    props.setItem(item);
                }}
            >
                {/* Render an Img component to display the cocktail image */}
                <Img>
                    <img
                        src={item.strDrinkThumb}
                        style={{ width: 300, height: 300 }}
                        alt="drink"
                    ></img>
                </Img>

                {/* Render a Title component to display the cocktail name */}
                <Title>{item.strDrink}</Title>

                {/* Render an Ingridients component to display the cocktail ingredients */}
                <Ingridients key={"ingrindient-item-" + item.strDrink}>
                    {item.strMeasure1} {item.strIngredient1}
                    {", "}
                    {item.strMeasure2} {item.strIngredient2}
                    {", "}
                    {item.strMeasure3} {item.strIngredient3}
                    {", "}
                    {item.strMeasure4} {item.strIngredient4}
                    {", "}
                    {item.strMeasure5} {item.strIngredient5}
                </Ingridients>

                {/* Render a div component to display the cocktail instructions */}
                <div>{item.strInstructions}</div>

                {/* Render a Button component with onClick event listener to delete the current cocktail */}
                <Button
                    className="menu"
                    onClick={AddToForbidden}
                    style={{
                        backgroundColor: "#d585b2",
                        color: "black",
                        textTransform: "none",
                        margin: "5px",
                    }}
                >
                    Delete cocktail
                </Button>
            </Wrapper>
        </Grid>
    );
}

export default ProductAdmin;
