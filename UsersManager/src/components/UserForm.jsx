import { Formik, Form, Field, ErrorMessage as FormikError } from 'formik';
import { Button, Form as BsForm, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import validationSchema from '../validation/userSchema';

const initialValues = {
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    city: '',
    street: '',
    companyName: '',
};

const UserForm = ({ onSubmit, defaultValues, isLoading }) => {
    return (
        <Formik
            initialValues={defaultValues || initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
        >
            {({ isSubmitting }) => (
                <Form>
                    <Row>

                        <Col md={6}>
                            <BsForm.Group className="mb-3">
                                <BsForm.Label>Name</BsForm.Label>
                                <Field
                                    name="name"
                                    as={BsForm.Control}
                                    placeholder="Введіть ім'я"
                                />
                                <FormikError
                                    name="name"
                                    render={msg => (
                                        <div className="text-danger small mt-1">{msg}</div>
                                    )}
                                />
                            </BsForm.Group>
                        </Col>

                        <Col md={6}>
                            <BsForm.Group className="mb-3">
                                <BsForm.Label>Username</BsForm.Label>
                                <Field
                                    name="username"
                                    as={BsForm.Control}
                                    placeholder="Введіть username"
                                />
                                <FormikError
                                    name="username"
                                    render={msg => (
                                        <div className="text-danger small mt-1">{msg}</div>
                                    )}
                                />
                            </BsForm.Group>
                        </Col>

                        <Col md={6}>
                            <BsForm.Group className="mb-3">
                                <BsForm.Label>Email</BsForm.Label>
                                <Field
                                    name="email"
                                    as={BsForm.Control}
                                    placeholder="Введіть email"
                                    type="email"
                                />
                                <FormikError
                                    name="email"
                                    render={msg => (
                                        <div className="text-danger small mt-1">{msg}</div>
                                    )}
                                />
                            </BsForm.Group>
                        </Col>

                        <Col md={6}>
                            <BsForm.Group className="mb-3">
                                <BsForm.Label>Phone</BsForm.Label>
                                <Field
                                    name="phone"
                                    as={BsForm.Control}
                                    placeholder="Введіть телефон"
                                />
                                <FormikError
                                    name="phone"
                                    render={msg => (
                                        <div className="text-danger small mt-1">{msg}</div>
                                    )}
                                />
                            </BsForm.Group>
                        </Col>

                        <Col md={6}>
                            <BsForm.Group className="mb-3">
                                <BsForm.Label>Website</BsForm.Label>
                                <Field
                                    name="website"
                                    as={BsForm.Control}
                                    placeholder="Введіть вебсайт"
                                />
                                <FormikError
                                    name="website"
                                    render={msg => (
                                        <div className="text-danger small mt-1">{msg}</div>
                                    )}
                                />
                            </BsForm.Group>
                        </Col>

                        <Col md={6}>
                            <BsForm.Group className="mb-3">
                                <BsForm.Label>City</BsForm.Label>
                                <Field
                                    name="city"
                                    as={BsForm.Control}
                                    placeholder="Введіть місто"
                                />
                                <FormikError
                                    name="city"
                                    render={msg => (
                                        <div className="text-danger small mt-1">{msg}</div>
                                    )}
                                />
                            </BsForm.Group>
                        </Col>

                        <Col md={6}>
                            <BsForm.Group className="mb-3">
                                <BsForm.Label>Street</BsForm.Label>
                                <Field
                                    name="street"
                                    as={BsForm.Control}
                                    placeholder="Введіть вулицю"
                                />
                                <FormikError
                                    name="street"
                                    render={msg => (
                                        <div className="text-danger small mt-1">{msg}</div>
                                    )}
                                />
                            </BsForm.Group>
                        </Col>

                        <Col md={6}>
                            <BsForm.Group className="mb-3">
                                <BsForm.Label>Company Name</BsForm.Label>
                                <Field
                                    name="companyName"
                                    as={BsForm.Control}
                                    placeholder="Введіть назву компанії"
                                />
                                <FormikError
                                    name="companyName"
                                    render={msg => (
                                        <div className="text-danger small mt-1">{msg}</div>
                                    )}
                                />
                            </BsForm.Group>
                        </Col>
                    </Row>

                    <div className="d-flex gap-2 mt-2">
                        <Button
                            type="submit"
                            variant="primary"
                            disabled={isSubmitting || isLoading}
                        >
                            {isLoading ? 'Збереження...' : 'Зберегти'}
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

UserForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    defaultValues: PropTypes.shape({
        name: PropTypes.string,
        username: PropTypes.string,
        email: PropTypes.string,
        phone: PropTypes.string,
        website: PropTypes.string,
        city: PropTypes.string,
        street: PropTypes.string,
        companyName: PropTypes.string,
    }),
    isLoading: PropTypes.bool,
};

export default UserForm;