import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Alert } from 'react-bootstrap';
import { createUser } from '../api/usersApi';
import UserForm from '../components/UserForm';

const CreateUserPage = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (values, { resetForm }) => {
        setIsLoading(true);
        setError(null);

        const userData = {
            name: values.name,
            username: values.username,
            email: values.email,
            phone: values.phone,
            website: values.website,
            address: {
                city: values.city,
                street: values.street,
            },
            company: {
                name: values.companyName,
            },
        };

        createUser(userData)
            .then(() => {
                setSuccess(true);
                resetForm();
                setTimeout(() => navigate('/users'), 1500);
            })
            .catch(err => setError(err.message))
            .finally(() => setIsLoading(false));
    };

    return (
        <Container className="py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Create New User</h1>
                <button
                    className="btn btn-secondary"
                    onClick={() => navigate('/users')}
                >
                    ← Back to List
                </button>
            </div>

            {success && (
                <Alert variant="success" className="mb-4">
                    Користувача успішно створено! Перенаправлення...
                </Alert>
            )}

            {error && (
                <Alert variant="danger" className="mb-4">
                    {error}
                </Alert>
            )}

            <UserForm onSubmit={handleSubmit} isLoading={isLoading} />
        </Container>
    );
};

export default CreateUserPage;