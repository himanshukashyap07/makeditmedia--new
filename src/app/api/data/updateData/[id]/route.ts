import dbConnect from "@/lib/dbConnect";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, context: { params: Promise<{ id: string }> }) {
    await dbConnect();
    const { id } = await context.params;
    try {
        const data = await request.json();
        const {title, heading, url} = data;
        const updataData = await User.findByIdAndUpdate(id, { title,heading,url});
        return NextResponse.json({ message: "Update SuccessFull",updataData}, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error Occure in Update Data" }, { status: 200 });
    }
}