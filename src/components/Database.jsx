import React, {useState, useEffect} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import RenderUserStory from './RenderUserStory';
import AddNewUserStory from './AddNewUserStory';
import EditUserStory from './EditUserStory';
import './Database.scss';

const Database = () => {
    const [userStoriesData, setUserStoriesData] = useState(null);
    const [tabIndex, setTabIndex] = useState(0);
    const [selectedStory, setSelectedStory] = useState(null);
    //const db = firebase.firestore();
    //const userStoriesCollection = db.collection('talesFromTheDarkSide');

    useEffect( () => {
        const userStoriesCollection = firebase.firestore().collection('talesFromTheDarkSide');
        userStoriesCollection.onSnapshot( snapshot => {
            let list = [];
            snapshot.forEach(doc => {
                let obj = {
                    ...doc.data(),
                    id: doc.id
                };
                list.push(obj);
            })
            setUserStoriesData(list);
        })
    }, [] )

    const handleClickInnerMenu = (tabIndex) => {
        setTabIndex(tabIndex);
    }
    const handleClickNewStory = (header, story, user) => {
        let obj = {
            header: header,
            story: story,
            userName: user
        }
        const userStoriesCollection = firebase.firestore().collection('talesFromTheDarkSide');
        userStoriesCollection.add(obj).then(console.log('Tillagd historia')).catch(error => console.error(error));
    }
    const handleClickRemoveStory = (id) => {
        const userStoriesCollection = firebase.firestore().collection('talesFromTheDarkSide').doc(id);
        userStoriesCollection.delete().then(console.log('Borttagen historia')).catch(error => console.error(error));
    }
    const handleClickEditStory = (story) => {
        setSelectedStory(story);
        setTabIndex(2);
    }
    const handleClickUpdateStory = (header, story, user, id) => {
        let obj = {
            header: header,
            story: story,
            userName: user
        }
        const userStoriesCollection = firebase.firestore().collection('talesFromTheDarkSide').doc(id);
        userStoriesCollection.update(obj).then(console.log('uppdaterat')).catch(error => console.error(error));
        setTabIndex(0);
    }
    
    let content = null;
    if (userStoriesData && tabIndex === 0){
        content = userStoriesData.map(story => (
            <RenderUserStory key={story.id} story={story} handleClickRemoveStory={handleClickRemoveStory} handleClickEditStory={handleClickEditStory} />
        ));
    } else if(tabIndex === 1){
        content = <AddNewUserStory handleClickNewStory={handleClickNewStory}/>;
    }
    else if (tabIndex === 2){
        content = <EditUserStory story={selectedStory} handleClickUpdateStory={handleClickUpdateStory}/>
    }
    return (
        <div>
            <ul className="innerMenu">
                <li onClick={e => handleClickInnerMenu(0)} className={tabIndex === 0 ? 'selectedLi' : ''}>Historier</li>
                <li onClick={e => handleClickInnerMenu(1)} className={tabIndex === 1 ? 'selectedLi' : ''}>Lägg till din egen historia</li>
            </ul>
            {content}
        </div>
    )

}
export default Database;