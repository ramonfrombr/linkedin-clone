import React from 'react';
import styled from 'styled-components';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <Article>
            <ArticleLeft>
                <FiberManualRecordIcon />
            </ArticleLeft>

            <ArticleRight>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </ArticleRight>
        </Article>
    )

    return (
        <Container>
            <Header>
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </Header>

            {newsArticle("Messi is back in Barcelona", "Sports - 978 readers")}
            {newsArticle("Coronanvirus: UK updates", "Top News - 590 readers")}
            {newsArticle("Bitcoin Breaks $22K", "Crypto - 1008 readers")}
            {newsArticle("Is Redux too good?", "Code - 342 readers")}
            {newsArticle("Tesla hits new highs", "Cars & Auto - 222 readers")}
        </Container>
    )
}

const Container = styled.div`
    position: sticky;
    top: 80px;
    flex: 0.2;
    background-color: white;
    border-radius: 10px;
    border: 1px solid lightgray;
    height: fit-content;
    padding-bottom: 10px;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    & > h2 {
        font-size: 16px;
        font-weight: 400;
    }
`;

const Article = styled.div`
    display: flex;
    padding: 10px;
    cursor: pointer;

    &:hover {
        background-color: whitesmoke;
    }
`;

const ArticleLeft = styled.div`
    color: #0177b7;
    margin-right: 5px;

    & > .MuiSvgIcon-root {
        font-size: 15px;
    }
`;

const ArticleRight = styled.div`
    flex: 1;

    & > h4 {
        font-size: 14px;
    }

    & > p {
        font-size: 12px;
        color: gray;
    }
`;

export default Widgets