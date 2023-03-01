import React from "react";
import { Admin, Wrapper } from "../Footer/Footer.styles";
import Socials from "../Socials/Socials";
// import { Link } from "@chakra-ui/react";
import DividerLine from "../Divider/Divider";
import { Link } from "react-router-dom";
import Login from "../Login";
const Footer = () => {
    return (
        <Wrapper>
            <DividerLine />

            <Socials />

            <Admin>
                <Link to="/login" relative="login" element={<Login/>} color="#43d9f0">
                    admin login
                </Link>

            </Admin>
        </Wrapper>
    );
};

export default Footer;
