import { Alert, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ErrorMessage = ({ message = 'Щось пішло не так.Спробуйте пізніше.' }) => {
    return (
        <Container className="py-4">
            <Alert variant="danger">
                <Alert.Heading>Помилка</Alert.Heading>
                <p className="mb-0">{message}</p>
            </Alert>
        </Container>
    );
};

ErrorMessage.propTypes = {
    message: PropTypes.string,
};

export default ErrorMessage;