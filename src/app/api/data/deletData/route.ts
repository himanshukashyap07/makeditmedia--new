import dbConnect from "@/lib/dbConnect"
import User from '@/models/userModel'
import {NextRequest,NextResponse} from 'next/server'



export async function DELETE(req:NextRequest) {
    
    await dbConnect()
    const UrlId = req.nextUrl.searchParams.get('id')
    // console.log(id)
    const user = await User.findByIdAndDelete(UrlId)
    return NextResponse.json({message:"topic deleted",user},{status:200})
}