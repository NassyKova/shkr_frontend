import Product from "./Product";

// Defining a functional component called ProductInfo that receives props as an argument
function ProductInfo(props) {
    // Extracting the "item" property from the props object
    const item = props.item;
    if (!item) {
        return null;
    }
    // If the "item" property is truthy, render the following JSX
    return (
        <div>
            {item.title}
            {/* // Render the Product component with "productInfo" prop set to the "item" object */}
            <Product productInfo={item} />
        </div>
    );
}

export default ProductInfo;
