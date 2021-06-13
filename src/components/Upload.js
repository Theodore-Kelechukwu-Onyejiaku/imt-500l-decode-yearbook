import React, { useEffect, useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'


const Upload = ({ uploadYearPhoto, loading}) => {
    const [fileInputState, setFileInputState] = useState("");
    const [selectedFile, setSelectedFile] = useState("");
    const [previewSource, setPreviewSource] = useState("");
    const [formData, setFormData] = useState({ fullname: "", quote: "", picture: ""});
    const [isLoading, setIsLoading] = useState(loading)
    const [formError, setFormError] = useState("");
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

    const handleInput = (e, name) => {
        setFormError("");
        let value = e.target.value;
        setFormData(Object.assign({}, formData, { [name]: value }));
    }

    const previewFile = (file) => {
        console.log(file)
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result)
            setFileInputState(reader.result)
            console.log(fileInputState)
            setSelectedFile(reader.result)
            console.log(selectedFile)
            setFormData(Object.assign({}, formData, { picture: reader.result }));
        }
    }

    const handleSubmitFile = async (e) => {
        e.preventDefault();
        setIsLoading(!isLoading)
        uploadYearPhoto(formData);
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
                            <input id="fullname" type="text" onChange={(e, name = "fullname") => { handleInput(e, name) }} value={formData.fullname}/>
                            <label htmlFor="fullname">Full Name</label>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="quote" className="materialize-textarea" onChange={(e, name = "quote") => { handleInput(e, name) }} value={formData.quote}></textarea>
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
                                <button type="submit" className="btn">Submit</button>
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