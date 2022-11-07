import React from 'react'
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';


function HeaderOption({ profileOption, Icon, title, onClick }) {

    const user = useSelector(selectUser);

    return (
        <Container onClick={onClick}>
            {Icon && <Icon />}
            {profileOption &&
                <AvatarStyled src={user?.photoUrl}>
                    {user?.email[0]}
                </AvatarStyled>
            }
            <Title>{title}</Title>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
    color: gray;
    cursor: pointer;

    :hover {
        color: black;
    }
`;

const AvatarStyled = styled(Avatar)`
    object-fit: contain;
    height: 25px !important;
    width: 25px !important;
`;

const Title = styled.h3`
    font-size: 12px;
    font-weight: 400;
`;

export default HeaderOption