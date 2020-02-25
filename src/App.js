import React, { Component } from "react";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import { connect } from "react-redux";
import { addToCart } from "./action/cartActions";
//import { Card, Button } from "react-bootstrap";
import {
    Switch,
    Route
} from "react-router-dom";
import Footer from "./components/Footer/Footer";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'items': this.props.items,
            'active': ''
        }

    }
    componentDidMount(){
        this.state = {
            'items': this.props.items,
            'active': ''
        }
    }

    render() {
        return (
            <div className="App container">
                <div className="row">
                    <div className="col-md-12">
                        <Header  {...this.props} addedItems={this.props.addedItems} />
                    </div>
                </div>
                <div className="row ">
                        <Switch>
                            <Route path="/cart" component={Cart} />
                            <Route exact path="/" component={Home} />
                        </Switch>
                </div>
                <div className="row"><Footer/></div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        items: state.cart.items,
        addedItems:state.cart.addedItems
    };
};
const mapDispatchToProps = dispatch => {
    return {
        addToCart: id => {
            dispatch(addToCart(id));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
