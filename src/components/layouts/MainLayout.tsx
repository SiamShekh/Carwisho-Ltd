import { Outlet } from 'react-router-dom';
import Navbar from '../ui/Navbar';

const MainLayout = () => {
    return (
        <div>
            <div className="pt-3">
                <Navbar />
            </div>
            <Outlet />
        </div>
    );
};

export default MainLayout;