import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Title from "./styled/Title";

const InputWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 2 fr;
    width: 400px;
`;

function AddProduct() {
    const [product, setProduct] = useState({
        title: "",
        ingridientOne: "",
        ingridientTwo: "",
        ingridientThree: "",
        ingridientFour: "",
        ingridientFive: "",
        ingridientSix: "",
        recipe: "",
    });

    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted");
        console.log(product);

        // Do some validation
        if (!product.title) {
            setErrorMessage("Product must have a title");
        } else if (!product.ingridientOne) {
            setErrorMessage("Product must have at least one ingridient");
        } else if (!product.recipe) {
            setErrorMessage("Product must have a recipe");
        } else {
            setErrorMessage(null);
            //CHANGE WITH INFRO FROM API@!!!!!!!!!!!!!!!
            axios
                .post("/products", product)
                .then((res) => res.data)
                .then((json) => console.log(json));
        }
    };
    
    const handleOnChange = (event) => {
        // console.log(event.target.name);
        // console.log(event.target.value);
        setProduct((prevProduct) => {
            return {
                ...prevProduct,
                [event.target.name]: event.target.balue,
            };
        });
    };

    return (
        <div id="addProduct">
            <Title>Add Product</Title>
            <form
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
                onSubmit={handleSubmit}
            >
                <InputWrapper>
                    <label htmlFor="title">Title: </label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter the Title"
                        value={product.title}
                        onChange={handleOnChange}
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="ingridient">Ingridient One: </label>
                    <input
                        type="text"
                        name="ingridientOne"
                        value={product.ingridientOne}
                        onChange={handleOnChange}
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="ingridient">Ingridient Two: </label>
                    <input
                        type="text"
                        name="ingridientTwo"
                        value={product.ingridientTwo}
                        onChange={handleOnChange}
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="ingridient">Ingridient Three: </label>
                    <input
                        type="text"
                        name="Ingridient Three"
                        value={product.ingridientThree}
                        onChange={handleOnChange}
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="ingridient">Ingridient Four: </label>
                    <input
                        type="text"
                        name="Ingridient Four"
                        value={product.ingridientFour}
                        onChange={handleOnChange}
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="ingridient">Ingridient Five: </label>
                    <input
                        type="text"
                        name="Ingridient Five"
                        value={product.ingridientFive}
                        onChange={handleOnChange}
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="ingridient">Ingridient Six: </label>
                    <input
                        type="text"
                        name="Ingridient Six"
                        value={product.ingridientSix}
                        onChange={handleOnChange}
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="image">Image: </label>
                    <input
                        type="file"
                        name="image"
                        accept=".png, .jpg, .jpeg"
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="recipe">Recipe: </label>
                    <input
                        type="text"
                        name="Recipe"
                        value={product.recipe}
                        onChange={handleOnChange}
                    />
                </InputWrapper>
                <div>
                    <input
                        style={{
                            backgroundColor: "green",
                            borderRadius: "5px",
                            width: "200px",
                            height: "30px",
                            margin: "10px",
                            cursor: "pointer",
                        }}
                        type="submit"
                        value="Add Recipe"
                    />
                </div>
                <div>{errorMessage}</div>
            </form>
        </div>
    );
}

export default AddProduct;
