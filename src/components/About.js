import React from 'react';

function About(props){
    return(
        <>
        <aside>
            <img src={props.src} alt="" placeholder="https://via.placeholder.com/215"></img>
            <p>{props.about}</p>
        </aside>
        </>
    )
}

export default About;