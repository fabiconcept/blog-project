import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

// get Blog Post Dir
const postsDirectory = path.join(process.cwd(), 'blog post');

export function getSortedPostData() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");

        // read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContent = fs.readFileSync(fullPath, "utf8");

        // use gray-matter to parse the post metadata section
        const matterResults = matter(fileContent);

        const blogPost = {
            id,
            title: matterResults.data.title,
            date: matterResults.data.date,
        }

        return blogPost;
    });

    return allPostsData.sort((a, b) => a.date < b.date ? 1 : -1);
}


export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(remarkHtml)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    const blogPostWithHTML = {
        id,
        title: matterResult.data.title,
        date: matterResult.data.date,
        contentHtml,
    }

    // Combine the data with the id
    return blogPostWithHTML;
}