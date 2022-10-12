import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import img from '../images/d.png';
import classes from '../styles/MainStyles.module.scss';

function MainPage() {
    return (
        <div className={classes.main}>
            <div className={classes.textContainer}>
                <div className={classes.headline}>Welcome to my site!</div>
                <div className={classes.text}>
                    Greetings! Long story short, this site was created by *me* to act as a digital portfolio.
                </div>
                <div className={classes.text}>
                    Here you can find various info about me: projects that I made, my contacts, my current skills, views and stuff.
                </div>
                <div className={classes.text}>
                    Hope you'll give this site a try and look at its pages.
                    And *ahem* will consider hiring me~
                </div>
            </div>
            <div>
                <img width='300px' height='300px' src={img}></img>
            </div>
        </div>
    );
}

export default MainPage;