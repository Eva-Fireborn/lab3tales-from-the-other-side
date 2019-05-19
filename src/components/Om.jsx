import React from 'react';
import profilePic from '../pics/eva.jpg'
import './Om.scss';

const Om = () => {
    return (
        <div className="about">
            <h3>Sidan skapad av Eva Fireborn</h3>
            <img src={profilePic} alt="Eva Fireborn" />
            <p>Jag pluggar Frontendprogrammering på EC-utbldning i Göteborg.
                 Denna sida är en skoluppgift där vi i React skulle sätta upp en databas i firestore.
            </p>
            <a href="https://se.linkedin.com/in/eva-fireborn-b78971171">Min Linked-in</a>
            <p>Credit: <br></br>
            <a href="https://images.pexels.com/photos/158229/lost-places-pforphoto-leave-factory-158229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">Foto av Pixabay från Pexels</a><br></br>
            <a href="https://codepen.io/tobyj/pen/QjvEex">Ljusanimation av Toby från Codepen.</a><br></br>
            </p>
        </div>
    )
}
export default Om;