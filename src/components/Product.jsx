import { Wrapper, Img,Title, Ingridients } from "./Product.Styles";
import React from "react";


function Product(props) {
    const item = props.productInfo
    return (
        <Wrapper>
            <Img>
                <img src={item.image} alt="drink"></img>
            </Img>
            <Title>{item.title}</Title>
            <Ingridients>{item.ingridients}</Ingridients>
            <div>{item.receipt}</div>
        </Wrapper>
    );
}

export default Product;
