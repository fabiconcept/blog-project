import getFormatedDate from "@/lib/getFormatedDate";
import Link from "next/link";

export default function ListItem( { post } ) {
    const { id, title, date } = post;
    const formatedDate = getFormatedDate(date);

    return (
        <li className="mt-4 text-2xl text-white/90">
            <Link className="underline hover:text-white/70" href={`/post/${id}`}>{title}</Link>
            <br />
            <p className="text-sm mt-1">{formatedDate}</p>
        </li>
    )
}