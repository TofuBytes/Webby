import React from "react";
import { Nav, NavLink, NavMenu, NavMenuL, NavMenuR} from "./NavbarElements.js";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenuL>

                    <NavLink to="/" activeStyle>
                        Tran
                    </NavLink>

                </NavMenuL>

                <NavMenuR>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>

                    <NavLink to="/contact" activeStyle>
                        Contact
                    </NavLink>

                    <NavLink to="/blog" activeStyle>
                        Blogs
                    </NavLink>
                </NavMenuR>

            </Nav>
        </>
    );
};
 
export default Navbar;