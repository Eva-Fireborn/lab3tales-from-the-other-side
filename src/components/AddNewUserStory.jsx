import React, {useState}from 'react';

const AddNewUserStory = ({handleClickNewStory}) => {
    const [newHeader, setNewHeader] = useState('');
    const [newStory, setNewStory] = useState('');
    const [newUser, setNewUser] = useState('');

    const handleButtonClick = () => {
        handleClickNewStory(newHeader, newStory, newUser);
        setNewHeader('');
        setNewStory('');
        setNewUser('');
    }
    
    return (
        <div>
            <input className="input" type="text" value={newHeader} placeholder="Rubrik" onChange={e => setNewHeader(e.target.value)} /> <br></br>
            <textarea className="input" rows="15" cols="150" value={newStory} placeholder="Skriv din historia" onChange={e => setNewStory(e.target.value)} /> <br></br>
            <input className="input" type="text" value={newUser} placeholder="Namn" onChange={e => setNewUser(e.target.value)} /> <br></br>
            <button className="button" onClick={handleButtonClick} disabled={newHeader === '' || newStory === '' || newUser === ''}>Lägg till historia</button>
        </div>
    )
}
export default AddNewUserStory;