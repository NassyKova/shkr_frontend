import { useEffect, useReducer, useState } from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Outlet,
    Route,
    RouterProvider,
} from "react-router-dom";
import { GlobalContext } from "./components/utils/globalStateContext";

import { GlobalStyle } from "./GlobalStyle";
import { ProductByBase } from "./components/ReturnProductByBase/ProductBase";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SpinnerBlue from "./components/Spinner";
import NavBar from "./components/mui/NavBar";
import SearchByBase from "./components/SearchBy/SearchByBase";
import SearchAppBar from "./components/SearchBy/SearchByName";

import Box from "@mui/material/Box";
import ProductInfo from "./components/ProductInfo";
import AddProduct from "./components/AddProduct";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import About from "./components/About";
import Contact from "./components/Contact";

import globalReducer from "./components/reducers/globalReducer";
import AdminOptions from "./components/admin/AdminOptions";
import UpdateOrDelete from "./components/admin/UpdateOrDelete";
import ReplaceIngridient from "./components/admin/ReplaceIngridient";

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
                {/* <Route path="login" element={<Login />}> */}
                <Route index={true} path="/admin" element={<AdminOptions />}></Route>
                <Route path="cocktail" element={<UpdateOrDelete />}></Route>
                <Route path="ingr" element={<ReplaceIngridient />}></Route>
                {/* </Route> */}

                    <Route path="addproduct" element={<AddProduct />}></Route>
                

                <Route path="/about" element={<About />} />
                {/* <Route path="/about" element={<AdminOptions />} /> */}
                <Route path="/drinks" element={<NavBar />}>
                    <Route path="base">
                        <Route index={true} element={<SearchByBase />}></Route>
                        <Route
                            path="rum"
                            element={
                                <ProductByBase specificUrl="/drinks/base/rum" />
                            }
                        ></Route>
                        <Route
                            path="vodka"
                            element={
                                <ProductByBase specificUrl="/drinks/base/vodka" />
                            }
                        ></Route>
                        <Route
                            path="bourbon"
                            element={
                                <ProductByBase specificUrl="/drinks/base/bourbon" />
                            }
                        ></Route>
                        <Route
                            path="gin"
                            element={
                                <ProductByBase specificUrl="/drinks/base/gin" />
                            }
                        ></Route>
                        <Route
                            path="tequila"
                            element={
                                <ProductByBase specificUrl="/drinks/base/tequila" />
                            }
                        ></Route>
                        <Route
                            path="brandy"
                            element={
                                <ProductByBase specificUrl="/drinks/base/brandy" />
                            }
                        ></Route>
                        <Route
                            path="scotch"
                            element={
                                <ProductByBase specificUrl="/drinks/base/scotch" />
                            }
                        ></Route>
                        <Route
                            path="triplesec"
                            element={
                                <ProductByBase specificUrl="/drinks/base/triple_sec" />
                            }
                        ></Route>
                    </Route>
                    <Route
                        path="fruity"
                        element={<ProductByBase specificUrl="/drinks/fruity" />}
                    ></Route>
                    <Route
                        path="heavy"
                        element={<ProductByBase specificUrl="/drinks/heavy" />}
                    ></Route>
                    <Route
                        path="fizzy"
                        element={<ProductByBase specificUrl="/drinks/fizzy" />}
                    ></Route>
                    <Route
                        path="non-alc"
                        element={
                            <ProductByBase specificUrl="/drinks/non-alc" />
                        }
                    ></Route>
                    <Route
                        path="name"
                        element={<SearchAppBar />}
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

            {/* <Product setItem={setItem} />
            <ProductInfo item={selectedItem} /> */}

            <Outlet />
            <Footer />
        </>
    );
}

export default App;
