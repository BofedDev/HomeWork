import { Routes, Route, Navigate } from 'react-router-dom';
import UsersListPage from '../pages/UsersListPage';
import UserDetailsPage from '../pages/UserDetailsPage';
import CreateUserPage from '../pages/CreateUserPage';
import EditUserPage from '../pages/EditUserPage';
import NotFoundPage from '../pages/NotFoundPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/users" replace />} />
            <Route path="/users" element={<UsersListPage />} />
            <Route path="/users/create" element={<CreateUserPage />} />
            <Route path="/users/:id" element={<UserDetailsPage />} />
            <Route path="/users/:id/edit" element={<EditUserPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default AppRoutes;