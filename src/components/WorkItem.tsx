import React, { useState } from 'react';
import classes from '../styles/WorksStyles.module.scss';
import Modal from './Modal';

interface Props{
    number?: number,
    work?: any,
    key?: number,
};

function WorkItem({number, work}: Props) {

    const [visible, setVisible] = useState(false)

    let btncl = classes.btn;

    if (visible){
        btncl = classes.btnA
    }
    
    return (
        <div>
            <div onClick={() => setVisible(true)} className={classes.item}>
                <div className={classes.number}>{number}</div>
                <div className={classes.picture}>
                    <img width='100px' height='100px' src={work.pic} alt='image'></img>
                </div>
                <div className={classes.name}>{work.name}</div>
            </div>
            <Modal visible={visible} setVisible={setVisible} work={work}/>
        </div>

    );
}

export default WorkItem;