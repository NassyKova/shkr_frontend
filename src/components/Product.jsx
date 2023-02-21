import { Wrapper, Img,Title, Ingridients, Grid } from "./Product.Styles";
import React from "react";


function Product(props) {
    const item = props.productInfo
    return (
        <Grid>
        <Wrapper>
            <Img>
                <img src={item.image} alt="drink"></img>
            </Img>
            <Title>{item.title}</Title>
            <Ingridients>{item.ingridients}</Ingridients>
            <div>{item.receipt}</div>
        </Wrapper>
        </Grid>
    );
}

export default Product;
