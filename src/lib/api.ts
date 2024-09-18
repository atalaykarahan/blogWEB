import {Post} from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import {join} from "path";
import {blogService} from "@/app/api/services/blog.Service";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory);
}

export async function getAllPosts() {
    const result = await blogService.getAllPublishedBlogs();
    if (result.status === 200) {
        return result.data;
    } else {
        return null;
    }
}


export async function getPostBySlug(slug: string) {
    const realSlug = slug.replace(/\.md$/, "");
    // const fullPath = join(postsDirectory, `${realSlug}.md`);
    // console.log('sırasıyla slug ve fullpath', slug, fullPath);
    const result = await blogService.getBySlug(slug);
    if (result.status === 200) {
        return result.data;
        // const fileContents = fs.readFileSync(fullPath, "utf8");
        // const {data, content} = matter(fileContents);

        // return {...data, slug: realSlug, content} as Post;



    } else {
        return null;
    }



}

