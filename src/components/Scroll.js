import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflow: 'scroll', border: '10px groove gray', height: '800px', width: '100%'}}> 
            {props.children}
        </div>
        
 );
};
// to render what is inside: children! cardlist is its children. So it will render its children.
// so we get props, the object, the children, which will have the cardlist. 
// { js expression.}
export default Scroll;
