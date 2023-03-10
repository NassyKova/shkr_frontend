// import axios from "axios"
// import { useState } from "react"
// import styled from "styled-components"

// import Title from "./styled/Title"
// import { useGlobalContext } from "./utils/globalStateContext"

// const InputWrapper = styled.div`
//     display: grid;
//     grid-template-columns: 1fr 3fr;
//     width: 400px;
//     margin-bottom: 10px;
// `

// function Login() {
//     const [user, setUser] = useState({
//         username: "",
//         password: "",
//     })

//     const [errorMessage, setErrorMessage] = useState({
//         username: null,
//         password: null,
//         apiError: null,
//     })

//     const { store, dispatch } = useGlobalContext()

//     const handleSubmit = (event) => {
//         event.preventDefault()
//         console.log(user)
//         let haveError = false
//         if (!user.username) {
//             setErrorMessage((prevErrorMessage) => {
//                 return {
//                     ...prevErrorMessage,
//                     username: "Username must be provided",
//                 }
//             })
//             haveError = true
//         }

//         if (!user.password) {
//             setErrorMessage((prevErrorMessage) => {
//                 return {
//                     ...prevErrorMessage,
//                     password: "Password must be provided",
//                 }
//             })
//             haveError = true
//         }

//         if (!haveError) {
//             setErrorMessage({
//                 username: null,
//                 password: null,
//                 apiError: null,
//             })
//             axios
//                 .post("/user/login", user)
//                 .then((res) => res.data)
//                 .then((json) => {
//                     dispatch({
//                         type: 'setToken',
//                         data: json.token
//                     })
//                     dispatch({
//                         type: 'setLoggedInUserName',
//                         data: user.username
//                     })
//                     console.log(json)
//                 })
//                 .catch(() => {
//                     setErrorMessage((prevErrorMessage) => {
//                         return {
//                             ...prevErrorMessage,
//                             apiError: "Username/Password doesn't exist",
//                         }
//                     })
//                 })
//         }
//     }

//     const handleOnChange = (event) => {
//         setUser((prevUser) => {
//             return {
//                 ...prevUser,
//                 [event.target.name]: event.target.value,
//             }
//         })
//     }

//     return (
//         <>
//             {store.loggedInUserName ? (
//                 <Title>Login Successful</Title>
//             ) : (
//                 <div>
//                     <Title>Login</Title>
//                     <form
//                         style={{
//                             display: "flex",
//                             flexDirection: "column",
//                             alignItems: "center",
//                         }}
//                         onSubmit={handleSubmit}
//                     >
//                         <InputWrapper>
//                             <label htmlFor="username">Username:</label>
//                             <input
//                                 type="text"
//                                 name="username"
//                                 value={user.username}
//                                 onChange={handleOnChange}
//                                 style={{color: "black"}}
//                             />
//                         </InputWrapper>
//                         {errorMessage.username}
//                         <InputWrapper>
//                             <label htmlFor="password">Password:</label>
//                             <input
//                                 type="password"
//                                 name="password"
//                                 value={user.password}
//                                 onChange={handleOnChange}
//                                 style={{color: "black"}}
//                             />
//                         </InputWrapper>
//                         {errorMessage.password}
//                         <div>
//                             <input                                 style={{
//                                     backgroundColor: "green",
//                                     borderRadius: "5px",
//                                     width: "200px",
//                                     height: "30px",
//                                     margin: "10px",
//                                     cursor: "pointer",
//                                 }}type="submit" value="Login" />
//                         </div>
//                         {errorMessage.apiError}
//                     </form>
//                 </div>
//             )}
//         </>
//     )
// }

// export default Login