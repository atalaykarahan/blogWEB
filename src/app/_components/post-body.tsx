import MarkdownIt from 'markdown-it';


const mdParser = new MarkdownIt();
mdParser.use(require('markdown-it-ins'));
type Props = {
    content: string;
};

export function PostBody({content}: Props) {
    const renderedContent = mdParser.render(content);
    return (
        <div className="max-w-2xl mx-auto">
            <div dangerouslySetInnerHTML={{__html: renderedContent}}/>
        </div>
    );
}
