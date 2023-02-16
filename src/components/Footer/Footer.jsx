import React from "react";
import { Admin, Wrapper } from "../Footer/Footer.styles";
import Socials from "../Socials/Socials";
import { Link } from "@chakra-ui/react";
import DividerLine from "../Divider/Divider";

const Footer = () => {
    return (
        <Wrapper>
            <DividerLine />

                <Socials />

            <Admin>
                <Link color="#43d9f0" href="https://chakra-ui.com" l>
                    admin login
                </Link>
            </Admin>
        </Wrapper>
    );
};

export default Footer;
