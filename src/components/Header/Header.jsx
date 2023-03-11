import React from "react";
import { Wrapper, Content, Slogan, LogoImg } from "../Header/Header.Styles";
// import { Link } from "react-router-dom";
import TopMenu from "./TopMenu";

import ShkrLogo from "../../images/Shkr_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Wrapper>
            <Content>
                <Link to="/drinks" style={{ textDecoration: "none" }}>
                    {" "}
                    <LogoImg src={ShkrLogo} alt="logo" />
                </Link>
                <TopMenu />
            </Content>
            <Slogan>Cocktails for you!</Slogan>
        </Wrapper>
    );
};

export default Header;
