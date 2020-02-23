import React, { Component } from "react";
//import Slider from 'react-rangeslider';
import Slider from "../slider/Myslider"
import { connect } from 'react-redux';
import { FilterPrice } from '../../action/searchAction';
import 'react-rangeslider/lib/index.css'



class Filter extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            size:'',
            value:[]
        }
    }
    handleChange = (newValue) => {
        this.setState({value:newValue});
      };
    
    handleChangeHorizontal = value => {
        this.setState({
            horizontal: value
        })
    };

    handleChangeVertical = value => {
        this.setState({
            vertical: value
        })
        
    };

    render() {
       return (
           <>
            <div className='slider custom-labels'>
                <Slider handleChange={this.handleChange} />
                <div className={"btn-center"}> 
                    <button type="button" class="btn btn-success" onClick={()=>{this.props.FilterPrice(this.state.value)}}>Apply</button>
                 </div>
            </div>
           </> 
        )
    }

}

const mapStateToProps = state => {
    return {
        items: state.cart.items
    };
};

const mapDispatchToProps = dispatch => {
    return {
        FilterPrice: value => {
            dispatch(FilterPrice(value));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);

