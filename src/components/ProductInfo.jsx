import Product from "./Product";

function ProductInfo(props) {
    const item = props.item;
    if (!item) {
        return null;
    }
    return (
        <>
            {item.title}
            <Product productInfo={item} />
        </>
    );
}

export default ProductInfo;
