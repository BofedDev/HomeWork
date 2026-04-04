import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const FormField = ({ label, name, type = "text", formik, placeholder = '' }) => {
    const isTextarea = type === 'textarea';

    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Control
                as={isTextarea ? "textarea" : undefined}
                type={isTextarea ? undefined : type}
                name={name}
                value={formik.values[name] ?? ''}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched[name] && !!formik.errors[name]}
                placeholder={placeholder}
                rows={isTextarea ? 4 : undefined}
            />
            <Form.Control.Feedback type="invalid">
                {formik.errors[name]}
            </Form.Control.Feedback>
        </Form.Group>
    );
};

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    formik: PropTypes.object.isRequired,
    placeholder: PropTypes.string,
};

export default FormField;