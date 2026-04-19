import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { getUserById } from '../api/usersApi';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

const UserDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        getUserById(id)
            .then(data => setUser(data))
            .catch(err => setError(err.message))
            .finally(() => setIsLoading(false));
    }, [id]);

    if (isLoading) return <Loader />;
    if (error) return <ErrorMessage message={error} />;
    if (!user) return null;

    return (
        <Container className="py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>User Details</h1>
                <Button variant="secondary" onClick={() => navigate('/users')}>
                    Back to List
                </Button>
            </div>

            <Card>
                <Card.Header className="bg-dark text-white">
                    <h4 className="mb-0">{user.name}</h4>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col md={6}>
                            <h5 className="text-muted mb-3">Особиста інформація</h5>
                            <p><strong>Username:</strong> {user.username}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Phone:</strong> {user.phone}</p>
                            <p><strong>Website:</strong> {user.website}</p>
                        </Col>
                        <Col md={6}>
                            <h5 className="text-muted mb-3">Адреса</h5>
                            <p><strong>City:</strong> {user.address?.city}</p>
                            <p><strong>Street:</strong> {user.address?.street}</p>

                            <h5 className="text-muted mb-3 mt-4">Компанія</h5>
                            <p><strong>Company:</strong> {user.company?.name}</p>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer className="d-flex gap-2">
                    <Button
                        variant="warning"
                        onClick={() => navigate(`/users/${id}/edit`)}
                    >
                        Edit User
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={() => navigate('/users')}
                    >
                        Back to List
                    </Button>
                </Card.Footer>
            </Card>
        </Container>
    );
};

export default UserDetailsPage;