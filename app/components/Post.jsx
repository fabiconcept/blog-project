import { getSortedPostData } from "@/lib/posts";
import ListItem from "./ListItem";

export default function SinglePost() {
    const posts = getSortedPostData();
    
    return (
        <section className="mt-6 mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold text-white/90"></h2>
            <ul className="w-full">
                {posts.map((post)=>(
                    <ListItem key={post.id} post={post} />
                ))}
            </ul>
        </section>
    );
}