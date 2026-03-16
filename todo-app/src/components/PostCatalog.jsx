import { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function PostCatalog() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div className="posts">
            <ListGroup className="posts__list">
                {posts.map(post => (
                    <ListGroup.Item
                        style={{ border: '1px solid black' }}
                        className="posts_single-post"
                        data-post-id={post.id}
                        key={post.id}
                    >
                        <h3 className="posts__post-title">{post.title}</h3>
                        <p className="posts__post-description">{post.body}</p>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
}

export default PostCatalog