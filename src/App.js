// import { useState, useCallback, useEffect } from "react";
// import axios from "axios";
import "./App.css";
import { GlobalStyle } from "./GlobalStyle";
import { ProductList } from "./components/ProductList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SpinnerBlue from "./components/Spinner";
import NavBar from "./components/mui/NavBar";
import { useState } from "react";
import Box from "@mui/material/Box"
// import ProductListClass from "./components/ProductListClass";
import ProductInfo from "./components/ProductInfo";
import AddProduct from "./components/AddProduct";
import Login from "./components/Login";

// import CircularProgress from "@mui/material/CircularProgress"
// import {
//     createBrowserRouter,
//     createRoutesFromElements,
//     Outlet,
//     Route,
//     RouterProvider,
// } from "react-router-dom"

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null)

    //receive item from the Product component, will set selected item as item
    function setItem (item) {
        setSelectedItem(item)
    }

    // const router = createBrowserRouter(
    //     createRoutesFromElements(
    //         <Route path="/" element={<MainPage />} errorElement={<NotFound />}>
    //             <Route path="login" element={<Login />} />
    //             <Route element={<ProtectedRoute />}>
    //                 <Route path="products/add" element={<AddProduct />} />
    //                 <Route path="cart" element={<Cart />} loader={loader} />
    //             </Route>
    //             <Route path="product/:productId" element={<ProductInfo />} />
    //             <Route path="/" element={<ProductList />} />
    //         </Route>))

    setTimeout(() => {
        setIsLoading(false);
    }, 2000);

    return (
        <>
            {isLoading ? (
                <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: '100vh'
                }}
            >
                <SpinnerBlue />
                </Box>
            ) : (
                <div className="App">
                    <GlobalStyle />
                    <Header />
                    <Login/>
                    <NavBar />
                    <AddProduct/>
                    <ProductList setItem={setItem} />
                    <ProductInfo item={selectedItem} />
                    <Footer />

                </div>
            )}
        </>
    );

}


export default App;
