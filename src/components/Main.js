import React, { useEffect } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {baseUrl} from "../shared/baseUrl"

import ToolBars from "./Toolbars";
import Home from "./Home";
import Upload from "./Upload";
import Throwback from "./Throwback";


const Main = () => {
    
    const upload = (formData) =>{
        fetch(baseUrl, "users",{
            method: "POST",
            
        })
    }
    useEffect(() => {
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <TransitionGroup>
                <CSSTransition classNames="page" timeout={300}>
                    <div>
                        <Switch>
                            <Route path="/" component={() => <Home  />} exact />
                            <Route path="/upload" component={() =><Upload />} exact/>
                            <Route path="/throwback" component={() => <Throwback/> } exact/>
                            <Redirect to="/"/>
                        </Switch>
                        <ToolBars/>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}

export default Main;