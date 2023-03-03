import Product from "./Product";
import { Box } from "@mui/system";
import SpinnerBlue from "./Spinner";
import useApi from "./utils/useApi";

function ProductListVodka(props) {
    const [isLoading, items] = useApi("/search.php?s=vodka");
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
                                key={item.idDrink}
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

export { ProductListVodka };
