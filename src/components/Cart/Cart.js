import React, { Component } from "react";
import { connect } from "react-redux";
import { removeItem, addQuantity, subtractQuantity } from "../../action/cartActions";
import "./Cart.css";

class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = { totalDisocunt: 0 }
       
    }
    componentDidMount(){
        this.getTotalDiscount();
    }
      
    getTotalDiscount= ()=>{
        let sum=this.state.totalDisocunt;
        this.props.items.map( item => {
             sum=  sum + (this.findPrice(item.price, item.discount) - item.price);
            }) 
      this.setState({totalDisocunt:sum});   
      console.log(this.state.totalDisocunt,"totalDiscount");

    }
    handleRemove = id => {
        this.props.removeItem(id);
        this.getTotalDiscount();
    };
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
        this.getTotalDiscount();

    };
    handleSubtractQuantity = (id, quantity) => {
        if (quantity !== 0)
            this.props.subtractQuantity(id);
        else
            return
    };
    findPrice = (price, discount) => {
        let x = 100;
        let y = x - discount;
        let z = price * x;
        return Math.round(z / y);
    }

    totalDiscount = (price, discount) => {
        this.setState({ totalDisocunt: this.state.totalDisocunt + (this.findPrice(price, discount) - price) });
    }


    render() {
        let addedItems = this.props.items.length ? (
            this.props.items.map(item => {
                return (
                    <ul className={"row ml-0"} key={item.id}>
                        <li className={"col-8 list-group-item"}>
                            <h4>{item.name}</h4>
                            <p>
                                <img variant="top" src={item.img_url} alt={item.name} height="50px" width="50px" />

                                <span className={"mr-3 font-weight-bold"}>
                                    <span>&#8377;</span>{item.price}
                                </span>
                                <span className="actual-price">{this.findPrice(item.price, item.discount)}</span>
                                <span className="discount-on-item">{item.discount + "% off"} </span>

                                <button
                                    onClick={() => {
                                        this.handleSubtractQuantity(item.id, item.quantity);
                                    }}
                                    className={"btn btn-primary mr-3"}>-</button>
                                {item.quantity}
                                <button
                                    onClick={() => {
                                        this.handleAddQuantity(item.id, item.quantity);
                                    }}
                                    className={"btn btn-primary ml-3"}>+</button>
                            </p>
                        </li>
                        <li
                            className={
                                "col-4 list-group-item d-flex justify-content-center align-items-center"
                            }
                        >
                            <button
                                className="btn btn-dark"
                                onClick={() => {
                                    this.handleRemove(item.id);
                                }}
                            >
                                Remove
                </button>
                        </li>
                    </ul>

                );
            })
        ) : (
                <p>No Item found in  cart.</p>
            );

        let totalItems = this.props.total;
        //console.log(this.props, "this.props", totalItems, "totalItems");
       // let sum=0;
        return (
            <div className="container di">
                <div className="col-md-8">
                    <div className="cart">
                        <h5>Your Cart:</h5>
                        <ul className="collection">
                            {addedItems}

                        </ul>
                    </div>
                </div>
                <div className="col-md-4" style={{ paddingTop: '50px' }}>
                    <div> <strong>Price Details</strong> </div>
                    <ul className={"col ml-0"}>
                        {this.props.items.map((item) => {
                            return (<li
                                className={
                                    "d-flex justify-content-lg-between"
                                }><div>{item.name} ( {item.quantity} )</div> <div>{item.price * item.quantity}</div>

                            </li>)
                        })
                        }
                        <li className={
                            "d-flex justify-content-lg-between"
                        }><div>{"Total Discount"}</div><div>
                            {this.state.totalDisocunt}</div></li>
                        <li className={
                            "d-flex justify-content-lg-between"
                        }> <div>{"Total"}</div><div>{totalItems}</div> </li>
                    </ul>
                </div>
            </div>



        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.cart.addedItems,
        addedItems: state.cart.addedItems,
        total: state.cart.total,
        totalItem: state.cart.totalItem
    };
};
const mapDispatchToProps = dispatch => {
    return {
        removeItem: id => {
            dispatch(removeItem(id));
        },
        addQuantity: id => {
            dispatch(addQuantity(id));
        },
        subtractQuantity: id => {
            dispatch(subtractQuantity(id));
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);