"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function FeedBack() {
    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
    });
    
    const showBtn = data.name !== "" && data.email !== "" && data.message !== "";

    const router = useRouter();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const { email, message, name } = data;

        const res = await fetch("http://localhost:3000/api/feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, message
            }),
        });

        const result = await res.json();
        console.log(result);
    }

    return (
        <main className="grid place-items-center p-5 text-white"> 
            <form className="md:w-[45rem] sm:w-[calc(100%)] w-full p-3 grid flex-col gap-4 text-white" onSubmit={handleSubmit}>
                <h2 className="text-2xl">Contact Us</h2>
                <div className="grid gap-1">
                    <label className="text-base">Name:</label>
                    <input
                        type="text"
                        placeholder="Jane"
                        className="h-10 px-3 py-4 rounded-lg text-slate-900"
                        onChange={(e)=>setData((prevData)=> ({...prevData, name: e.target.value}))}
                        required
                    />
                </div>
                <div className="grid gap-1">
                    <label className="text-base">Email:</label>
                    <input
                        type="email"
                        placeholder="Jane@yoursite.com"
                        className="h-10 px-3 py-4 rounded-lg text-slate-900"
                        onChange={(e)=>setData((prevData)=> ({...prevData, email: e.target.value}))}
                        required
                    />
                </div>
                <div className="grid gap-1">
                    <label className="text-base">Message:</label>
                    <textarea
                        placeholder="Your message"
                        className="px-3 py-4 rounded-lg resize-none text-slate-900"
                        cols="30"
                        rows="10"
                        onChange={(e)=>setData((prevData)=> ({...prevData, message: e.target.value}))}
                        required
                    ></textarea>
                </div>
                {showBtn && <input type="submit" value="Submit" className="py-4 px-12 w-fit bg-white/50 rounded-xl cursor-pointer hover:bg-white active:scale-90 text-slate-900 transition-all duration-200 ease-linear" />}
            </form>
        </main>
    )
}
