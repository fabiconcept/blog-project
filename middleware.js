import { NextResponse } from "next/server";

const whiteListOrigin = process.env.NODE_ENV === "production" ? ["https://example.com", "https://ww.example.com"] : ["http:localhost:3000", "https://www.google.com", "https://my-json-server.typicode.com/"];

export function middleware(request) {
    const origin = request.headers.get("origin");
    if (origin && !whiteListOrigin.includes(origin)) {
        return new NextResponse(null, {
            status: 400,
            statusText: "Bad request, Fuck You",
            headers: {
                "Context-Type": "text/plain"
            }
        });
    }
    return NextResponse.next();
}

export const config ={
    matcher: ["/api/:path*"], 
}