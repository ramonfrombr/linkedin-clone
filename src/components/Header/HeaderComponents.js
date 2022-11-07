import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    border-bottom: 0.1px solid lightgray;
    padding-top: 10px;
    padding-bottom: 10px;
    position: sticky;
    top: 0;
    z-index: 999;
    background-color: white;
`;

export const LeftSide = styled.div`
    display: flex;

    & > img {
        object-fit: contain;
        height: 40px;
        margin-right: 10px;
    }
`;

export const RightSide = styled.div`
    display: flex;

`;

export const SearchContainer = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    height: 22px;
    color: gray;
    background-color: #eef3f8;

    & > input {
        outline: none;
        border: none;
        background: none;
    }
`;
