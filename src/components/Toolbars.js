import React from "react";
import {NavLink} from "react-router-dom"

export default function ToolBars() {
  return (
    <>
    <div className="container hide-on-med-and-up" style={{display:"flex", justifyContent: "space-around", position:"fixed",bottom:"0px",width:"100%",left:"0px",overflowX:"scroll",zIndex:"1"}}>
        <div><NavLink className="btn-floating btn-large waves-effect waves-light " activeClassName="base-link" to="/"><i className="fa fa-home"></i></NavLink></div>
        <div><NavLink className="btn-floating btn-large waves-effect waves-light " activeClassName="base-link" to="/upload"><i className="fa fa-upload"></i></NavLink></div>
        <div><NavLink className="btn-floating btn-large waves-effect waves-light " activeClassName="base-link" to="/throwback"><i className="fa fa-book"></i></NavLink></div>
    </div>
    </>
  )
}