import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

import Title from "./styled/Title";

const InputWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    width: 400px;
    margin-bottom: 10px;
`;

function Login() {
    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const [errorMessage, setErrorMessage] = useState({
        username: null,
        password: null,
        apiError: null,
    });

    const [userFetched, setUserFetched] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user);
        let haveError = false;
        if (!user.username) {
            setErrorMessage((prevErrorMessage) => {
                return {
                    ...prevErrorMessage,
                    username: "Username must be provided",
                };
            });
            haveError = true;
        }

        if (!user.password) {
            setErrorMessage((prevErrorMessage) => {
                return {
                    ...prevErrorMessage,
                    password: "Password must be provided",
                };
            });
            haveError = true;
        }

        if (!haveError) {
            setErrorMessage({
                username: null,
                password: null,
                apiError: null,
            });
            axios
                .post("/login", user)
                .then((res) => res.data)
                .then((json) => {
                    setUserFetched(true);
                    localStorage.setItem("token", json.token);
                    console.log(json);
                })
                .catch(() => {
                    setErrorMessage((prevErrorMessage) => {
                        return {
                            ...prevErrorMessage,
                            apiError: "Username/Password doesn't exist",
                        };
                    });
                });
        }
    };

    const handleOnChange = (event) => {
        setUser((prevUser) => {
            return {
                ...prevUser,
                [event.target.name]: event.target.value,
            };
        });
    };

    return (
        <>
            {userFetched ? (
                <Title>Login Successful</Title>
            ) : (
                <div>
                    <Title>Login</Title>
                    <form
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            color:"red"
                        }}
                        onSubmit={handleSubmit}
                    >
                        <InputWrapper>
                            <label htmlFor="username"  >Username:</label>
                            <input
                                type="text"
                                name="username"
                                color="red"
                                value={user.username}
                                onChange={handleOnChange}
                                style={{color: "black"}}
                            />
                        </InputWrapper>
                        {errorMessage.username}
                        <InputWrapper>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                name="password"
                                value={user.password}
                                onChange={handleOnChange}
                                style={{color: "black"}}
                            />
                        </InputWrapper>
                        {errorMessage.password}
                        <div>
                            <input 
                                type="submit"
                                value="Login"
                                style={{
                                    backgroundColor: "green",
                                    borderRadius: "5px",
                                    width: "200px",
                                    height: "30px",
                                    margin: "10px",
                                    cursor: "pointer",
                                }}
                            />
                        </div>
                        {errorMessage.apiError}
                    </form>
                </div>
            )}
        </>
    );
}

export default Login;
