// import { useState, useCallback, useEffect } from "react";
// import axios from "axios";
import "./App.css";
import { GlobalStyle } from "./GlobalStyle";
import { ProductList } from "./components/ProductList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header"
import SpinnerBlue from "./components/Spinner";
import NavBar from "./components/mui/NavBar";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Header/>
            <NavBar/>
            <ProductList />
            <SpinnerBlue />
            <Footer />
        </div>
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
