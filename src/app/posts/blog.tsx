'use client';

import {useEffect, useState} from "react";
import {blogService} from "@/app/api/services/blog.Service";
import {PostHeader} from "@/app/_components/post-header";
import {PostBody} from "@/app/_components/post-body";

const blog = ({slug}: { slug: string }) => {
    const [blog, setBlog] = useState<any>(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const result = await blogService.getBySlug(slug);
        if (result.status === 200 && result.data) {
            setBlog(result.data);
        }

    }
    if (!blog) {
        return <h1>Loading...</h1>
    }
    return (
        <>
            <PostHeader
                title={blog.blog_title}
                date={blog.updatedAt}
            />
            <PostBody content={blog.blog_description}/>
        </>
    )
}

export default blog