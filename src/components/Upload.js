import React, { useEffect, useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'


const Upload = ({ uploadYearPhoto, loading}) => {
    const [fileInputState, setFileInputState] = useState("");
    const [selectedFile, setSelectedFile] = useState("");
    const [previewSource, setPreviewSource] = useState("");
    const [formData, setFormData] = useState({ fullname: "", quote: "", picture: ""});
    const [isLoading, setIsLoading] = useState(loading);
    const [disabledBtn, setDisabledBtn] = useState(false)
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

    const checkInputs = ()=>{
        console.log(quote.length)
         if(quote.length > 120){
            setDisabledBtn(true)
         }
         else{
            setDisabledBtn(disabledBtn)
         }
    }
    const handleFullNameInput = (e) => {
        setFullName(e.target.value)
    }

    const handleQuoteInput = (e) => {
        setQuote(e.target.value)
        checkInputs();
    }

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result)
            setFileInputState(reader.result)
            setSelectedFile(reader.result)
            // setFormData(Object.assign({}, formData, { picture: reader.result }));
            setPicture(reader.result)
        }
    }

    const handleSubmitFile = async (e) => {
        e.preventDefault();
        setIsLoading(!isLoading)
        uploadYearPhoto({"fullname":fullname, "quote": quote, "picture": picture});
    }

    const checkFormData = (formData) => {

    }

    return (
        <div className="container">
            <div className="row">
            <div className="col s12 m3 l3"></div>
            <div className="col s12 m6 l6">
                <form action="" onSubmit={(e) => { handleSubmitFile(e) }} method="POST">
                    <h4 className="center-align">Add Your Photo</h4>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="fullname" type="text" onChange={(e) => { handleFullNameInput(e) }} value={fullname}/>
                            <label htmlFor="fullname">Full Name</label>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="quote"  className="materialize-textarea" onChange={(e )=> { handleQuoteInput(e) }} value={quote} data-length="120"></textarea>
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
                            {!formData.dishPicture ? <span className="red-text">Please Select a picture</span> : <span></span>}
                        </div>
                    </div>
                    <div className="center-align">
                        {isLoading ? 
                                <button disabled style={{cursor:"none"}}>submit<i className="fa fa-spin fa-spinner"></i></button>
                            :   
                                <>
                                {disabledBtn ? 
                                    <button disabled type="submit" id="uploadBtn" className="btn">Submit</button>
                                    :
                                    <button type="submit" id="uploadBtn" className="btn" >Submit</button>
                                }
                                </>
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