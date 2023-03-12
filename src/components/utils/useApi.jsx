// Importing the axios library and the useEffect and useState hooks from React
import axios from "axios";
import { useEffect, useState } from "react";

// Custom hook called useApi that takes in a url parameter
const useApi = (url) => {
    // Setting the initial state of data to an empty array and isLoading to true
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // useEffect hook that runs whenever the url parameter changes
    useEffect(() => {
        // Axios GET request to fetch data from the specified url
        axios
            .get(url)
            .then((res) => res.data)
            .then((json) => {
                // Mapping through the received data and returning each product
                const newItems = json.drinks.map((product) => {
                    return product;
                });

                // Logging the received data to the console
                console.log(newItems);

                // Setting the data state to the first five products and isLoading to false
                setData(newItems.slice(0, 5));
                setIsLoading(false);
            });
    }, [url]); // Only runs when the url parameter changes

    // Returning an array containing isLoading and data states
    return [isLoading, data];
};

// Exporting the useApi hook as the default export of this module
export default useApi;
