import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Header = styled.header`
    background:#6155a6;
    border: 5px dotted #ffabe1;
    padding:20px;
`;

const List = styled.ul`
    display:flex;
    justify-content:space-between;
`;
const Item = styled.li`
`;

const SLink = styled(Link)`
    color:#ffe6e6;

`;


export default withRouter(({ location: { pathname } }) => (
    <Header>
        <List>
            {/* 
               <Item>
                <div>The movie is Moving:)</div>
            </Item>
             */}
            <Item current={pathname === "/"}>
                <SLink to="/">Movies</SLink>
            </Item>
            <Item current={pathname === "/tv"}>
                <SLink to="/tv">TV</SLink>
            </Item>
            <Item current={pathname === "/search"}>
                <SLink to="/search">Search</SLink>
            </Item>
        </List>
    </Header>
));