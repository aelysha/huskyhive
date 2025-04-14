import { Link } from 'react-router-dom';

export default function Navbar() {
    return(
        <nav>
            {/* Logo + Name */}
            <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-yellow-400 rounded"></div>
                <Link to="/" className="font-bold text-lg">Huskies</Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/rsos" className="hover:underline">RSOs</Link>
                <Link to="/events" className="hover:underline">Events</Link>
                <Link to="/calendar" className="hover:underline">Calendar</Link>
            </div>
        </nav>
    );
}