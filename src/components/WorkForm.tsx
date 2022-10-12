import React, { useState } from 'react';

interface Props{
    addWork?: any,
};

function WorkForm({addWork}: Props) {

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [tags, setTags] = useState([]);
    const [tag, setTag] = useState('');

    const handleAddingWork = () => {
        
        const newWork = {
            id: Date.now(),
            name,
            desc,
            tags
        }

        addWork(newWork);
        setName('');
        setDesc('');
        setTags([])
    }

    const handleAddingTag = () => {
        setTags([...tags, tag])
        setTag('');
    }

    return (
        <div>
            <form>
                <input value={name} onChange={e => setName(e.target.value)} placeholder='name...' type='text'></input>
                <input value={desc} onChange={e => setDesc(e.target.value)} placeholder='description...' type='text'></input>
                <input value={tag} onChange={e => setTag(e.target.value)} placeholder='tags' type='text'></input>
                <button onClick={handleAddingTag} type='button'>add tag</button>
                <button onClick={handleAddingWork} type='button'>submit</button>
            </form>
            <div>
                <h2>Your post will look like this</h2>
                <h4>Name: {name}</h4>
                <h5>Description: {desc}</h5>
                <h6>Tags: {tags.join(', ')}</h6>
            </div>
        </div>
    );
}

export default WorkForm;