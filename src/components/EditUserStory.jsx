import React, {useState} from 'react';

const EditUserStory = ({story, handleClickUpdateStory}) => {
    const [newHeader, setNewHeader] = useState(story.header);
    const [newStory, setNewStory] = useState(story.story);
    const [newUser, setNewUser] = useState(story.userName);

    return (
        <div className="editStory">
            <input className="input" type="text" value={newHeader} placeholder="Rubrik" onChange={e => setNewHeader(e.target.value)} /> <br></br>
            <textarea className="input" rows="15" cols="150" value={newStory} placeholder="Skriv din historia" onChange={e => setNewStory(e.target.value)} /> <br></br>
            <input className="input" type="text" value={newUser} placeholder="Namn" onChange={e => setNewUser(e.target.value)} /> <br></br>
            <button className="button" onClick={e => handleClickUpdateStory(newHeader, newStory, newUser, story.id)} disabled={newHeader === '' || newStory === '' || newUser === ''}>Ändra historien</button>
        </div>
    )
}
export default EditUserStory;