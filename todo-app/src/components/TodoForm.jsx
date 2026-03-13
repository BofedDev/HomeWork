import { useState } from 'react';
import { Container, ListGroup, Form, Button, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function TodoForm() {
    const [todoItems, setTodoItems] = useState([]);
    const [inputText, setInputText] = useState('');

    const addTodo = (e) => {
        e.preventDefault();

        if (inputText.trim()) {
            const newTodo = {
                id: Date.now(),
                text: inputText.trim(),
                completed: false
            };

            setTodoItems([...todoItems, newTodo]);
            setInputText('');
        }
    };

    const toggleTodo = (id) => {
        setTodoItems(todoItems.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const activeTodoItems = todoItems.filter(todo => !todo.completed);
    const completedTodoItems = todoItems.filter(todo => todo.completed);

    return (

        <Container  className="mt-4" >
            <h2 className="mb-4">Todo List</h2>

            {activeTodoItems.length > 0 && (
                <div className="mb-4">
                    <h5>Active</h5>
                    <ListGroup>
                        {activeTodoItems.map(todo => (
                            <ListGroup.Item
                                key={todo.id}
                                onClick={() => toggleTodo(todo.id)}
                                style={{ cursor: 'pointer' }}
                            >
                                {todo.text}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>
            )}

            {completedTodoItems.length > 0 && (
                <div className="mb-4">
                    <h5>Completed</h5>
                    <ListGroup>
                        {completedTodoItems.map(todo => (
                            <ListGroup.Item
                                key={todo.id}
                                onClick={() => toggleTodo(todo.id)}
                                style={{
                                    cursor: 'pointer',
                                    textDecoration: 'line-through',
                                    opacity: 0.6
                                }}
                            >
                                {todo.text}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>
            )}

            <Form onSubmit={addTodo}>
                <InputGroup>
                    <Form.Control
                        type="text"
                        placeholder="Enter new todo"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />
                    <Button type="submit">
                        Add
                    </Button>
                </InputGroup>
            </Form>
        </Container>
    );
}

export default TodoForm;