import React, { useEffect, useState } from "react";
import M from 'materialize-css/dist/js/materialize.min.js'
import { baseUrl } from "../shared/baseUrl"



const KindMessage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState("");
    const [messages, setMessages] = useState([]);
    const id = window.location.pathname.split("/")[window.location.pathname.split("/").length - 2];
    useEffect(() => {
        fetch(baseUrl + "users/" + id )
            .then(response => {
                return response.json();
            })
            .then(result => {
                setUser(result.user)
                setMessages(result.user.messages)
                setIsLoading(!isLoading)
            })
            .catch(error => {
                console.log(error.message)
                console.log("eroror roooo")
                M.toast({ html: "Something went wrong!", classes:"red white-text" })
                setIsLoading(!isLoading)
            })
    }, [])
    return (
        <>
            {isLoading ?
                <div className="center-align" style={{ width: "100%", margin: " 10% auto" }}>
                    <i className="fa fa-spin fa-spinner fa-2x"></i>
                </div>

                :
                <div className="container">
                        <h6>
                            Kind Messages for: <strong>{user.fullname}</strong>
                        </h6>
                        {messages.map(eachMessage => 
                            <div className="chatbox">
                                <p>{eachMessage.message}</p>
                                <span className="time-right">11:00</span>
                            </div>
                        )}
                </div>
                
            }
        </>
    )
}

export default KindMessage;