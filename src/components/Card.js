import React from 'react'; //you're using react, because we're using JSX, not HTML.
import './card.css';

const Card = (props) => { //you can just return one element! 
    //the properties are the parameters as you're using object robots with different names
    //template scripts for props and render the robot at src.
    //destructuring: and you can destructure even more putting these names and props as a parameter above.
    const { name, email, id } = props;
    return (
    <div className='bg-washed-green tc dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img alt='robots' src={`https://robohash.org/${id}?200x200`} />  
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
    );
}

export default Card;