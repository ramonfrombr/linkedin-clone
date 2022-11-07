import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';

export const Container = styled.div`
    position: sticky;
    top: 80px;
    flex: 0.2;
    border-radius: 10px;
    text-align: center;
    height: fit-content;
`;

export const Top = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid lightgrey;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: white;
    padding-bottom: 10px;

    & > img {
        margin-bottom: -20px;
        width: 100%;
        height: 60px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        object-fit: cover;
    }

    & > h4 {
        color: gray;
        font-size: 12px;
    }

    & > h2 {
        font-size: 18px;
    }
`;

export const AvatarStyled = styled(Avatar)`
    width: 50px;
    height: 50px;
`;

export const Stats = styled.div`
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid lightgrey;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: white;
`;

export const Stat = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;

    & > p {
        color: grey;
        font-size: 13px;
        font-weight: 600;
        
    }
`;

export const StatNumber = styled.p`
    font-weight: bold;
    color: #0a66c2 !important;
`;

export const Bottom = styled.div`
    text-align: left;
    padding: 10px;
    border: 1px solid lightgray;
    background-color: white;
    border-radius: 10px;
    margin-top: 10px;
`;

