import { Button, Wrapper } from "./SearchByBase.styles";
import { Link } from "react-router-dom";

const SearchByBase = () => {
    return (
        <Wrapper>
            <Button>Rum</Button>
            <Link to="/finder/base/vodka" style={{ textDecoration: "none" }}>
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
