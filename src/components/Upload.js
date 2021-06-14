import React, { useEffect, useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'


const Upload = ({ uploadYearPhoto, loading}) => {
    const [previewSource, setPreviewSource] = useState("");
    const [isLoading, setIsLoading] = useState(loading);
    const [formError, setFormError] = useState("");
    const [fullname, setFullName] = useState("");
    const [quote, setQuote] = useState("");
    const [picture, setPicture] = useState("");

    useEffect(() => {
        window.addEventListener('load', function () {
            var elems = document.querySelectorAll('.chips');
            M.Chips.init(elems);
        });

    }, [])
    
 
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
    }

    
    const handleFullNameInput = (e) => {
        let fullnameInput = document.getElementById("fullname");

        if(fullname.length > 40){
            fullnameInput.style = "border-bottom: 1px solid #F44336"
        }else{
            fullnameInput.style = "border-bottom: 1px solid #26a69a"
        }
        setFormError("");
        setFullName(e.target.value)
    }

    const handleQuoteInput = (e) => {
        let quoteInput = document.getElementById("quote");

        if(quote.length > 120){
            quoteInput.style = "border-bottom: 1px solid #F44336"
        }else{
            quoteInput.style = "border-bottom: 1px solid #26a69a"
        }
        setFormError("");
        setQuote(e.target.value)
    }

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result)
            setPicture(reader.result)
        }
    }

    const handleSubmitFile = async (e) => {
        e.preventDefault();
        if(!(quote.length && fullname.length && picture)){
            setFormError("Please enter all fields");
            M.toast({ html: "Please enter all fields", classes:"red white-text" })
            return
        }
        if(quote.length > 120 && fullname.length > 40){
            setFormError("Quote should be less than 120 characters and fullname 40");
            M.toast({ html: "Quote should be less than 120 characters and fullname 40", classes:"red white-text" })
            return 
        }
        else if(fullname.length > 40 ){
            console.log("greater than")
            setFormError("Fullna,e shouldn't be more than 40 characters")
            M.toast({ html: "Quote shouldn't be more than 40 characters", classes:"red white-text" })
            return 
        }
        else if(quote.length > 120){
            setFormError("Quote should be less than 120")
            M.toast({ html: "Quote shouldn't be more than 120 characters", classes:"red white-text" })
            return
        }
        setIsLoading(!isLoading)
        uploadYearPhoto({"fullname":fullname, "quote": quote, "picture": picture});
    }

    return (
        <div className="container">
            <div className="row">
            <div className="col s12 m3 l3"></div>
            <div className="col s12 m6 l6">
                <form action="" onSubmit={(e) => { handleSubmitFile(e) }} method="POST">
                    <h4 className="center-align">Add Your Photo</h4>
                    <p className="center-align red-text">{formError}</p>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="fullname" type="text" onChange={(e) => { handleFullNameInput(e) }} value={fullname} data-length="40"/>
                            <span className="" style={{float:"right"}}>{fullname.length}/40</span>
                            <label htmlFor="fullname">Full Name</label>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="quote"  className="materialize-textarea" onChange={(e )=> { handleQuoteInput(e) }} value={quote} data-length="120"></textarea>
                            <span className="" style={{float:"right"}}>{quote.length}/120</span>
                            <label htmlFor="quote">Your quote or comment</label>
                        </div>
                    </div>

                    <div className="file-field input-field">
                        <div className="btn">
                            <span>Your Picture</span>
                            <input type="file" name="picture" onChange={handleFileInputChange} accept="image/*" />

                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text" />
                        </div>
                    </div>
                    <div className="center-align">
                        {isLoading ? 
                                <button className="btn" disabled style={{cursor:"none"}}>submit<i className="fa fa-spin fa-spinner"></i></button>
                            :   
                                <button type="submit" id="uploadBtn" className="btn" >Submit</button>
                        }
                    </div>
                </form>
                <br />
                {
                    previewSource && (
                        <img src={previewSource} className="responsive-img" alt="chosen" />
                    )
                }
            </div>
            <div className="col s12 m3 l3"></div>
            </div>
        </div>
    );
}

export default Upload;