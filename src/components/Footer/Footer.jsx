import React from "react";
import { Admin, Wrapper } from "../Footer/Footer.styles";
import Socials from "../Socials/Socials";
// import { Link } from "@chakra-ui/react";
import DividerLine from "../Divider/Divider";
import { Link, useNavigate } from "react-router-dom";
import Login from "../Login";

import { useGlobalContext } from "../utils/globalStateContext"

const Footer = () => {

    const { store, dispatch } = useGlobalContext()

    const navigate = useNavigate()



    return (
        <Wrapper>
            <DividerLine />
            <Socials />
            <Admin>
                            {store.loggedInUserName }
                    {store.loggedInUserName ? (
                        <button style={{
                            backgroundColor: "#d585b2",
                            borderRadius: "5px",
                            width: "100px",
                            height: "30px",
                            margin: "10px",
                            cursor: "pointer",
                            }}
                            onClick={() => {
                                dispatch({
                                    type: "setToken",
                                    data: null,
                                })
                                dispatch({
                                    type: "setLoggedInUserName",
                                    data: null,
                                })
                            }}
                        >
                            Logout
                        </button>
                    ) : (
                        <Link to="/admin" relative="login"  color="#43d9f0">
                        admin login
                    </Link>
                    )}
                    
            </Admin>
        </Wrapper>
    );
};

export default Footer;
