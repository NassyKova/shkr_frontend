import React from "react";
import { Wrapper, Content, Slogan, LogoImg } from "../Header/Header.Styles";
// import { Link } from "react-router-dom";

import ShkrLogo from "../../images/Shkr_logo.png";
import ColorTabs from "./Tab";

const Header = () => {
    return (
        <Wrapper>
            <Content>
                <LogoImg src={ShkrLogo} alt="logo" />

                <Slogan>The cocktail finder for you!</Slogan>
                <ColorTabs />
            </Content>
        </Wrapper>
    );
};

export default Header;
