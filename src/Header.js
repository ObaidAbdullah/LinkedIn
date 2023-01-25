import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Chair } from '@mui/icons-material';
import Avatar from './Images/Avatar.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import userSlice, { logout, selectUser } from './features/userSlice';


function Header() {
    
    const dispatch = useDispatch();
    

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    };
    return (
        <div className ='header'>
            <div className="header__left">
                    
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
                    <div className="header__search">
                        <SearchIcon/>
                        <input placeholder='Search' type="text" />
                    </div>
            </div>
            <div className="header__right">
                <HeaderOptions Icon={HomeIcon} title="Home"/>
                <HeaderOptions Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOptions  Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOptions  Icon={ChatIcon} title="Messaging"/>
                <HeaderOptions  Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOptions avatar= {true} title="Me" onClick={logoutOfApp} />
            </div >
            
        </div>
    );
}

export default Header