import React from 'react';
import {
    Container,
    Top,
    Bottom,
    Stats,
    Stat,
    StatNumber,
} from './SidebarComponents';
import Avatar from '@mui/material/Avatar';
import background from "../../static/images/linkedin-background.jpeg";
import './styles.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="recentItem">
            <span className="hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <Container>
            <Top>
                <img src={background} alt="" />
                <Avatar src={user.photoUrl}>{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </Top>

            <Stats>
                <Stat>
                    <p>Who viewd you</p>
                    <StatNumber>2,123</StatNumber>
                </Stat>
                <Stat>
                    <p>Views on post</p>
                    <StatNumber>5,456</StatNumber>
                </Stat>
            </Stats>

            <Bottom>
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('software engineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </Bottom>
        </Container>
    );
}

export default Sidebar