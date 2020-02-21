import React,{useState} from "react";
const SortBy = (props) => {
    const [active,setActive]=useState('');
    return <>
        <div className="row sort-by">
         <div className="title">Sort By</div>
            <ul>
                <li  key={1}  className={active === 1 ? 'active' : ''}
                  onClick={()=>{props.sortItemBy('price',props.items,1);setActive(1)}} >Price -- High Low</li>
                <li key={2} className={active === 2 ? 'active' : ''} onClick={()=>{props.sortItemBy('price' ,props.items);setActive(2)}}>Price -- Low High</li>
                <li key={3} className={active === 3 ? 'active' : ''} onClick={()=>{props.sortItemBy('discount', props.items);setActive(3)}}>Discount</li>    
            </ul>
        </div>
    </>

}

export default SortBy;