import { Wrapper, Img, Title, Ingridients, Grid } from "./Product.Styles";
import axios from "axios";
import { React, useState } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function ProductAdmin(props) {
    const [cocktail, setCocktail] = useState(true);
    const item = props.productInfo;
    const navigate = useNavigate();

    function AddToForbidden() {
        setCocktail(item.strDrink);
        axios
            .post("/products/forbidden/add", { drink: cocktail })
            .then((res) => {
                console.log("Succesfully removed");
            });
        navigate("/deleted");
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
                <div>{item.strInstructions}</div>
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
