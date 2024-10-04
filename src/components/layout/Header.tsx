//src/components/layout/Header.tsx
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MoonIcon, SunIcon, ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, isSidebarOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isDesktopAboutOpen, setIsDesktopAboutOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const router = useRouter();
  const { user, logout } = useAuth();

  const menuRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const desktopAboutRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleAbout = () => setIsAboutOpen(!isAboutOpen);
  const toggleDesktopAbout = () => setIsDesktopAboutOpen(!isDesktopAboutOpen);
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const handleLogout = async () => {
    await logout();
    router.push('/login');
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
      if (aboutRef.current && !aboutRef.current.contains(event.target as Node)) {
        setIsAboutOpen(false);
      }
      if (desktopAboutRef.current && !desktopAboutRef.current.contains(event.target as Node)) {
        setIsDesktopAboutOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuVariants = {
    closed: { opacity: 0, y: "-100%" },
    open: { opacity: 1, y: 0 }
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 }
  };

  const dropdownVariants = {
    closed: { opacity: 0, y: -10, display: 'none' },
    open: { opacity: 1, y: 0, display: 'block' }
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black text-white">
      <nav className="flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold">
          trustBank
        </Link>

{/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>

        <nav className="space-x-6 hidden md:flex items-center">
          <Link href="/dashboard" className="hover:text-green-600 transition-colors duration-300">Dashboard</Link>
          <Link href="/trade" className="hover:text-green-600 transition-colors duration-300">Trade</Link>
          <Link href="/markets" className="hover:text-green-600 transition-colors duration-300">Markets</Link>
          <Link href="/calculator" className="hover:text-green-600 transition-colors duration-300">Calculator</Link>
          <div className="relative" ref={desktopAboutRef}>
            <button 
              onClick={toggleDesktopAbout}
              className="flex items-center hover:text-green-600 transition-colors duration-300"
            >
              About
              <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform duration-300 ${isDesktopAboutOpen ? 'transform rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {isDesktopAboutOpen && (
                <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={dropdownVariants}
                  transition={{ duration: 0.3 }}
                  className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                >
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link href="/about/vision" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-600 hover:text-white transition-colors duration-300">Vision</Link>
                    <Link href="/about/mission" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-600 hover:text-white transition-colors duration-300">Mission</Link>
                    <Link href="/about/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-600 hover:text-white transition-colors duration-300">Blog</Link>
                    <Link href="/about/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-600 hover:text-white transition-colors duration-300">FAQ</Link>
                    <Link href="/about/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-600 hover:text-white transition-colors duration-300">Contact Us</Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-300">
            {theme === 'dark' ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
          </button>

          {user ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300"
            >
              Logout
            </button>
          ) : (
            <Link href="/login" passHref>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-300">
                Login
              </button>
            </Link>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            ref={menuRef}
            className="md:hidden bg-black text-white absolute top-full left-0 w-full overflow-hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
          >
            <motion.div className="flex flex-col space-y-4 p-4" variants={menuItemVariants}>
              <Link href="/dashboard" className="text-lg hover:text-green-600 transition-colors duration-300" onClick={toggleMenu}>Dashboard</Link>
              <Link href="/trade" className="text-lg hover:text-green-600 transition-colors duration-300" onClick={toggleMenu}>Trade</Link>
              <Link href="/markets" className="text-lg hover:text-green-600 transition-colors duration-300" onClick={toggleMenu}>Markets</Link>
              <Link href="/calculator" className="text-lg hover:text-green-600 transition-colors duration-300" onClick={toggleMenu}>Calculator</Link>
              
              <div className="relative" ref={aboutRef}>
                <button 
                  onClick={toggleAbout}
                  className="flex items-center justify-between w-full text-lg hover:text-green-600 transition-colors duration-300"
                >
                  About
                  <ChevronDownIcon className={`w-5 h-5 transition-transform duration-300 ${isAboutOpen ? 'transform rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isAboutOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-2 ml-4 space-y-2"
                    >
                      <Link href="/about/vision" className="block text-base hover:text-green-600 transition-colors duration-300" onClick={toggleMenu}>Vision</Link>
                      <Link href="/about/mission" className="block text-base hover:text-green-600 transition-colors duration-300" onClick={toggleMenu}>Mission</Link>
                      <Link href="/about/blog" className="block text-base hover:text-green-600 transition-colors duration-300" onClick={toggleMenu}>Blog</Link>
                      <Link href="/about/faq" className="block text-base hover:text-green-600 transition-colors duration-300" onClick={toggleMenu}>FAQ</Link>
                      <Link href="/about/contact" className="block text-base hover:text-green-600 transition-colors duration-300" onClick={toggleMenu}>Contact Us</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {user ? (
                <button
                  onClick={handleLogout}
                  className="text-lg text-left hover:text-green-600 transition-colors duration-300"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link href="/login" className="text-lg hover:text-green-600 transition-colors duration-300" onClick={toggleMenu}>Login</Link>
                  <Link href="/register" className="text-lg hover:text-green-600 transition-colors duration-300" onClick={toggleMenu}>Register</Link>
                </>
              )}
              <button onClick={toggleTheme} className="text-lg text-left hover:text-green-600 transition-colors duration-300">
                {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              </button>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;