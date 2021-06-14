import React from "react";
import {NavLink} from "react-router-dom"

export default function ToolBars() {
  return (
    <>
    <div style={{margin:"10% auto"}}>

    </div>
    <div className="container hide-on-large-only" style={{display:"flex", justifyContent: "space-around", position:"fixed",bottom:"10px",width:"100%",left:"0px",overflowX:"hidden",zIndex:"1"}}>
        <div><NavLink activeClassName="base-link" to="/" exact={true}><button className="btn-large"><i className="fa fa-home"></i></button></NavLink></div>
        <div><NavLink activeClassName="base-link" to="/upload"><button className="btn-large"><i className="fa fa-upload"></i></button></NavLink></div>
        <div><NavLink activeClassName="base-link" to="/throwback"><button className="btn-large"><i className="fa fa-book"></i></button></NavLink></div>
    </div>
    </>
  )
}