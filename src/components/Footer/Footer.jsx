import React from "react";
import { Wrapper } from "../Footer/Footer.styles";
// import { Admin, Wrapper } from "../Footer/Footer.styles";
import Socials from "../Socials/Socials";
import DividerLine from "../Divider/Divider";
// import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <Wrapper>
            <DividerLine />
            <Socials />
            {/* <Admin>
                <Link to="/admin" relative="login" color="#43d9f0">
                    admin
                </Link>
            </Admin> */}
        </Wrapper>
    );
};

export default Footer;
