import Product from "./Product";
// import ProductClass from "./ProductClass";
// import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import SpinnerBlue from "./Spinner";
// import axios from "axios";

import useApi from "./utils/useApi";

function ProductList(props) {
    const [isLoading, items] = useApi("/search.php?s=vodka")
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
