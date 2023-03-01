import { useEffect, useReducer, useState } from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Outlet,
    Route,
    RouterProvider,
    Routes,
    Router,
} from "react-router-dom";
import { Link } from "react-router-dom";
import { GlobalContext } from "./components/utils/globalStateContext";

import { GlobalStyle } from "./GlobalStyle";
import { ProductList } from "./components/ProductList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SpinnerBlue from "./components/Spinner";
import NavBar from "./components/mui/NavBar";
import SearchByBase from "./components/SearchByBase/SearchByBase";

import Box from "@mui/material/Box";
// import ProductListClass from "./components/ProductListClass";
import ProductInfo from "./components/ProductInfo";
import AddProduct from "./components/AddProduct";
import Login from "./components/Login";
import NotFound from "./NotFound";
import About from "./components/About";
import Contact from "./components/Contact";

import globalReducer from "./components/reducers/globalReducer";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    const initialState = {
        loggedInUserName: "",
        token: "",
    };

    const [store, dispatch] = useReducer(globalReducer, initialState);

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainPage />} errorElement={<NotFound />}>
                <Route path="/login" element={<Login />}>
                    <Route path="/login/addproduct" element={<AddProduct />} >
                        </Route>
                </Route>

                <Route path="/about" element={<About />} />
                <Route path="/" element={<NavBar />}>
                    <Route
                        path="/base"
                        element={<SearchByBase />}
                        errorElement={<NotFound />}
                    ></Route>
                </Route>
                <Route path="/contact" element={<Contact />} />
            </Route>
        )
    );

    setTimeout(() => {
        setIsLoading(false);
    }, 2000);

    useEffect(() => {
        const username = localStorage.getItem("username");
        const token = localStorage.getItem("token");
        if (username && token) {
            dispatch({
                type: "setLoggedInUserName",
                data: username,
            });
            dispatch({
                type: "setToken",
                data: token,
            });
        }
    }, []);

    return (
        <>
            {isLoading ? (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh",
                    }}
                >
                    <SpinnerBlue />
                </Box>
            ) : (
                <div className="App">
                    <GlobalContext.Provider value={{ store, dispatch }}>
                        <RouterProvider router={router} />
                    </GlobalContext.Provider>
                </div>
            )}
        </>
    );
}

function MainPage() {
    const [selectedItem, setSelectedItem] = useState(null);

    function setItem(item) {
        setSelectedItem(item);
    }

    return (
        <>
            <GlobalStyle />
            <Header />
            <Outlet />
            {/* <NavBar /> */}
            {/* <SearchByBase /> */}

            {/* <AddProduct /> */}
            {/* <ProductList setItem={setItem} />
            <ProductInfo item={selectedItem} /> */}

            <Footer />
        </>
    );
}

export default App;
