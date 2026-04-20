import { Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const UsersTable = ({ users, onDelete }) => {
    const navigate = useNavigate();

    return (
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
                                onClick={() => onDelete(user.id)}
                            >
                                Delete
                            </Button>
                        </div>
                    </td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
};

UsersTable.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            email: PropTypes.string,
            phone: PropTypes.string,
            website: PropTypes.string,
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default UsersTable;