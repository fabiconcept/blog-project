import { NextResponse } from "next/server";

export async function POST(request) {
    const feedbackData = await request.json();
    const { name, email, message } = feedbackData;
    return NextResponse.json({
        name, email, message
    });
}

export async function GET(request) {
    const { searchParams } = new URL(request.url);

    const responeObj = Object.fromEntries(searchParams.entries());

    return NextResponse.json(responeObj);
}