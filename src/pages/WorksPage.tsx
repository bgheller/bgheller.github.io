import React, { useState } from 'react';
import Header from '../components/Header';
import WorkForm from '../components/WorkForm';
import WorkList from '../components/WorkList';
import d from '../images/d.png';
import port from '../images/port.png';

interface Work{
    id: number,
    pic?: any,
    name: string,
    desc: string,
    tags: string[],
    glink: string,
};

function WorksPage() {

    const [works, setWorks] = useState([
        {
            id: Date.now(),
            pic: port,
            name: 'Portfolio-site',
            desc: 'Interactive site, that shows usefull information about me.',
            tags: ['React', 'JavaScript', 'TypeScript', 'Webpack', 'SCSS'],
            glink: `You're already here!`
        },
        //{
        //    id: Date.now() + 1,
        //    name: 'Calculator',
        //    desc: 'Why not...',
        //    tags: ['React', 'JavaScript', 'SCSS']
        //}
    ]);
    
    return(
        <div>
            <WorkList works={works}/>
        </div>
    )
}

export default WorksPage;