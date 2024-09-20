import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import Blog from "@/app/posts/blog";
import {notFound} from "next/navigation";

export default async function Post({params}: Params) {

    return (
        <main>
            <Container>
                <Header/>
                <article className="mb-32">
                    <Blog slug={params.slug}/>
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
    const response: any = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/slug/${params.slug}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    });

    const post = await response.json();

    if (!post) {
        return notFound();
    }

    const title = `${post.blog_title} | Atalay Karahan`;

    return {
        title,
        openGraph: {
            title,
            images: [post.blog_cover_image == '' ? '' : post.blog_cover_image],
        },
    };
}


// export async function generateStaticParams() {
//     const response: any = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/homepage`, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         credentials: "include",
//     });
//
//     const posts = await response.json();
//
//     return posts.map((post: any) => ({
//         slug: post.blog_slug,
//     }));
// }
