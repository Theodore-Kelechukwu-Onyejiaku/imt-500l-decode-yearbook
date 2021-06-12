import React, { useEffect } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { TransitionGroup } from "react-transition-group";

import ToolBars from "./Toolbars";
import Home from "./Home";
import Upload from "./Upload";


const Main = () => {
    useEffect(() => {
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <TransitionGroup>
                {/* <CSSTransition key={props.location.key} classNames="page" timeout={300}> */}
                    <div>
                        <Switch>
                            <Route path="/" component={() => <Home  />} exact />
                            <Route path="/upload" component={() =><Upload />} />
                            {/* <Route path="/" component={() => {Stories}} /> */}
                            <Redirect to="/"/>
                        </Switch>
                        <ToolBars/>
                    </div>
                {/* </CSSTransition> */}
            </TransitionGroup>
        </div>
    )
}

export default Main;