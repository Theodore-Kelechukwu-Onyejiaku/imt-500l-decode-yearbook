import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
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




const Main = () => {
    const [users, setUsers] = useState([]);
    const [uploadLoading, setUploadLoading] = useState(false);
     
    const getUsers = () =>{
    }

    const uploadYearPhoto = (formData) =>{
        setUploadLoading(!uploadLoading)
        fetch(baseUrl+"users",{
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                'Accept': 'application/json',
                "Content-type": "application/json",
            }
        })
        .then(response =>{
            if(response.ok){
                return response.json()
            }else{
                throw new Error("Something went wrong")
            }
        })
        .then(result =>{
            if(result.status === "ok"){
                setUsers(result.user, ...users)
                M.toast({ html: result.message, classes:"green white-text" })
                setUploadLoading(uploadLoading)

            }else{
                M.toast({ html: result.message, classes:"red white-text" })
                setUploadLoading(uploadLoading)
                return
            }
        })
        .catch(error =>{
            M.toast({ html: "Something went wrong! Please check internet connection", classes:"red white-text" });
            setUploadLoading(uploadLoading)
                return
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
                            <Route path="/upload" component={() =><Upload loading={uploadLoading}  uploadYearPhoto={uploadYearPhoto}/>} exact/>
                            <Route path="/throwback" component={() => <Throwback/> } exact/>
                            <Route path="/user/:id" component={()=> <KindMessage /> } exact/>
                            <Route path="/user/:id/messages" component={()=> <Messages /> } exact/>
                            <Redirect to="/"/>
                        </Switch>
                        <ToolBars/>
                    </div>
            </TransitionGroup>
        </div>
    )
}

export default Main;