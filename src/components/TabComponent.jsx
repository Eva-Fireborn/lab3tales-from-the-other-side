import React from 'react';

const TabComponent = props => {
    let selectedTab = props.selectedTab;
    return (
        <div>
            {props.children[selectedTab]} 
        </div>  
    )
}
export default TabComponent;