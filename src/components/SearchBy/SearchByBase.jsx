import { Button, Wrapper } from "./SearchByBase.styles";
import { Link } from "react-router-dom";

const SearchByBase = () => {
    return (
        <Wrapper>
            <Link
                to="/finder/searchbybase/rum"
                style={{ textDecoration: "none" }}
            >
                {" "}
                <Button>Rum</Button>
            </Link>

            <Link
                to="/finder/searchbybase/vodka"
                style={{ textDecoration: "none" }}
            >
                {" "}
                <Button>Vodka</Button>
            </Link>

            <Button>Bourbon</Button>
            <Button>Gin</Button>
            <Button>Tequila</Button>
            <Button>Brandy</Button>
            <Button>Scotch</Button>
            <Button>Triple Sec</Button>
        </Wrapper>
    );
};

export default SearchByBase;
