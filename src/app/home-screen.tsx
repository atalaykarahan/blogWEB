'use client';

import {useEffect, useState} from "react";
import {blogService} from "@/app/api/services/blog.Service";
import {HeroPost} from "@/app/_components/hero-post";
import {MoreStories} from "@/app/_components/more-stories";

const HomeScreen = () => {
    const [allPost, setAllPost] = useState([]);
    const [heroPost, setHeroPost] = useState<any>({});
    const [morePosts, setMorePosts] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const result = await blogService.getAllPublishedBlogs();
        if (result.status === 200 && result.data.length > 0) {
            setAllPost(result.data);
            setHeroPost(result.data[0]);
            if (result.data.length > 1) {
                setMorePosts(result.data.slice(1));
            }

        } else {
            return null;
        }
    }
    if (allPost.length === 0) return <h1>Henüz blog yazısı bulunmuyor.</h1>
    return (
        <>
            <HeroPost
                title={heroPost.blog_title}
                coverImage={heroPost.blog_cover_image ?? '/assets/blog/hello-world/cover.jpg'}
                date={heroPost.updatedAt}
                slug={heroPost.blog_slug}
            />
            {morePosts.length > 0 && <MoreStories posts={morePosts}/>}
        </>
    )
}


export default HomeScreen