import React, { useEffect } from "react";
import { Fade, Stagger } from "react-animation-components";


const Home = () =>{
    useEffect(()=>{

    }, )
    return(
        <div className="container">
            <h4>Welcome to IMT/IFT 500Level Year Book Page</h4>
            <Stagger in>
                        <div className="row">
                        <Fade  in="true">
                            <div className="col s12 m4 l4" height="300px">
                                <div className="card">
                                    <div className="card-image waves-block waves-light">
                                        <img className="activator" src="https://random.imagecdn.app/500/150" alt="dish" />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-title activator grey-text text-darken-4">This is the quote I have to give to the department!<i className="material-icons right">more_vert</i></p>
                                        <p></p>
                                        <p></p>
                                        <button className='btn btn-small pulse' ><small>Theodore Kelechukwu Onyejiaku</small></button>
                                        
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-darken-4" >Theodore Kelechukwu Onyejiaku<i className="material-icons right">close</i></span>
                                        <p>This is the quote</p>
                                        <hr />
                                        <br/>
                                        <br/>
                                        <p>Anonymous Messages: <span>5</span></p>
                                        <button className='btn' >Send Anonymous Message</button>
                                    </div>
                                </div>
                            </div>
                    </Fade>
                    <Fade  in="true">
                            <div className="col s12 m4 l4" height="300px">
                                <div className="card">
                                    <div className="card-image waves-block waves-light">
                                        <img className="activator" src="https://random.imagecdn.app/500/150" alt="dish" />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-title activator grey-text text-darken-4" style={{ fontFamily: "'Tangerine', cursive", color: "white" }}>This is the quote I have to give to the department!<i className="material-icons right">more_vert</i></p>
                                        <p></p>
                                        <p></p>
                                        <button className='btn btn-small pulse' ><small>Theodore Kelechukwu Onyejiaku</small></button>
                                        
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-darken-4" >Theodore Kelechukwu Onyejiaku<i className="material-icons right">close</i></span>
                                        <p>This is the quote</p>
                                        <hr />
                                        <br/>
                                        <br/>
                                        <p>Anonymous Messages: <span>5</span></p>
                                        <button className='btn' >Send Anonymous Message</button>
                                    </div>
                                </div>
                            </div>
                    </Fade>
                    <Fade  in="true">
                            <div className="col s12 m4 l4" height="300px">
                                <div className="card">
                                    <div className="card-image waves-block waves-light">
                                        <img className="activator" src="https://random.imagecdn.app/500/150" alt="dish" />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-title activator grey-text text-darken-4" style={{ fontFamily: "'Tangerine', cursive", color: "white" }}>This is the quote I have to give to the department!<i className="material-icons right">more_vert</i></p>
                                        <p></p>
                                        <p></p>
                                        <button className='btn btn-small pulse' ><small>Theodore Kelechukwu Onyejiaku</small></button>
                                        
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-darken-4" >Theodore Kelechukwu Onyejiaku<i className="material-icons right">close</i></span>
                                        <p>This is the quote</p>
                                        <hr />
                                        <br/>
                                        <br/>
                                        <p>Anonymous Messages: <span>5</span></p>
                                        <button className='btn' >Send Anonymous Message</button>
                                    </div>
                                </div>
                            </div>
                    </Fade>
                    </div>
            </Stagger>
        </div>
    )
}

export default Home;