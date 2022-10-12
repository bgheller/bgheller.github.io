import React, { useState } from 'react';
import Header from '../components/Header';
import WorkForm from '../components/WorkForm';
import WorkList from '../components/WorkList';
import d from '../images/d.png';

interface Work{
    id: number,
    pic?: any,
    name: string,
    desc: string,
    tags: string[],
};

function WorksPage() {

    const [works, setWorks] = useState([
        {
            id: Date.now(),
            pic: d,
            name: 'Portfolio-site',
            desc: 'Interactive site, that shows usefull information about me.',
            tags: ['React', 'JavaScript', 'TypeScript', 'Webpack', 'SCSS']
        },
        {
            id: Date.now() + 1,
            name: 'Calculator',
            desc: 'Why not...',
            tags: ['React', 'JavaScript', 'SCSS']
        }
    ]);

    const addWork = (newWork: Work) => {
        setWorks([...works, newWork]);
    }
    
    return(
        <div>
            <WorkList works={works}/>
        </div>
    )
}

export default WorksPage;