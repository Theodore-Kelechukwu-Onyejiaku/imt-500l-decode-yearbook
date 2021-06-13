import React, { useEffect, useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'


const AddProduct = ({ dish, postDish }) => {
    useEffect(() => {
        window.addEventListener('load', function () {
            var elems = document.querySelectorAll('.chips');
            M.Chips.init(elems);
        });

    }, [])
    const [fileInputState, setFileInputState] = useState("");
    const [selectedFile, setSelectedFile] = useState("");
    const [previewSource, setPreviewSource] = useState("");
    const [formData, setFormData] = useState({ name: "", price: "", description: "", dishPicture: "", categories: "" });
    const [formError, setFormError] = useState("");
    const [loading, setLoading] = useState(true);
 
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
            setFormData(Object.assign({}, formData, { dishPicture: reader.result }));
        }
    }

    const handleSubmitFile = async (e) => {
        e.preventDefault();
        console.log(loading,dish.addDishLoading)
        setLoading(!loading)
        if(checkFormData(formData)){
            M.toast({ html: "Please fill in the form correctly!", classes:"red white-text" })
        }else{
            setFormError("");
        }
        if (formError !== ""){
            setLoading(loading)
            return
        } 
        if (!previewSource){
            setLoading(loading)
            return;
        } 
        await postDish(formData);
        console.log(loading,dish.addDishLoading)

    }

    const checkFormData = (formData) => {
        for (let data in formData) {
            if (formData[data] === "") {
                setFormError("Please fill all fields")
                M.toast({ html: "Please fill in the form correctly!", classes:"red white-text" })
                return true;
            }
        }
    }

    return (
        <div className="container">
            {/* {loading &&<div className="center-align"><div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-blue-only">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div><div className="gap-patch">
                            <div className="circle"></div>
                        </div><div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
                </div>
            } */}
            <div className="row">
            <div className="col s12 m3 l3"></div>
            <div className="col s12 m6 l6">
                <form action="" onSubmit={(e) => { handleSubmitFile(e) }} method="POST">
                    <h4 className="center-align">Add Your Photo</h4>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea" onChange={(e, name = "description") => { handleInput(e, name) }} value={formData.description}></textarea>
                            <label htmlFor="textarea1">Full Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="categories" className="materialize-textarea" onChange={(e, name = "categories") => { handleInput(e, name) }} value={formData.categories}></textarea>
                            <label htmlFor="categories">Your quote or comment</label>
                        </div>
                    </div>

                    <div className="file-field input-field">
                        <div className="btn">
                            <span>Your Picture</span>
                            <input type="file" name="image" onChange={handleFileInputChange} accept="image/*" />

                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text" />
                            {!formData.dishPicture ? <span className="red-text">Please Select a picture</span> : <span></span>}
                        </div>
                    </div>
                    <div className="center-align">
                        {loading ? 
                                <button disabled style={{cursor:"none"}}>submit<i className="fa fa-spin fa-spinner"></i></button>
                            :
                                <button type="submit" className="btn"></button>
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

export default AddProduct;