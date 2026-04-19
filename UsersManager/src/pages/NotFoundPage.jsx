import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <Container className="py-5 text-center">
            <h1 className="display-1 fw-bold text-muted">404</h1>
            <h2 className="mb-3">Сторінку не знайдено</h2>
            <p className="text-muted mb-4">
                Схоже, ця сторінка не існує або була переміщена.
            </p>
            <Button variant="primary" onClick={() => navigate('/users')}>
                Повернутись на головну
            </Button>
        </Container>
    );
};

export default NotFoundPage;