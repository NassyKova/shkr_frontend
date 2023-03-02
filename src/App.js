import { useEffect, useReducer, useState } from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Outlet,
    Route,
    RouterProvider,
} from "react-router-dom";
// import { Link } from "react-router-dom";
import { GlobalContext } from "./components/utils/globalStateContext";

import { GlobalStyle } from "./GlobalStyle";
import { ProductList } from "./components/ProductList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SpinnerBlue from "./components/Spinner";
import NavBar from "./components/mui/NavBar";
import SearchByBase from "./components/SearchBy/SearchByBase";
import {
    SearchByFruity,
    SearchByFizzy,
    SearchByNoAlc,
    SearchByHeavy,
    SearchByName,
} from "./components/SearchBy/SearchBy";

import Box from "@mui/material/Box";
// import ProductListClass from "./components/ProductListClass";
import ProductInfo from "./components/ProductInfo";
import AddProduct from "./components/AddProduct";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
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
                <Route path="login" element={<Login />}>
                    <Route path="addproduct" element={<AddProduct />}></Route>
                </Route>

                <Route path="/about" element={<About />} />
                <Route path="/finder" element={<NavBar />}>
                    <Route
                        path="searchbybase"
                        element={<SearchByBase />}
                        errorElement={<NotFound />}
                    >
                        <Route
                            path="vodka"
                            element={<ProductList />}
                            errorElement={<NotFound />}
                        ></Route>
                    </Route>
                    <Route
                        path="fruity"
                        element={<SearchByFruity />}
                        errorElement={<NotFound />}
                    ></Route>
                    <Route
                        path=":itemId"
                        element={<SearchByHeavy />}
                        errorElement={<NotFound />}
                    ></Route>
                    <Route
                        path=":itemId"
                        element={<SearchByFizzy />}
                        errorElement={<NotFound />}
                    ></Route>
                    <Route
                        path=":itemId"
                        element={<SearchByNoAlc />}
                        errorElement={<NotFound />}
                    ></Route>
                    <Route
                        path="searchbyname"
                        element={<SearchByName />}
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

            {/* <ProductList setItem={setItem} />
            <ProductInfo item={selectedItem} /> */}

            <Outlet />
            <Footer />
        </>
    );
}

export default App;
