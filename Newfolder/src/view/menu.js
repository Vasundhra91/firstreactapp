import React from "react";
import {Link} from "react-Router"

export const header =(props)=>
{
    return(
        <nav className="navbar navbar-default">
            <div className="container">
                <div header ="navbar-header">
                    <ui className="nav navbar-nav">
<li><Link to={"/"}></Link></li>
<li><Link to={"/"}></Link></li>
                    </ui>
                </div>
            </div>
        </nav>
    )
}