import Product from "./Product";
import { Box } from "@mui/system";
import SpinnerBlue from "./Spinner";
import useApi from "./utils/useApi";

// This function renders a list of products fetched from an API based on a specific URL passed as a prop.
function ProductByBase(props) {
    // The useApi hook is used to fetch data from the specified URL.
    const [isLoading, items] = useApi(props.specificUrl);
    // If data is still loading, a spinner is displayed until data is available.
    // Otherwise, the list of products is rendered using the Product component.
    return (
        <div>
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
                <div>
                    {items.map((item) => {
                        return (
                            <Product
                                key={"product-base-" + item.strDrink}
                                productInfo={item}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export { ProductByBase };
