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
import CircularProgress from "@mui/material/CircularProgress"

function App() {
    const [isLoading, setIsLoading] = useState(true);

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
                    <NavBar />
                    <ProductList />
                    <Footer />
                </div>
            )}
        </>
    );
}

// function App() {
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState([]);

//   const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

//   const fetchCocktailHandler = useCallback(() => {
//     setLoading(true);
//     axios
//       .get(url)
//       .then((response) => {
//         console.log(response.data);
//         setData(response.data.drinks);
//       })
//       .catch((error) => console.log(error))
//       .finally(() => setLoading(false));
//   }, []);

//   useEffect(() => {
//     fetchCocktailHandler();
//   }, [fetchCocktailHandler]);

//   if (loading) {
//     return <h2>Loading...</h2>;
//   }
//   return (
//     <div className="App">
//       {data.map((cocktail) => (
//         <div key={cocktail.idDrink} className="cocktail-container">
//           <h2>{cocktail.strDrink}</h2>
//           <img src={cocktail.strDrinkThumb} alt="drink_pic" />
//           <button onClick={fetchCocktailHandler}>Next random cocktail</button>
//         </div>
//       ))}
//     </div>
//   );
// }
export default App;
