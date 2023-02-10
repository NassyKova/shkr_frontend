import { Wrapper, Img, Text } from "./Product.Styles";
import React from "react";


function Product(props) {
    const item = props.productInfo
    return (
        <Wrapper>
            <Img>
                <img src={item.image} alt="drink"></img>
            </Img>
            <Text>{item.title}</Text>
            <div>{item.ingridients}</div>
            <div>{item.receipt}</div>
        </Wrapper>
    );
}

export default Product;
