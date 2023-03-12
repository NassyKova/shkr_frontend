import { Wrapper, Img, Title, Ingridients, Grid } from "./Product.Styles";
import { React } from "react";

// Defining Product component and passing props to it
function Product(props) {
    // Setting item variable to productInfo passed in props
    const item = props.productInfo;
    // Returning a Grid containing Wrapper element with drink details
    return (
        <Grid>
            <Wrapper
                // Setting style and onClick event for the Wrapper element
                style={{ cursor: "pointer" }}
                onClick={() => {
                    props.setItem(item); // Calling setItem method from props to update the selected drink
                }}
            >
                <Img>
                    {/* {/* Displaying image of the drink with a width and height of 300px /} */}
                    <img
                        src={item.strDrinkThumb}
                        style={{ width: 300, height: 300 }}
                        alt="drink"
                    ></img>
                </Img>
                {/* {/ Displaying title of the drink /} */}
                <Title>{item.strDrink}</Title>
                {/* {/ Displaying ingredients of the drink /} */}
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
                {/* {/ Displaying instructions to make the drink */}
                <div>{item.strInstructions}</div>
            </Wrapper>
        </Grid>
    );
}

export default Product;
