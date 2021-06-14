const User = require("../models/User");
const {cloudinary} = require("../utils/cloudinary")


exports.getSingleUser = async (req, res,next) =>{
    try{
        const user = await User.findOne({_id:req.params.id})

        if(user === null){
            res.status(400).json({"message": "no user found!", "status":"fail"});
            return;
        }
        return res.status(200).json({"status":"ok", "user": user});    
    }catch(error){
        res.status(400).json({"status":"fail", "message": error.message})
    }
}
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
            fullname: req.body.fullname,
            quote: req.body.quote,
        })

        const picture = req.body.picture;
        const uploadResponse = await cloudinary.uploader.upload(picture, {upload_preset: "imt-final-year-photo-book"});
    
        user.imageUrl = uploadResponse.url;
        user.imageId = uploadResponse.public_id;
        
        const newUser = await user.save();
        res.status(200).json({"status":"ok", "message": "Upload Successful", user: User});
    } catch (error) {
        res.status(400).json({"message": error.message});
    }
    
}

exports.sendMessage = async(req, res, next)=>{
    console.log("ubbish")
    console.log(req.body.message);

    try {
        const user = await User.findOne({_id:req.params.id});
        const messages = {
            message : req.body.message
        }
        user.messages.push(messages);
        const newUser = await user.save();
        res.status(200).json({"status":"ok", "message":"message sent successfully"})
    } catch (error) {
        res.status(400).json({"message": error.message})
    }
}