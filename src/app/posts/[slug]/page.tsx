import {Metadata} from "next";
import {notFound} from "next/navigation";
import {getAllPosts, getPostBySlug} from "@/lib/api";
import {CMS_NAME} from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Alert from "@/app/_components/alert";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import {PostBody} from "@/app/_components/post-body";
import {PostHeader} from "@/app/_components/post-header";

export default async function Post({params}: Params) {
    const post: any = await getPostBySlug(params.slug);
    if (!post) {
        return notFound();
    }
    return (
        <main>
            {/*<Alert preview={post.preview}/>*/}
            <Container>
                <Header/>
                <article className="mb-32">
                    <PostHeader
                        title={post.blog_title}
                        coverImage={'/assets/blog/hello-world/cover.jpg'}
                        date={post.updatedAt}
                    />
                    <PostBody content={post.blog_description}/>
                </article>
            </Container>
        </main>
    );
}

type Params = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({params}: Params) {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        return notFound();
    }

    const title = `${post.blog_title} | Next.js Blog Example with Atalay Karahan`;

    return {
        title,
        openGraph: {
            title,
            images: [post.blog_cover_image == '' ? '' : post.blog_cover_image],
        },
    };
}

export async function generateStaticParams() {
    const posts = await getAllPosts();

    return posts.map((post: any) => ({
        slug: post.blog_slug,
    }));
}
