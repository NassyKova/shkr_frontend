// Import required modules
import Text from "../styled/Text.style"; // importing the Text component
import "./About.styles.css"; // importing styles for the About component from a CSS file
import axios from "axios"; // importing axios library for making HTTP requests

// Import React hooks
import { useState, useCallback, useEffect } from "react";

// Define the About component
const About = () => {
    // Define the state variables and their initial values
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    // Define the API endpoint URL
    const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    // Define a callback function for fetching the cocktail data
    const fetchCocktailHandler = useCallback(() => {
        setLoading(true); // Set loading state to true while the data is being fetched
        axios
            .get(url) // Send GET request to the API endpoint
            .then((response) => {
                console.log(response.data); // Log the response data to the console
                setData(response.data.drinks); // Set the retrieved data to the state variable 'data'
            })
            .catch((error) => console.log(error)) // Catch any errors that occur during the request
            .finally(() => setLoading(false)); // Set loading state back to false after the request is completed
    }, []);

    // Use the useEffect hook to fetch the cocktail data on component mount
    useEffect(() => {
        fetchCocktailHandler();
    }, [fetchCocktailHandler]);

    // Return a loading message if the data is still being fetched
    if (loading) {
        return <h2>Loading...</h2>;
    }

    // Return the component with the fetched cocktail data and a description of the app
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
                learn new cocktail recipes or look up old favourites
            </Text>
        </>
    );
};

export default About;
