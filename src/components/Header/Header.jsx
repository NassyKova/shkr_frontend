import React from "react";
import { Wrapper, Content, Slogan, LogoImg } from "../Header/Header.Styles";
import { Link } from "react-router-dom";

import ShkrLogo from "../../images/Shkr_logo.png";

const Header = () => {
    return (
        <Wrapper>
            <Content>
                {/* <Link to="/">
                    <LogoImg src={ShkrLogo} alt="logo" />
                </Link> */}

                <Slogan>The cocktail finder for you!</Slogan>
            </Content>
        </Wrapper>
    );
};

export default Header;
