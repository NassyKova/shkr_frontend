import Title from "../styled/Title";
import { Wrapper } from "./AdminOptions.styles";
import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const InputWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 2 fr;
    width: 400px;
`;

const WrapperGeneral = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 20px 20px;
    margin: 0 auto;

    width: 50%;
    border-radius: 10px;
    transition: 0.3s;
    box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.75);
`;
const WrapperOriginalIngridients = styled.div`
    margin: 10px;
`;
const WrapperReplacedIngridients = styled.div`
    margin: 10px;
`;

const RebrandSpirit = () => {
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
        <div>
            <Title>Rebrand Spirits</Title>

            <WrapperGeneral>
                <WrapperOriginalIngridients>
                    <Title style={{ color: "#00a18e" }}>
                        Original names
                    </Title>
                    <InputWrapper>
                        <label htmlFor="ingridient">Ingridient One: </label>
                        <input
                            style={{ color: "black" }}
                            type="text"
                            name="ingridientOne"
                            value={product.ingridientOne}
                            onChange={handleOnChange}
                            placeholder="take it from the backend?? we have only 6 for replacement"
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="ingridient">Ingridient Two: </label>
                        <input
                            style={{ color: "black" }}
                            type="text"
                            name="ingridientTwo"
                            value={product.ingridientTwo}
                            onChange={handleOnChange}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="ingridient">Ingridient Three: </label>
                        <input
                            style={{ color: "black" }}
                            type="text"
                            name="Ingridient Three"
                            value={product.ingridientThree}
                            onChange={handleOnChange}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="ingridient">Ingridient Four: </label>
                        <input
                            style={{ color: "black" }}
                            type="text"
                            name="Ingridient Four"
                            value={product.ingridientFour}
                            onChange={handleOnChange}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="ingridient">Ingridient Five: </label>
                        <input
                            style={{ color: "black" }}
                            type="text"
                            name="Ingridient Five"
                            value={product.ingridientFive}
                            onChange={handleOnChange}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="ingridient">Ingridient Six: </label>
                        <input
                            style={{ color: "black" }}
                            type="text"
                            name="Ingridient Six"
                            value={product.ingridientSix}
                            onChange={handleOnChange}
                        />
                    </InputWrapper>
                </WrapperOriginalIngridients>

                <WrapperReplacedIngridients>
                    <Title style={{ color: "#d585b2" }}>Replace with</Title>
                    <InputWrapper>
                        <label htmlFor="ingridient">Ingridient One: </label>
                        <input
                            style={{ color: "black" }}
                            type="text"
                            name="ingridientOne"
                            value={product.ingridientOne}
                            onChange={handleOnChange}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="ingridient">Ingridient Two: </label>
                        <input
                            style={{ color: "black" }}
                            type="text"
                            name="ingridientTwo"
                            value={product.ingridientTwo}
                            onChange={handleOnChange}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="ingridient">Ingridient Three: </label>
                        <input
                            style={{ color: "black" }}
                            type="text"
                            name="Ingridient Three"
                            value={product.ingridientThree}
                            onChange={handleOnChange}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="ingridient">Ingridient Four: </label>
                        <input
                            style={{ color: "black" }}
                            type="text"
                            name="Ingridient Four"
                            value={product.ingridientFour}
                            onChange={handleOnChange}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="ingridient">Ingridient Five: </label>
                        <input
                            style={{ color: "black" }}
                            type="text"
                            name="Ingridient Five"
                            value={product.ingridientFive}
                            onChange={handleOnChange}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="ingridient">Ingridient Six: </label>
                        <input
                            style={{ color: "black" }}
                            type="text"
                            name="Ingridient Six"
                            value={product.ingridientSix}
                            onChange={handleOnChange}
                        />
                    </InputWrapper>
                </WrapperReplacedIngridients>
            </WrapperGeneral>
            <Wrapper>
                <Stack direction="row" spacing={2}>
                    <Link to="/update" style={{ textDecoration: "none" }}>
                        <Button
                            style={{
                                backgroundColor: "green",
                                color: "black",
                                textTransform: "none",
                            }}
                            variant="outlined"
                        >
                            {" "}
                            Save
                        </Button>
                    </Link>
                    <Link to="/admin" style={{ textDecoration: "none" }}>
                        <Button
                            style={{
                                backgroundColor: "#d585b2",
                                color: "black",
                                textTransform: "none",
                            }}
                        >
                            Cancel
                        </Button>
                    </Link>
                </Stack>
            </Wrapper>
        </div>
    );
};

export default RebrandSpirit;
