import { NextResponse } from "next/server";

const API_KEY = process.env.DATA_API_KEY;
const Data_source_url = "https://jsonplaceholder.typicode.com/todos";

export async function GET() {
    const request = await fetch(Data_source_url);

    const todos = await request.json();

    return new NextResponse(JSON.stringify(todos), {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
        }
    });
}

export async function DELETE(request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
        return NextResponse.json({"message": "Todo id is requied"});
    }

    await fetch(`${Data_source_url}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json", 
            "API-Key": API_KEY
        },
    });

    return NextResponse.json({"message": `Todo ${id} was deleted, API: ${API_KEY}`});
}

export async function POST(request) {
    const { userId, title } = await request.json();

    if (!userId || !title) {
        return NextResponse.json({"message": "No required Data"});
    }

    const res = await fetch(`${Data_source_url}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json", 
            "API-Key": API_KEY
        },
        body: JSON.stringify({userId, title, completed: false})
    });

    const newTodo = await res.json();

    return NextResponse.json({"message": `${newTodo.id} was Added`});
}

export async function PUT(request) {
    const { userId, title, id, completed } = await request.json();
    console.log(typeof(completed))

    if (!userId || !title || !id || typeof(completed) !== "boolean") {
        return NextResponse.json({"message": "No required Data"});
    }

    const res = await fetch(`${Data_source_url}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json", 
            "API-Key": API_KEY
        },
        body: JSON.stringify({userId, title, completed}),
    });

    const updatedTodo = await res.json();

    return NextResponse.json({"message": `${updatedTodo.id} was Updated`, updatedTodo});
}