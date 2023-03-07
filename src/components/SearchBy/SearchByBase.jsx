import { Button, Wrapper } from "./SearchByBase.styles";
import { Link } from "react-router-dom";

const SearchByBase = () => {
    return (
        <Wrapper>
            <Link to="/drinks/base/rum" style={{ textDecoration: "none" }}>
                {" "}
                <Button>Rum</Button>
            </Link>

            <Link to="/drinks/base/vodka" style={{ textDecoration: "none" }}>
                {" "}
                <Button>Vodka</Button>
            </Link>

            <Link to="/drinks/base/bourbon" style={{ textDecoration: "none" }}>
                {" "}
                <Button>Bourbon</Button>
            </Link>

            <Link to="/drinks/base/gin" style={{ textDecoration: "none" }}>
                {" "}
                <Button>Gin</Button>
            </Link>

            <Link to="/drinks/base/tequila" style={{ textDecoration: "none" }}>
                {" "}
                <Button>Tequila</Button>
            </Link>

            <Link to="/drinks/base/brandy" style={{ textDecoration: "none" }}>
                {" "}
                <Button>Brandy</Button>
            </Link>

            <Link to="/drinks/base/scotch" style={{ textDecoration: "none" }}>
                {" "}
                <Button>Scotch</Button>
            </Link>

            <Link
                to="/drinks/base/triplesec"
                style={{ textDecoration: "none" }}
            >
                {" "}
                <Button>Triple Sec</Button>
            </Link>
        </Wrapper>
    );
};

export default SearchByBase;
