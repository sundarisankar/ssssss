import React from "react";
import { Link } from "react-router-dom";
function Navbar()
{
    return (<nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/Skills">Skills</Link>
        <Link to="/Address">Address</Link>

    </nav>)
}
export default Navbar;