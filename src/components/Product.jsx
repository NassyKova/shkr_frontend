import { Wrapper, Img,Title, Ingridients,  Grid} from "./Product.Styles";
import React from "react";


function Product(props) {
    const item = props.productInfo
    return (
        <Grid>
        <Wrapper style={{cursor:'pointer'}} onClick={() => {
            props.setItem(item)
        }}>
            <Img>
                <img src={item.strDrinkThumb} style={{ width: 300, height: 300 }} alt="drink"></img>
            </Img>
            <Title>{item.strDrink}</Title>
            <Ingridients>{item.strIngredient1}{", "}{item.strIngredient2}{", "}{item.strIngredient3}{", "}{item.strIngredient4}{", "}{item.strIngredient5}</Ingridients>
            <div>{item.strInstructions}</div>
        </Wrapper>
        </Grid>
    );
}

export default Product;
