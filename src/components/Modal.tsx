import React, { useState } from 'react';
import classes from '../styles/WorksStyles.module.scss';

interface Props{
    work?: any,
    visible?: boolean,
    setVisible?: any,
};

function Modal({work, visible, setVisible}: Props) {

    const rootClasses = [classes.modal]
    
    if (visible){
        rootClasses.push(classes.active)
    }

    return (
        <div onClick={() => setVisible(false)} className={rootClasses.join(' ')}>
            <div onClick={e => e.stopPropagation()} className={classes.modalContent}>
                <img className={classes.modalImg} width='150px' height='150px' src={work.pic} alt='image'></img>
                <div className={classes.modalName}>{work.name}</div>
                <div className={classes.modalDesc}>{work.desc}</div>
                <div className={classes.modalTags}>Technologies used: {work.tags.join(', ')}</div>
            </div>
        </div>
    );
}

export default Modal;
