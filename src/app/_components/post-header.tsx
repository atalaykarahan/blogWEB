import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import {PostTitle} from "@/app/_components/post-title";
import {type Author} from "@/interfaces/author";

type Props = {
    title: string;
    coverImage: string;
    date: string;
};

export function PostHeader({title, coverImage, date}: Props) {
    return (
        <>
            <PostTitle>{title}</PostTitle>
            <div className="mb-8 md:mb-16 sm:mx-0">
                <CoverImage title={title} src={coverImage}/>
            </div>
            <div className="max-w-2xl mx-auto">
                <div className="mb-6 text-lg">
                    <DateFormatter dateString={date}/>
                </div>
            </div>
        </>
    );
}
