import {blogService} from "@/app/api/services/blog.Service";

export async function getAllPosts() {
    const result = await blogService.getAllPublishedBlogs();
    if (result.status === 200) {
        return result.data;
    } else {
        return null;
    }
}

export async function getPostBySlug(slug: string) {
    const result = await blogService.getBySlug(slug);
    if (result.status === 200) {
        return result.data;
    } else {
        return null;
    }
}

