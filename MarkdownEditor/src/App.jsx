import { useState } from 'react'
import MarkdownEditor from './components/MarkdownEditor/MarkdownEditor.jsx'

function App() {
    const [content, setContent] = useState('')

    return (
        <>
            <MarkdownEditor onContentChange={(content) => {
                setContent(content)
                console.log(content)
            }} />
        </>
    )
}

export default App