import { Outlet } from 'react-router-dom';
import Navbar from '../ui/Navbar';
import Footer from '../ui/Footer';

const MainLayout = () => {
    return (
        <div>
            <div className="pt-3">
                <Navbar />
            </div>
            <Outlet />
            <div className="">
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;