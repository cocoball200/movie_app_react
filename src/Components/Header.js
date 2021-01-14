import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Header = styled.header`
    color:white;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:50px;
    display:flex; 
    `;

const List = styled.ul`
    height:68px;
    display:flex;
    justify-content:space-between;
`;
const Item = styled.li`
    margin-right: 30px;
     
    
`;
const SLink = styled(Link)`
    text-decoration:none;
`;



export default withRouter(({ location: { pathname } }) => (
    <Header>
        <List>
            <Item>
                <SLink to="/">This movies are Moving:)</SLink>
            </Item>
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