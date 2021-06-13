const User = require("../models/User");
const {cloudinary} = require("../utils/cloudinary")

exports.allUsers = async (req, res, next)=>{
    const users = await User.find({})
    if(users === null){
       res.status(400).json({"message": "no user found!", "status":"fail"});
       return;
    }

    return res.status(200).json({"status":"ok", "users": users});
}

exports.addPhoto =  async (req, res, next)=>{
    try {
        const user = new User({
            name: req.body.fullname,
            quote: req.body.quote,
        })

        
    
        const picture = req.body.picture;
        const uploadResponse = await cloudinary.fileuploader.upload(picture, {upload_preset: "imt-photo-gallery"});
        console.log(uploadResponse);
    
        user.imageUrl = uploadResponse.url;
        user.imageId = uploadResponse.public_id;
        
        const newUser = await user.save();
        res.status(200).json({status:"ok", message: "Upload Successful", user: User})
    } catch (error) {
        console.log(error)
        res.status(400).json({message: error.message})
    }
    
}