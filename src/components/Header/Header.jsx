import React from "react";
import { Wrapper, Content, Slogan, LogoImg } from "../Header/Header.Styles";
// import { Link } from "react-router-dom";
import TopMenu from "./TopMenu";

import ShkrLogo from "../../images/Shkr_logo.png";

const Header = () => {
    return (
        <Wrapper>
            <Content>
                <LogoImg src={ShkrLogo} alt="logo" />

                <TopMenu />
            </Content>
            <Slogan>The cocktail drinks for you!</Slogan>
        </Wrapper>
    );
};

export default Header;
