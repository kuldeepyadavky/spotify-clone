import React from 'react';
import './Sidebar.css';
import SidebarOption from './SideBarOptionComponent/SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useStateValue } from '../../ActionState/StateProvider';

function Sidebar() {
  const [{ playlists }] = useStateValue();
  console.log(playlists);

  return (
    <div className='sidebar'>
      <img
        className='sidebarLogo'
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt=''
      />
      <SidebarOption Icon={HomeIcon} option='Home' />
      <SidebarOption Icon={SearchIcon} option='Search' />
      <SidebarOption Icon={LibraryMusicIcon} option='Your Library' />
      <br />
      <strong className='sidebarTitle'>PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
