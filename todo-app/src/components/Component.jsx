import { useState, useRef } from 'react';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Component = () => {
    const [items, setItems] = useState([]);
    const currentValue = useRef(0);

    const addition = (e) => {
        e.preventDefault();
        currentValue.current += 1;
        setItems(value => [...value, currentValue.current]);
    };

    const subtraction = (e) => {
        e.preventDefault();
        currentValue.current -= 1;
        setItems(value => [...value, currentValue.current]);
    };

    return (
        <div>
            <div className="btn-group font-monospace" role="group">
                <button type="button" className="btn btn-outline-success" onClick={addition}>+</button>
                <button type="button" className="btn btn-outline-danger" onClick={subtraction}>-</button>
            </div>
            {items.length > 0 && (
                <ListGroup className="mt-3">
                    {items.map((value, index) => (
                        <ListGroup.Item key={index}>
                            {value > 0 ? '+' : ''}{value}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </div>
    );
};

export default Component;