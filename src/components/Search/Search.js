import React, { Component } from "react";
import { FilterTasks } from '../../action/searchAction';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';



class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search: '',
            show:false
        }
    }
   

    changeHandle = (event) => {
        this.setState({ search: event.target.value });
    }
   

    handledSearch = (event) => {
        // const result = this.mysearch();
        // this.setState({ items: result });
        // console.log(this.state.items);
    }
    handleShowHide=(event)=>{
        this.setState({show:!this.state.show});
        if(this.state.show && this.state.search){
            this.setState({show:true});
            this.props.FilterTasks(this.state.search)
        }
    }

    render() {
        console.log(this.props);
        return (
            <div className="active-cyan-3 active-cyan-4 mb-2">
        {this.state.show && <input className="myform-control" type="text" placeholder="Search" aria-label="Search" value={this.state.search} onChange={(event) => this.changeHandle(event)} /> }
                <i className="myfa fa-search" aria-hidden="true" onClick={(event) => { this.handleShowHide(event) }}></i>
            </div>
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
        FilterTasks: value => {
            console.log(value);
            dispatch(FilterTasks(value));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);



