import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const AppNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand as={NavLink} to="/users">
                    Users Manager
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="main-navbar" />

                <Navbar.Collapse id="main-navbar">
                    <Nav className="ms-auto">
                        <Nav.Link
                            as={NavLink}
                            to="/users"
                            end
                            style={({ isActive }) => ({
                                color: isActive ? '#fff' : '#adb5bd',
                                fontWeight: isActive ? 'bold' : 'normal',
                            })}
                        >
                            Users List
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            to="/users/create"
                            style={({ isActive }) => ({
                                color: isActive ? '#fff' : '#adb5bd',
                                fontWeight: isActive ? 'bold' : 'normal',
                            })}
                        >
                            + Create User
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;