import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Form, Row, Col } from 'react-bootstrap';
import { getUsers, deleteUser } from '../api/usersApi';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import UsersTable from '../components/UsersTable';

const UsersListPage = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');
    const [cityFilter, setCityFilter] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        getUsers()
            .then(data => setUsers(data))
            .catch(err => setError(err.message))
            .finally(() => setIsLoading(false));
    }, []);

    const handleDelete = (id) => {
        if (!window.confirm('Ви впевнені що хочете видалити користувача?')) return;

        deleteUser(id)
            .then(() => setUsers(prev => prev.filter(user => user.id !== id)))
            .catch(err => setError(err.message));
    };

    const cities = [...new Set(users.map(u => u.address?.city).filter(Boolean))];

    const filteredUsers = users
        .filter(u => u.name.toLowerCase().includes(search.toLowerCase()))
        .filter(u => cityFilter ? u.address?.city === cityFilter : true);

    if (isLoading) return <Loader />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <Container className="py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Users Manager</h1>
                <Button variant="primary" onClick={() => navigate('/users/create')}>
                    + Create New User
                </Button>
            </div>

            <Row className="mb-3 g-2">
                <Col md={6}>
                    <Form.Control
                        placeholder="Пошук по імені..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </Col>
                <Col md={4}>
                    <Form.Select
                        value={cityFilter}
                        onChange={e => setCityFilter(e.target.value)}
                    >
                        <option value="">Всі міста</option>
                        {cities.map(city => (
                            <option key={city} value={city}>{city}</option>
                        ))}
                    </Form.Select>
                </Col>
                <Col md={2}>
                    <Button
                        variant="outline-secondary"
                        className="w-100"
                        onClick={() => { setSearch(''); setCityFilter(''); }}
                    >
                        Скинути
                    </Button>
                </Col>
            </Row>

            <UsersTable users={filteredUsers} onDelete={handleDelete} />
        </Container>
    );
};

export default UsersListPage;