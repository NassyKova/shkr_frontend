import Title from "../styled/Title";
import Text from "../styled/Text.style";
import "./About.styles.css";
import axios from "axios";

import { useState, useCallback, useEffect } from "react";
const About = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    const fetchCocktailHandler = useCallback(() => {
        setLoading(true);
        axios
            .get(url)
            .then((response) => {
                console.log(response.data);
                setData(response.data.drinks);
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        fetchCocktailHandler();
    }, [fetchCocktailHandler]);

    if (loading) {
        return <h2>Loading...</h2>;
    }
    return (
        <>
            <div className="About">
                {data.map((cocktail) => (
                    <div key={cocktail.idDrink} className="cocktail-container">
                        <img
                            className="Image"
                            src={cocktail.strDrinkThumb}
                            alt="drink_pic"
                        />
                    </div>
                ))}
            </div>
            <Text>
                The Shkr app is a simple, intuitive app designed to help people
                learn new cocktail recipes or look up old favourites. 
            </Text>
        </>
    );
};

export default About;
