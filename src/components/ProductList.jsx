import Product from "./Product"

function ProductList() {
    const items = [
        {
            id: 1,
            title: "Bloody Mary",
            ingridients: " Vodka",
            receipt: "Vodka And Tomato Juice",
            image: "https://robohash.org/bag",
        },
        {
            id: 2,
            title: "Bloody Marrry",
            ingridients: "Tomato Vodka",
            receipt: "Add  And Tomato Juice",
            image: "https://robohash.org/no",
        },
        {
            id:3,
            title: "Bloody Marrrrry",
            ingridients: "Tomato ",
            receipt: "Add Vodka And Tomato ",
            image: "https://robohash.org/yes",
        }
    ]
    return (
        <>

            <h2>Base</h2>

                {items.map((item) => {
                    return <Product key={item.id} productInfo={item} />                })}

        </>
    )
}

export { ProductList }