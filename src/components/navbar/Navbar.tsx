import { Link, useLocation } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import { useState, useEffect } from 'react';

interface NavItemProps {
    to: string;
    currentPath: string;
    children: React.ReactNode;
}

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Close the navbar when the location changes
        setOpen(false);
    }, [location]);

    return (
        <nav style={{ fontFamily: "'Raleway', sans-serif" }}>
            <div className='flex items-center justify-between p-4 md:py-6 md:px-10 text-xl'>
                <NavItem to="/" currentPath={location.pathname}>
                    <div className='flex flex-row gap-5 h-fit items-center'>
                        <img className='aspect-square w-10' src="/favicon.png" alt="maison-logo" />
                        <span className='text-2xl font-semibold'>Maison</span>
                    </div>
                </NavItem>

                <div className="block md:hidden">
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
                <ul id='navlinks' className='hidden md:flex md:flex-row md:items-center md:gap-12 md:px-4'>
                    <li><NavItem to="/about" currentPath={location.pathname}>About</NavItem></li>
                    <li><NavItem to="/contact" currentPath={location.pathname}>Contact</NavItem></li>
                    <li><NavItem to="/donate" currentPath={location.pathname}>Donate</NavItem></li>
                    <li><div className='button button-inverse m-0'><NavItem to="/register" currentPath={location.pathname}>Register</NavItem></div></li>
                </ul>
            </div>

            {isOpen && (
                <ul className='lg:hidden w-full h-[88vh] flex flex-col text-right justify-evenly text-xl p-8 bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 border border-gray-100 absolute'>
                    <NavItem to="/" currentPath={location.pathname}>Home</NavItem>
                    <NavItem to="/about" currentPath={location.pathname}>About</NavItem>
                    <NavItem to="/contact" currentPath={location.pathname}>Contact</NavItem>
                    <NavItem to="/donate" currentPath={location.pathname}>Donate</NavItem>
                    <NavItem to="/register" currentPath={location.pathname}>Register</NavItem>
                </ul>
            )}
        </nav>
    );
};

const NavItem: React.FC<NavItemProps> = ({ to, currentPath, children }) => {
    const isActive = currentPath === to;
    return (
        <Link to={to} className={isActive ? 'font-semibold' : ''}>{children}</Link>
    );
};

export default Navbar;
