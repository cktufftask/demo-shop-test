
import React from "react";
import { Navbar } from "react-bootstrap";
import Search from '../components/Search/Search';
import { Link } from "react-router-dom";
//import { withRouter } from 'react-router';

const Header = (props) => {
    const { addedItems } = props;
    let addQ=0;
    //let totQ= addedItems.map((it)=> addQ = addQ+it.quantity);
    return (
        <Navbar className="navbar navbar-dark bg-primary justify-content-between">
            <div className="col-6">
                <Link to={'/'}>
                    <img src="images/icon.png"  height={'50px'}/>
                </Link>
            </div>
            <div className="col-6 text-right left-head" >
            <div>
               {/* <span>{ `${addedItems.map((it)=> addQ = addQ+it.quantity)}` }</span> */}
                <Link to={'/cart'} className={'link'}>
                    <i class="mycart fa-cart-plus pl-5" aria-hidden="true"> <span className="cartNumber">{addedItems.length}</span>
                    </i>
                </Link>
                </div>
                <Search />
               
                
            </div>
        </Navbar >
    );
};


export default Header;
