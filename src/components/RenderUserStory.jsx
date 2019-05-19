import React from 'react';

const RenderUserStory = ({story, handleClickRemoveStory, handleClickEditStory}) => {
    return (
        <div className="story">
            <h3>{story.header}</h3>
            <p>{story.story}</p>
            <p className="user" >Inlagd av: {story.userName}</p>
            <span role="img" className="removeStory" aria-label="Radera historia" label="Radera historia" onClick={e => handleClickRemoveStory(story.id)}>⚔️</span>
            <span role="img" className="editStory" aria-label="Redigera historia" label="Redigera historia" onClick={e => handleClickEditStory(story)}>✒️</span>
        </div>
    )
}
export default RenderUserStory;