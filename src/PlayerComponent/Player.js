import React from 'react';
import Footer from './FooterComponent/Footer';
import './Player.css';
import Sidebar from './SideBarComponent/Sidebar';
import Body from './BodyComponent/Body';

function Player({ spotify }) {
  return (
    <div className='player'>
      <div className='playerBody'>
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;
