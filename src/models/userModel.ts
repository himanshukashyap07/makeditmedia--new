
import mongoose,{Schema,Document} from "mongoose";

export interface User extends Document{
    title:string;
    heading:string;
    url:string;

}

const userSchema:Schema<User> = new Schema({
    title:{
        type:String,
    },
    heading:{
        type:String,
    },
    url:{
        type:String,
    }
},{
    timestamps:true
})

const User = mongoose.models.User as mongoose.Model<User> || mongoose.model<User>("User", userSchema)

export default User;