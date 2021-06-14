import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect} from "react-router-dom";
import { TransitionGroup} from "react-transition-group";
import M from 'materialize-css/dist/js/materialize.min.js'
import {baseUrl} from "../shared/baseUrl"

import ToolBars from "./Toolbars";
import Home from "./Home";
import Upload from "./Upload";
import Throwback from "./Throwback";
import KindMessage from "./KindMessage";
import Messages from "./Messages";
import Navigation from "./Navigation";
import ToolbarFix from "./ToolbarFix";



const Main = () => {
    const [users, setUsers] = useState([]);
    const [uploadLoading, setUploadLoading] = useState(false);

    const uploadYearPhoto = (formData) =>{
        setUploadLoading(!uploadLoading)
        fetch(baseUrl+"users",{
            method: "post",
            headers: {
                'Accept': 'application/json',
                "Content-type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then(response =>{
            if(response.ok){
                return response.json()
            }else{
                throw new Error("Something went wrong")
            }
            // return response.json();
        })
        .then(result =>{            
                setUsers(result.user, ...users)
                M.toast({ html: result.message, classes:"green white-text" })
                setUploadLoading(uploadLoading)

        })
        .catch(error =>{
            console.log("error again")
            M.toast({ html: error.message, classes:"red white-text" });
            setUploadLoading(uploadLoading)
        })
    }

    useEffect(() => {
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <TransitionGroup>
                    <div>
                        <Navigation/>
                        <Switch>
                            <Route path="/" component={() => <Home  users={users}/>} exact />
                            <Route path="/upload" component={() =><Upload loading={uploadLoading}  uploadYearPhoto={uploadYearPhoto}/>}/>
                            <Route path="/throwback" component={() => <Throwback/> } />
                            <Route path="/user/:id" component={()=> <KindMessage /> } exact/>
                            <Route path="/user/:id/messages" component={()=> <Messages /> } exact/>
                            <Redirect to="/"/>
                        </Switch>
                        <ToolbarFix/>
                        <ToolBars/>
                    </div>
            </TransitionGroup>
        </div>
    )
}

export default Main;