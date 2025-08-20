import { useState, useEffect } from 'react';

const useMobileNav = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Close mobile nav when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navMenu = document.getElementById('navmenu');
      const mobileToggle = document.querySelector('.mobile-nav-toggle');
      
      if (
        navMenu && 
        !navMenu.contains(event.target) && 
        !mobileToggle.contains(event.target) &&
        isMobileNavOpen
      ) {
        setIsMobileNavOpen(false);
      }
    };

    // Close on ESC key press
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMobileNavOpen) {
        setIsMobileNavOpen(false);
      }
    };

    // Close when window is resized to desktop size
    const handleResize = () => {
      if (window.innerWidth >= 1200 && isMobileNavOpen) {
        setIsMobileNavOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileNavOpen]);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return {
    isMobileNavOpen,
    toggleMobileNav,
    closeMobileNav
  };
};

export default useMobileNav;