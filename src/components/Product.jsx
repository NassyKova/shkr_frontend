import { Wrapper, Img, Title, Ingridients, Grid } from "./Product.Styles";
import axios from "axios";
// import { React, useState } from "react";
import { React} from "react";
import { Button } from "antd";

function Product(props) {
    // const [isLoading, setIsLoading] = useState(true);
    const item = props.productInfo;

    function handleDelete() {
        return axios
            .post("/products/forbidden/add")
            .then((res) => console.log(res))
            .then((json) => {
                const deletedItems = json.drinks.map((product) => {
                    return product;
                });
                console.log(deletedItems);
                // setIsLoading(false);
            });
    }
    return (
        <Grid>
            <Wrapper
                style={{ cursor: "pointer" }}
                onClick={() => {
                    props.setItem(item);
                }}
            >
                <Img>
                    <img
                        src={item.strDrinkThumb}
                        style={{ width: 300, height: 300 }}
                        alt="drink"
                    ></img>
                </Img>
                <Title>{item.strDrink}</Title>
                <Ingridients key={"ingrindient-item-" + item.strDrink}>
                {item.strMeasure1}{" "}{item.strIngredient1}{", "}
                {item.strMeasure2}{" "}{item.strIngredient2}
                    {", "}
                    {item.strMeasure3}{" "}{item.strIngredient3}
                    {", "}
                    {item.strMeasure4}{" "}{item.strIngredient4}
                    {", "}
                    {item.strMeasure5}{" "}{item.strIngredient5}
                </Ingridients>
                <div>{item.strInstructions}</div>
                <Button
                    onclick={handleDelete}
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

export default Product;
