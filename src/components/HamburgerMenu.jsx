import React, { useState, useEffect, useRef } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // close on outside click
  useEffect(() => {
    const handleClickOutside = e =>
      menuRef.current && !menuRef.current.contains(e.target) && setIsOpen(false);
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // lock scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(o => !o);
  const handleNavClick = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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
        {/* tombol bundar dengan tiga garis */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className={`
            w-12 h-12 rounded-full flex items-center justify-center
            ${isOpen ? 'bg-white' : 'bg-[#EDEAFF]'} 
            shadow-md focus:outline-none
          `}
        >
          <div className="flex flex-col justify-between h-5">
            {/* blok garis */}
            {[0,1,2].map(i => (
              <span
                key={i}
                className={`block w-6 h-0.5 rounded-full
                  ${isOpen ? 'bg-gray-500' : 'bg-gray-800'}
                `}
              />
            ))}
          </div>
        </button>

        {/* dropdown */}
        <div
          className={`
            absolute right-0 top-full mt-2 w-48 bg-white text-black
            shadow-lg rounded-md py-2 origin-top transform
            transition-all duration-300 ease-in-out
            ${isOpen
              ? 'scale-y-100 opacity-100'
              : 'scale-y-0 opacity-0 pointer-events-none'}
          `}
        >
          <ul className="flex flex-col">
            <li className="px-4 py-2 hover:bg-gray-100">
              <button className="w-full text-left" onClick={() => handleNavClick('hero')}>
                Home
              </button>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <button className="w-full text-left" onClick={() => handleNavClick('features')}>
                Features
              </button>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <button className="w-full text-left" onClick={() => handleNavClick('article')}>
                Article
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
