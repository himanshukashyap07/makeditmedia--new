import dbConnect from "@/lib/dbConnect";
import User from "@/models/userModel";
import {  NextResponse } from "next/server";


export async function GET() {
    await dbConnect()
    const users = await User.find()
    console.log(`the type of users is ${typeof users}`);
    return NextResponse.json(users);
}
