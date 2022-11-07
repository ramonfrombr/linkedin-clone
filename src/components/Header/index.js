import React from 'react';

import {
    Container,
    LeftSide,
    RightSide,
    SearchContainer
} from './HeaderComponents.js';

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from './HeaderOption';
import { useDispatch } from 'react-redux';
import { auth } from '../../firebase.js';
import { logout } from '../../features/userSlice'
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';


function Header() {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    }

    return (
        <Container>
            <LeftSide>
                <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="" />
                <SearchContainer>
                    <SearchIcon />
                    <input type="text" />
                </SearchContainer>
            </LeftSide>

            <RightSide>
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />

                {user && (
                    <HeaderOption
                        profileOption={true}
                        title="me"
                        onClick={logoutOfApp}
                    />
                )}
            </RightSide>
        </Container>
    )
}

export default Header