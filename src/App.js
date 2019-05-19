import React, {useState } from 'react';
import './App.scss';
import pic from './pics/abandoned-broken-chair.jpg';
import TabComponent from './components/TabComponent';
import Home from './components/Home';
import Om from './components/Om';
import Database from './components/Database';

function App() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleClickTab = (tab) => {
    setSelectedTab(tab);
  }
  return (
    <div className="App">
      <ul className="lightrope">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="menu">
        <h1 onClick={() => handleClickTab(0)}>berättelser från andra sidan</h1>
        <ul>
          <li onClick={() => handleClickTab(0)} className={selectedTab === 0? 'selected' : ''}>Hem</li>
          <li onClick={() => handleClickTab(1)} className={selectedTab === 1? 'selected' : ''}>Historier</li>
          <li onClick={() => handleClickTab(2)} className={selectedTab === 2? 'selected' : ''}>Om</li>
        </ul>
      </div>
      <main>
        <div className="backgroundPic">
          <img src={pic} alt="bakgrundsbild"/>
            <div className="content">
              <TabComponent selectedTab={selectedTab}>
                <Home/>
                <Database />
                <Om/>
              </TabComponent>
            </div>
        </div>
      </main>
        
    </div>
  );
}

export default App;
