import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if the user is authenticated
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const handleSignOut = () => {
    // Clear authentication (e.g., remove token)
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    onClose(); // Close the sidebar after sign-out
    router.push('/login'); // Redirect to login page
  };

  return (
    <>
      {/* Sidebar for mobile views */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-full bg-gray-900 text-white transform transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <nav className="flex-1 p-4 pt-20">
          <ul>
            <li>
              <Link href="/dashboard" legacyBehavior>
                <a className="flex items-center p-2 hover:bg-green-600 rounded">
                  <span className="w-5 h-5 mr-2">🏠</span> Dashboard
                </a>
              </Link>
            </li>
            <li>
              <Link href="/trade" legacyBehavior>
                <a className="flex items-center p-2 hover:bg-green-600 rounded">
                  <span className="w-5 h-5 mr-2">📈</span> Trade
                </a>
              </Link>
            </li>
            {/* <li>
              <Link href="/wallet" legacyBehavior>
                <a className="flex items-center p-2 hover:bg-green-600 rounded">
                  <span className="w-5 h-5 mr-2">💼</span> Wallet
                </a>
              </Link>
            </li> */}
            <li>
              <Link href="/markets" legacyBehavior>
                <a className="flex items-center p-2 hover:bg-green-600 rounded">
                  <span className="w-5 h-5 mr-2">💹</span> Markets
                </a>
              </Link>
            </li>
            <li>
              <Link href="/calculator" legacyBehavior>
                <a className="flex items-center p-2 hover:bg-green-600 rounded">
                  <span className="w-5 h-5 mr-2">🔢</span> Calculator
                </a>
              </Link>
            </li>
            <li>
              <div className="block">About</div>
              <div className="ml-4 space-y-1">
                <Link href="/about/vision" legacyBehavior>
                  <a className="flex items-center p-2 hover:bg-green-600 rounded">
                    <span className="w-5 h-5 mr-2">👁️</span> Vision
                  </a>
                </Link>
                <Link href="/about/mission" legacyBehavior>
                  <a className="flex items-center p-2 hover:bg-green-600 rounded">
                    <span className="w-5 h-5 mr-2">🎯</span> Mission
                  </a>
                </Link>
                <Link href="/about/blog" legacyBehavior>
                  <a className="flex items-center p-2 hover:bg-green-600 rounded">
                    <span className="w-5 h-5 mr-2">📝</span> Blog
                  </a>
                </Link>
                <Link href="/about/faq" legacyBehavior>
                  <a className="flex items-center p-2 hover:bg-green-600 rounded">
                    <span className="w-5 h-5 mr-2">📝</span> FAQ
                  </a>
                </Link>
                <Link href="/about/contact" legacyBehavior>
                  <a className="flex items-center p-2 hover:bg-green-600 rounded">
                    <span className="w-5 h-5 mr-2">🎯</span> Contact Us
                  </a>
                </Link>
              </div>
            </li>
            <li>
             
            </li>
          </ul>
        </nav>
      </aside>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-30 bg-black opacity-50"
        />
      )}
    </>
  );
};

export default Sidebar;
