import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <nav>
                <div class="nav-wrapper">
                    <NavLink to="/" class="brand-logo">DECODE</NavLink>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><NavLink activeClassName="base-link" to="/upload">Upload Photo</NavLink></li>
                        <li><NavLink activeClassName="base-link" to="/throwback">Throwback</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;