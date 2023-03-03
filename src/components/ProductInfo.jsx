import Product from "./Product";

function ProductInfo(props) {
    const item = props.item;
    if (!item) {
        return null;
    }
    return (
        <div>
            {item.title}
            <Product productInfo={item} />
        </div>
    );
}

export default ProductInfo;
