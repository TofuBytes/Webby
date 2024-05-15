
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
    background:  #13131A;
    border-bottom: 1px solid white;
    display: flex;
    justify-content: space-between;
    /*width: 45rem;
    font-size:1.35rem;
    font-weight: bold;
    margin-top:1.35rem;
    align-items: flex-start;
`;
 
export const NavLink = styled(Link)`
    min-height: 7vh;
    align-items: center;
    color: white;
    display: flex;
    font-size:1.2rem;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #4d4dff;
    }
    margin-bottom: .5rem;
`;
 
export const NavMenuR = styled.div`
    display: flex;
    align-items: right;
    margin-right: 36rem;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavMenuL = styled.div`
    display: flex;
    align-items: left;
    /* Second Nav */
    margin-left: 36rem;
    /* Third Nav */
    /* width: 100vw;
    white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;