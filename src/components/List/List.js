import React from 'react';
import { Card, Button } from "react-bootstrap";


const List=(props)=>{
    const findPrice=(price, discount)=> {
        let x = 100;
        let y = x - discount;
        let z = price * x;
        return Math.round(z / y);
    }
    return (  
        props.items.length===0?<div>No Result Found</div>:

        props.items.map(item => {
        return (
            <Card className={"text-center px-md-5"} key={item.id}>
                <Card.Img variant="top" src={item.img_url} alt={item.name} />
                <Card.Body>
                    <div className="card-title">{item.name}</div>
                    <div className="card-price"><span>&#8377;</span> {item.price} <div className="price-details">
                        <span className="actual-price">{findPrice(item.price, item.discount)}</span>
                        <span className="discount-on-item">{item.discount + "% off"} </span>

                    </div>
                    </div>
                </Card.Body>
                <Card.Footer>
                    {item.quantity === 0 ? (
                        <Button
                            variant="info"
                            disabled
                            onClick={() => props.addToCart(item.id)}
                        >Add to cart
        </Button>
                    ) : (
                            <Button className="btn" variant="info" onClick={() => props.addToCart(item.id)}>
                                Add to cart
        </Button>
                        )}
                </Card.Footer>
            </Card>
        );
    }))

}

export  default List;