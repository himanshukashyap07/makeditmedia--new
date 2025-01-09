import mongoose,{Schema,Document} from "mongoose";


export interface User extends Document{
    url:string;
    title:string;
    heading:string;
}

const UserSchema: Schema<User> = new Schema({
    url:{
        type:String,
        required:[true,"url is required"],
        trim:true,
        unique:true
    },
    title:{
        type:String,
    },
    heading:{
        type:String,
    },
}) 


const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User",UserSchema)

export default UserModel