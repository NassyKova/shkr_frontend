import Product from "./Product";
// import ProductClass from "./ProductClass";
// import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import SpinnerBlue from "./Spinner";
// import axios from "axios";

import useApi from "./utils/useApi";

function ProductList(props) {
    const [isLoading, items] = useApi("/search.php?s=vodka")

    // const drinks = items.drinks?.slice(0,5) ?? []

    // const [items, setItems] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

    // //component didMount, fire only when mounted => []
    // useEffect(() => {
    //     axios
    //         .get("/search.php?s=brandy")
    //         .then((res) => res.data)
    //         .then((json) => {
    //             const newItems = json.drinks.map((product) => {
    //                 return product;
    //             });
    //             console.log(newItems);

    //             setItems(newItems.slice(0, 5));
    //             setIsLoading(false);
    //         });
    // }, []);

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
