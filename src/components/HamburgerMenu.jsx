import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // close on outside click
  useEffect(() => {
    const handleClickOutside = e =>
      menuRef.current && !menuRef.current.contains(e.target) && setIsOpen(false);
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(o => !o);
  const handleNavClick = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const handlePomodoroClick = () => {
    navigate('/NameInput');
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="relative z-50" ref={menuRef}>
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="w-12 h-12 rounded-full flex items-center justify-center
            shadow-md focus:outline-none
            bg-gray-100 text-black dark:bg-gray-800 dark:text-white"
        >
          <div className="flex flex-col justify-between h-5">
            {[0, 1, 2].map(i => (
              <span
                key={i}
                className="block w-6 h-0.5 rounded-full bg-current"
              />
            ))}
          </div>
        </button>

        <div
          className={`
            absolute right-0 top-full mt-2 w-48
            shadow-lg rounded-md py-2 origin-top transform
            transition-all duration-300 ease-in-out
            bg-white text-black dark:bg-gray-800 dark:text-white
            ${isOpen
              ? 'scale-y-100 opacity-100'
              : 'scale-y-0 opacity-0 pointer-events-none'}
          `}
        >
          <ul className="flex flex-col">
            {[
              { id: 'hero', label: 'Home' },
              { id: 'features', label: 'Features' },
              { id: 'article', label: 'Article' }
            ].map(item => (
              <li key={item.id} className="px-4 py-1">
                <button
                  className="w-full text-left rounded-md px-4 py-2 transition-colors duration-200
                          hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}

            {/* Pomodoro menu */}

            <li className="px-4 py-1">
              <button
                className="w-full text-left rounded-md px-4 py-2 transition-colors duration-200
                bg-blue-600 text-white shadow
                hover:bg-gray-200 dark:bg-white dark:text-black"
                onClick={handlePomodoroClick}
              >
                Coba Pomodoro
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
