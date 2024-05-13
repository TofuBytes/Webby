
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
    background: black;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    width: 39rem;
    font-size:1.2rem;
    font-weight: bold;
    margin-top:1.35rem;

`;
 
export const NavLink = styled(Link)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #4d4dff;
    }
`;
 
export const NavMenuR = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
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
    margin-left: -16px;
    /* Third Nav */
    /* width: 100vw;
    white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;