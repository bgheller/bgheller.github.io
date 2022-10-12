import React from 'react';
import cog from '../images/cog.png';
import classes from '../styles/LoadingStyles.module.scss';

function Loading() {
    return (
        <div className={classes.cogContainer}>
            <img className={classes.cog} src={cog}></img>
        </div>
    );
}

export default Loading;