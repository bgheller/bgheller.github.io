import React from 'react';
import WorkItem from './WorkItem';
import classes from '../styles/WorksStyles.module.scss';


interface Props{
    works?: any,
};

function WorkList({works}: Props) {

    return (
        <div className={classes.itemList}>
            {
                works.map((work: any, index: number) =>
                    <WorkItem number={index + 1} work={work} key={work.id} />,
                )
            }
        </div>
    );
}

export default WorkList;