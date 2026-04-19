import { BrowserRouter } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import AppRoutes from './routes/AppRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <BrowserRouter>
            <AppNavbar />
            <main>
                <AppRoutes />
            </main>
        </BrowserRouter>
    );
};

export default App;