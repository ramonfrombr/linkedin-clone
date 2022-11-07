import React, { forwardRef } from 'react';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import InputOption from './InputOption';

import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


const Post = forwardRef(({ name, description, message, photoUrl, }, ref) => {
    return (
        <Container ref={ref}>
            <Header>
                <Avatar src={photoUrl}>{name}</Avatar>
                <PostInfo>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </PostInfo>
            </Header>

            <PostBody>
                <p>{message}</p>
            </PostBody>

            <PostButtons>
                <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
                <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
                <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
                <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
            </PostButtons>
        </Container>
    )
})

const Container = styled.div`
    background-color: white;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 10px;
`;

const Header = styled.div`
    display: flex;
    margin-bottom: 10px;
    
`;

const PostInfo = styled.div`
    margin-left: 10px;

    & > p {
        font-size: 12px;
        color: gray;
    }

    & > h2 {
        font-size: 15px;
    }
`;

const PostBody = styled.div`
    overflow-wrap: anywhere;
`;


const PostButtons = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export default Post