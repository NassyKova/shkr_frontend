import Product from "../Product";
import { Box } from "@mui/system";
import SpinnerBlue from "../Spinner";
import useApi from "../utils/useApi";

function ProductByBase(props) {
    const [isLoading, items] = useApi(props.specificUrl);
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
                                setItem={props.setItem}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export { ProductByBase };
