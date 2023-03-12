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

// This is a React component that renders the main application
function App() {
    // Set the initial state for isLoading to true

    const [isLoading, setIsLoading] = useState(true);

    // Create a router using createBrowserRouter and createRoutesFromElements functions
    const router = createBrowserRouter(
        createRoutesFromElements(
            // Define the routes for the application
            <Route path="/" element={<MainPage />} errorElement={<NotFound />}>
                <Route
                    index={true}
                    path="/admin"
                    element={<AdminOptions />}
                ></Route>
                <Route path="deleted" element={<DeletedCocktails />}></Route>
                <Route path="/" element={<About />} />
                <Route path="/drinks" element={<NavBar />}>
                    {/* // Define routes for different base drinks */}
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
                    {/* // Define routes for different types of drinks */}
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
    // Set isLoading to false after 2 seconds using setTimeout
    setTimeout(() => {
        setIsLoading(false);
    }, 2000);

    // Return either a loading spinner or the main application
    return (
        <>
            {isLoading ? ( // If isLoading is true, show the spinner
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
                // If isLoading is false, show the main content
                <div className="App">
                    <GlobalContext.Provider>
                        <RouterProvider router={router} />
                    </GlobalContext.Provider>
                </div>
            )}
        </>
    );
}

// This component defines the main layout of the application
function MainPage() {
    return (
        <>
            <GlobalStyle />{/* Apply the global styles */}
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default App;
