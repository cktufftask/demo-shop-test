
import React,{Component} from 'react';

class Tost extends Component {

    render() {
      return (
        <div className='popup'>
          <div className="close-me"><i onClick={this.props.closePopup}>X</i></div>
          <div className='popup_inner'>
            {this.props.Component}
          
          </div>
        </div>
      );
    }
  }

export default Tost;