import React, { useEffect,useState } from "react";
import { Fade, Stagger } from "react-animation-components";
import M from 'materialize-css/dist/js/materialize.min.js';
import {baseUrl} from "../shared/baseUrl";
import {NavLink} from "react-router-dom";


const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState([]);


    useEffect(()=>{
        fetch(baseUrl+"users",{
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
                if(result.users.length){
                    console.log(result.users.length);
                    console.log("okayyy ooo", result.users);
                    setIsLoading(!isLoading);
                    setUsers(result.users, ...users);

                }
                else{
                    console.log("hmmm");
                    M.toast({ html: "No users found!", classes:"red white-text" });
                    setIsLoading(!isLoading);
                    return
                }
            }else{
                M.toast({ html: result.message, classes:"red white-text" });
                setIsLoading(!isLoading);
                return
            }
        })
        .catch(error =>{
            M.toast({ html: "Failed to fetch data, something went wrong!", classes:"red white-text" });
                setIsLoading(!isLoading);
                return
        })
    },[])
    return (
        <>
            {isLoading ?
                <div className="center-align" style={{width:"100%", margin:" 10% auto"}}>
                    <i className="fa fa-spin fa-spinner fa-2x"></i>
                </div>
                :
                <div>
                    {!users.length ? <div>Users not found!</div>
                        :
                        <div className="container">
                            <h4>Welcome to IMT/IFT 500Level Year Book Page</h4>
                            <Stagger in>
                                <div className="row">
                                    <Fade in="true">
                                        {users.map(eachUser =>
                                            <div className="col s12 m4 l4" >
                                                <div className="card">
                                                    <div className="card-image waves-block waves-light" width="300px" height="200px" style={{padding: "10px"}}>
                                                        <img className="activator responsive-img" src={eachUser.imageUrl} style={{ maxWidth: "100%", height: "250px", width: "180px",margin:"auto" }} alt="dish" />
                                                    </div>
                                                    <div className="card-body">
                                                        <span className="card-title activator grey-text text-darken-4">{eachUser.quote}<i className="material-icons right">more_vert</i></span>
                                                        <p></p>
                                                        <p></p>
                                                        <button className='btn btn-small pulse' ><small>{eachUser.fullname}</small></button>

                                                    </div>
                                                    <div className="card-reveal">
                                                        <span className="card-title grey-text text-darken-4" >{eachUser.fullname}<i className="material-icons right">close</i></span>
                                                        <p>This is the quote</p>
                                                        <hr />
                                                        <br />
                                                        <br />
                                                        <p>Anonymous Messages: <span>{eachUser.message.length}</span></p>
                                                        <NavLink to={"user/"+eachUser._id} className='btn' >Send Anonymous Message</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </Fade>
                                </div>
                            </Stagger>
                        </div>
                    }
                </div>
            }
    </>
    )
}

export default Home;