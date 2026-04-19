import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Alert } from 'react-bootstrap';
import { getUserById, updateUser } from '../api/usersApi';
import UserForm from '../components/UserForm';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

const EditUserPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    // Завантажуємо існуючого юзера
    useEffect(() => {
        setIsLoading(true);
        getUserById(id)
            .then(data => setUser(data))
            .catch(err => setError(err.message))
            .finally(() => setIsLoading(false));
    }, [id]);

    const handleSubmit = (values) => {
        setIsSaving(true);
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

        updateUser(id, userData)
            .then(() => {
                setSuccess(true);
                setTimeout(() => navigate('/users'), 1500);
            })
            .catch(err => setError(err.message))
            .finally(() => setIsSaving(false));
    };

    // Перетворюємо вкладену структуру API у плоску для форми
    const defaultValues = user
        ? {
            name: user.name || '',
            username: user.username || '',
            email: user.email || '',
            phone: user.phone || '',
            website: user.website || '',
            city: user.address?.city || '',
            street: user.address?.street || '',
            companyName: user.company?.name || '',
        }
        : null;

    if (isLoading) return <Loader />;
    if (error && !user) return <ErrorMessage message={error} />;

    return (
        <Container className="py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Edit User</h1>
                <button
                    className="btn btn-secondary"
                    onClick={() => navigate('/users')}
                >
                    ← Back to List
                </button>
            </div>

            {success && (
                <Alert variant="success" className="mb-4">
                    Користувача успішно оновлено! Перенаправлення...
                </Alert>
            )}

            {error && user && (
                <Alert variant="danger" className="mb-4">
                    {error}
                </Alert>
            )}

            <UserForm
                onSubmit={handleSubmit}
                defaultValues={defaultValues}
                isLoading={isSaving}
            />
        </Container>
    );
};

export default EditUserPage;