import Container from "@/app/_components/container";
import {HeroPost} from "@/app/_components/hero-post";
import {Intro} from "@/app/_components/intro";
import {MoreStories} from "@/app/_components/more-stories";
import {getAllPosts} from "@/lib/api";

export default async function Index() {
    const allPosts = await getAllPosts();
    console.log(allPosts)
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);

    return (
        <main>
            <Container>
                <Intro/>
                <HeroPost
                    title={heroPost.blog_title}
                    coverImage={heroPost.blog_cover_image ?? '/assets/blog/hello-world/cover.jpg'}
                    date={heroPost.updatedAt}
                    slug={heroPost.blog_slug}
                />
                {morePosts.length > 0 && <MoreStories posts={morePosts}/>}
            </Container>
        </main>
    );
}
