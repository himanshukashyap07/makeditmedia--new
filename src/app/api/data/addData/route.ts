
import UserModel from '@/dbConfig/dbConfig'
import dbConnect from '@/lib/dbConnect'
import User from '@/models/userModel'
import {NextRequest,NextResponse} from 'next/server'



export async function POST(req:NextRequest){
    await dbConnect()
    try{
        const reqBody = await req.json()
        const {url,title,heading} = reqBody;
        if (!title || !heading || !url) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        const isDataExist = await User.findOne({url})
        if (isDataExist) {
            return NextResponse.json({error: "video allready exist"},{status:400})
        }
        
        const data = await User.create({title,heading,url})
        // console.log(data);
        return NextResponse.json({message:"Data created successfully",success:true,data},{status:201})

    } catch(err:any){
        return NextResponse.json({error:err.message},{status:500})
    }
}


