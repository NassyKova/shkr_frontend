import { useState } from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Outlet,
    Route,
    RouterProvider,
} from "react-router-dom";
import { GlobalContext } from "./components/utils/globalStateContext";
import { GlobalStyle } from "./GlobalStyle";

//Components
import Box from "@mui/material/Box";
import NotFound from "./components/NotFound";
import About from "./components/About/About";
import Contact from "./components/Contact";
import { ProductByBase } from "./components/ProductByBase";
import Footer from "./components/Footer/Footer";
import SpinnerBlue from "./components/Spinner";
import Header from "./components/Header/Header";
import NavBar from "./components/mui/NavBar";
import SearchByBase from "./components/SearchBy/SearchByBase";
import SearchAppBar from "./components/SearchBy/SearchByName";
import AdminOptions from "./components/admin/AdminOptions";
import DeletedCocktails from "./components/admin/Deleted Cocktails";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainPage />} errorElement={<NotFound />}>
                <Route
                    index={true}
                    path="/admin"
                    element={<AdminOptions />}
                ></Route>
                <Route path="deleted" element={<DeletedCocktails />}></Route>
                <Route path="/" element={<About />} />
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
                    <Route path="name" element={<SearchAppBar />}></Route>
                </Route>
                <Route path="/contact" element={<Contact />} />
            </Route>
        )
    );

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
                        height: "100vh",
                    }}
                >
                    <SpinnerBlue />
                </Box>
            ) : (
                <div className="App">
                    <GlobalContext.Provider>
                        <RouterProvider router={router} />
                    </GlobalContext.Provider>
                </div>
            )}
        </>
    );
}

function MainPage() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default App;
