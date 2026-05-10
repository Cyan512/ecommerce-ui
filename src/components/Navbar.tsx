import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, login, logout, isAdmin } = useAuth();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              Ecommerce
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Products
            </Link>
            <Link to="/cart" className="text-gray-600 hover:text-gray-900">
              Cart
            </Link>
            {isAdmin && (
              <Link to="/admin/products" className="text-gray-600 hover:text-gray-900">
                Admin
              </Link>
            )}
            {user ? (
              <div className="flex items-center space-x-2">
                <img src={user.imageUrl || 'https://via.placeholder.com/32'} alt={user.name} className="w-8 h-8 rounded-full" />
                <button onClick={logout} className="text-red-600 hover:text-red-700">
                  Logout
                </button>
              </div>
            ) : (
              <button onClick={login} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Login with Google
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}