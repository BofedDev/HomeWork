import { Spinner, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Loader = ({ text = 'Завантаження...' }) => {
    return (
        <Container className="d-flex justify-content-center align-items-center py-5">
            <Spinner animation="border" role="status" variant="primary" />
            <span className="ms-3 text-muted">{text}</span>
        </Container>
    );
};

Loader.propTypes = {
    text: PropTypes.string,
};

export default Loader;