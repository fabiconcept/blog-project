import { NextResponse } from "next/server";

const Data_source_url = "https://jsonplaceholder.typicode.com/todos";

export async function GET({ params: { id } }) {
    // const id = request.url.slice(request.url.lastIndexOf("/") + 1);
    const req = await fetch(`${Data_source_url}/${id}`);

    const todo = await req.json();

    if (!todo.id) {
        return NextResponse.json({"message": "Todo not Found"});
    }

    return NextResponse.json(todo);
}