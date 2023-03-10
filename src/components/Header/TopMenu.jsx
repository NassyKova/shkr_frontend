import { Wrapper, Button } from "./TopMenu.styles";
import { Link } from "react-router-dom";

const TopMenu = () => {
    return (
        <Wrapper>
            {" "}
            <Link to="/" style={{ textDecoration: "none" }}>
                <Button>About</Button>
            </Link>
            <Link to="/drinks" style={{ textDecoration: "none" }}>
                <Button>Drinks</Button>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
                <Button>Contact Us</Button>
            </Link>
        </Wrapper>
    );
};

export default TopMenu;
