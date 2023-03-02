// import { Component } from "react";
// import ProductClass from "./ProductClass";
// import { Box } from "@mui/system";
// import SpinnerBlue from "./Spinner";

// class ProductListClass extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             items: [],
//             isLoading: true,
//         };
//     }

//     componentDidMount() {
//         fetch(
//             "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=margarita"
//         )
//             .then((res) => res.json())
//             .then((json) => {
//                 const newItems = json.drinks.map((product) => {
//                     return product;
//                 });
//                 console.log(newItems);
//                 this.setState({
//                     items: json.drinks.slice(0, 5),
//                     isLoading: false,
//                 });
//             });
//     }

//     componentDidUpdate() {}

//     componentWillUnmount() {}

//     render() {
//         return (
//             <>
//                 {this.state.isLoading ? (
//                     <Box
//                         sx={{
//                             display: "flex",
//                             justifyContent: "center",
//                             alignItems: "center",
//                             height: "100vh",
//                         }}
//                     >
//                         <SpinnerBlue />
//                     </Box>
//                 ) : (
//                     <>
//                         {this.state.items.map((item) => {
//                             return (
//                                 <ProductClass
//                                     key={item.id}
//                                     productInfo={item}
//                                     setItem={this.props.setItem}
//                                 />
//                             );
//                         })}
//                     </>
//                 )}
//             </>
//         );
//     }
// }

// export default ProductListClass;
