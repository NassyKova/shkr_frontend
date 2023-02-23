import { Component } from "react";
import ProductClass from "./ProductClass";

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
        id: 3,
        title: "Bloody Marrrrry",
        ingridients: "Tomato ",
        receipt: "Add Vodka And Tomato ",
        image: "https://robohash.org/yes",
    },
];

class ProductListClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoading: true
        };
    }

    componentDidMount() {
        fetch('https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=margarita')
            .then((res) => res.json())
            .then((json) => {
                const newItems = json.drinks.map((product) => {

                    return product
                })
                console.log(newItems);
                this.setState({
                    items: json.drinks.slice(0, 5),
                    isLoading: false
                })
            })
    }

    componentDidUpdate() {}

    componentWillUnmount() {}

    render() {
        return (
            <>
                <h2>Base</h2>

                {this.state.items.map((item) => {
                    return <ProductClass key={item.id} productInfo={item} />;
                })}
            </>
        );
    }
}

export default ProductListClass;
