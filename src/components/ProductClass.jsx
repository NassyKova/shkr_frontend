import { Component } from "react";
import { Wrapper, Img, Title, Ingridients, Grid } from "./Product.Styles";

class ProductClass extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor");
    }

    //gets triggered when component rebders - add event listeners, data from API
    componentDidMount() {
        //fetching data from API, listening to websocket APIs, adding event listeners
        console.log("Did mount");
    }

    //any states, props changing
    componentDidUpdate() {
        // fetching data from API using new state/props value
        console.log("did update");
    }

    //clearing function
    componentWillUnmount() {
        // to clear up everything - stop listening to websockets, removing event listeners
        console.log("Will unmount");
    }

    render() {
        const item = this.props.productInfo;
        console.log("render");
        return (
            <Grid>
                <Wrapper>
                    <Img>
                        <img src={item.image} alt="drink"></img>
                    </Img>
                    <Title>{item.title}</Title>
                    <Ingridients>{item.ingridients}</Ingridients>
                    <div>{item.receipt}</div>
                </Wrapper>
            </Grid>
        );
    }
}

export default ProductClass;
