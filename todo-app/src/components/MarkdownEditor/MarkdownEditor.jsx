import { useEffect, useRef } from 'react';
import Editor from '@toast-ui/editor';

const MarkdownEditor = ({ height = '500px', onContentChange }) => {
    const ref = useRef(null);

    useEffect(() => {
        const editor = new Editor({
            el: ref.current,
            initialEditType: 'markdown',
            previewStyle: 'vertical',
            height,
        });

        editor.addHook('change', () => {
            const content = editor.getMarkdown();
            onContentChange(content);
        });


        return () => editor.destroy();
    }, []);



    return (
        <div className='editorContainer'>
            <div ref={ref} />
        </div>
    );
};

export default MarkdownEditor;