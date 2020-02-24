import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../action/cartActions";
import Filter from "../filter/Filter";
import SortBy from "../filter/SortBy"
import List from "../List/List";
import Popup from '../popup/Popup'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'items': this.props.items,
            'active': '',
            showPopup: false,
            moduelname:''
        }
    }
    togglePopup(module) {
        this.setState({
          showPopup: !this.state.showPopup,
          moduelname:module
        });
        //console.log("___________________");
      }

    handleClick = id => {
        this.props.addToCart(id);

    };


    sortItemBy = (field, items, flag) => {
        let sortItems = items.sort((a, b) => {
            if (flag) {
                return (a[field] > b[field]) ? -1 : (a[field] < b[field]) ? 1 : 0;

            } else {
                return (a[field] < b[field]) ? -1 : (a[field] > b[field]) ? 1 : 0;

            }

        });
        console.log(sortItems);
        this.setState({ items: sortItems });
    }
    render() {
        return (<>
            <div className={'row filterAndSortMenu'}>
                    <button type="button" class="btnx btn-primary btn-block" onClick={this.togglePopup.bind(this,"filter")}>Filter</button>
                    <button type="button" class="btnx btn-primary btn-block" onClick={this.togglePopup.bind(this,"sortby")}>SortBy</button>
            </div>
            <div className="col-md-2 side-bar">
                <Filter />
            </div>
            <div className="col-md-10">
                <div className={"container"}>
                    <div className={"row sortinByItem"}>

                        <SortBy sortItemBy={this.sortItemBy} {...this.props} />
                    </div>

                    <div className={"row listing-data"}>
                        <List {...this.props} />
                    </div>
                </div></div>
                {this.state.showPopup ? 
          <Popup
            text='Close Me'
            closePopup={this.togglePopup.bind(this)}
            Component={this.state.moduelname==="filter"?<Filter />:<SortBy sortItemBy={this.sortItemBy} {...this.props}/>}
          />
          : null
        }
                </>);
    }
}
const mapStateToProps = state => {
    return {
        items: state.seachReducer.items,

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
)(Home);
