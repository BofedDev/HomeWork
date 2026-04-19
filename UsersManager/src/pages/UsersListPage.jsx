import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Table } from 'react-bootstrap';
import { getUsers, deleteUser } from '../api/usersApi';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

const UsersListPage = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
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

            <Table striped bordered hover responsive>
                <thead className="table-dark">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                        <td>
                            <div className="d-flex gap-2">
                                <Button
                                    size="sm"
                                    variant="info"
                                    onClick={() => navigate(`/users/${user.id}`)}
                                >
                                    View
                                </Button>
                                <Button
                                    size="sm"
                                    variant="warning"
                                    onClick={() => navigate(`/users/${user.id}/edit`)}
                                >
                                    Edit
                                </Button>
                                <Button
                                    size="sm"
                                    variant="danger"
                                    onClick={() => handleDelete(user.id)}
                                >
                                    Delete
                                </Button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default UsersListPage;