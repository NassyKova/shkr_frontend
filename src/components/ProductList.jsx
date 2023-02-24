import Product from "./Product"
import ProductClass from "./ProductClass"

function ProductList() {
    return (
        <>
            <h2>Base</h2>

            {this.state.items.map((item) => {
                return (
                <ProductClass 
                key={item.id} 
                productInfo={item}
                setItem={this.props.setItem} 
                />
                );
            })}
        </>
    );

}

export { ProductList }