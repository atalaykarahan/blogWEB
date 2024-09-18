// import {getMyCookie} from "@/lib/get-my-cookie";
import axios from "@/app/api/axios";


class BlogService {

    //#region GET BY ID
    async getById(id: string) {
        return await axios.get(`/blogs/${id}`,);
    };

    //#endregion

    //#region GET ALL PUBLISHED BLOGS
    async getAllPublishedBlogs() {
        return await axios.get(`/blogs/published`,);
    };

    //#endregion

    //#region GET BY SLUG
    async getBySlug(slug: string) {
        return await axios.get(`/blogs/slug/${slug}`,);
    };

    //#endregion


}

export const blogService = new BlogService();