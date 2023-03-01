import { Wrapper, Button } from "./TopMenu.styles";
import { Link } from "react-router-dom";


const TopMenu = () => {
    return (
        <Wrapper>
            
                {" "}
                <Link to="/about" style={{ textDecoration: 'none' }}><Button>About us</Button></Link>
                <Link to="/finder"style={{ textDecoration: 'none' }} ><Button>Finder</Button></Link>
                <Link to="/contact" style={{ textDecoration: 'none' }}><Button>Contact Us</Button></Link>

        </Wrapper>
    );
};

export default TopMenu;
