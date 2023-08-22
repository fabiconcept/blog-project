import Image from "next/image";

export default function MyProfilePic() {
    return (
        <section className="w-full mx-auto">
            <Image 
                src={"/images/5225.png"}
                width={100}
                height={100}
                alt="Barca"
                priority={true}
                className="border-4 border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8 cursor-pointer"
            />
        </section>
    )
}
