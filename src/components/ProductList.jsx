import Product from "./Product";
// import ProductClass from "./ProductClass";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import SpinnerBlue from "./Spinner";

function ProductList(props) {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //component didMount, fire only when mounted => []
    useEffect(() => {
        fetch(
            "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=margarita"
        )
            .then((res) => res.json())
            .then((json) => {
                const newItems = json.drinks.map((product) => {
                    return product;
                });
                console.log(newItems);

                setItems(newItems.slice(0, 5));
                setIsLoading(false);
            });
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
                <>
                    {items.map((item) => {
                        return (
                            <Product
                                key={item.id}
                                productInfo={item}
                                setItem={props.setItem}
                            />
                        );
                    })}
                </>
            )}
        </>
    );
}

export { ProductList };
