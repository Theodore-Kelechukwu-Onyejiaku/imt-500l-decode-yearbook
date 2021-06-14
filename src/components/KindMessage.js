import React, { useEffect, useState } from "react";
import M from 'materialize-css/dist/js/materialize.min.js'
import { baseUrl } from "../shared/baseUrl"



const KindMessage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isUploading, setIsUpLoading] = useState(false);
    const [user, setUser] = useState("");
    const [message, setMessage] = useState("");


    const id = window.location.pathname.split("/")[window.location.pathname.split("/").length - 1];

    const handleInput = (e) => {
        let value = e.target.value;
        setMessage(value)
    }

    const handleFormSubmit = (e) =>{
        e.preventDefault()
        if(message.length < 1){
           M.toast({ html: "Please enter message", classes:"red white-text" })
           return
        }
        console.log("whatever")
        setIsUpLoading(!isUploading)
        fetch(baseUrl+"users/"+id+"/message", {
            method: "POST",
            body: JSON.stringify({message}),
            headers: {
                    'Accept': 'application/json',
                    "Content-type": "application/json",
            }
        })
        .then(response =>{
            if(response.ok){
                return response.json()
            }else{
                throw new Error("Something went wrong");
            }
        })
        .then(result =>{
            if(result.status === "ok"){
                M.toast({ html: result.message, classes:"green white-text" })
                setIsUpLoading(isUploading)

            }else{
                console.log(result)
                console.log(result.message)
                M.toast({ html: result.message, classes:"red white-text" })
                setIsUpLoading(isUploading)
                return
            }
        })
        .catch(error =>{
            M.toast({ html: "Something went wrong!", classes:"red white-text" });
            setIsUpLoading(isUploading)
            return
        })
    }
    useEffect(() => {
        fetch(baseUrl + "users/" + id)
            .then(response => {
                return response.json();
            })
            .then(result => {
                setUser(result.user)
                setIsLoading(!isLoading)

            })
            .catch(error => {
                console.log(error.message)
                console.log("eroror roooo")
                M.toast({ html: "Something went wrong!", classes:"red white-text" })
                setIsLoading(!isLoading)

                return
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            {isLoading ?
                <div className="center-align" style={{ width: "100%", margin: " 10% auto" }}>
                    <i className="fa fa-spin fa-spinner fa-2x"></i>
                </div>

                :
                <div className="container">
                    <div className="container">
                        <h6>Send Kind Message to: <strong>{user.fullname}</strong></h6>
                        <form onSubmit={(e) =>{handleFormSubmit(e)}}>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea id="quote" className="materialize-textarea" onChange={(e) => { handleInput(e) }} value={message}></textarea>
                                <label htmlFor="quote">Your kind message!</label>
                            </div>
                        </div>

                        <div className="center-align">
                            {isUploading ?
                                <button className="btn" disabled style={{ cursor: "none" }}>submit<i className="fa fa-spin fa-spinner"></i></button>
                                :
                                <button type="submit" className="btn">Submit</button>
                            }
                        </div>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}

export default KindMessage;
