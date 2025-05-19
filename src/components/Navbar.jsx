import React, { useState } from 'react';
import { Button } from '@mui/material';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="select-none flex justify-between items-center w-full px-5 py-3 shadow-lg relative z-50 bg-white">
            {/* Logo */}
            <img src="./Logo1.png" className="w-32 sm:w-36 object-contain w-35 mt-[-45px] mb-[-45px] " alt="Logo" />

            {/* Desktop Nav */}
            <ul className="hidden md:flex bubblegum-sans-regular gap-8 items-center text-lg lg:text-2xl cursor-pointer">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
                <Button
                    style={{ backgroundColor: 'black', textTransform: 'none' }}
                    variant="contained"
                >
                    Get a Free Consultation
                </Button>
            </ul>

            {/* Hamburger for Mobile */}
            <div
                className="md:hidden text-3xl cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </div>

            {/* Mobile Nav */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden py-4 px-6">
                    <ul className="flex flex-col gap-5 text-lg bubblegum-sans-regular">
                        <li onClick={() => setMenuOpen(false)}>Home</li>
                        <li onClick={() => setMenuOpen(false)}>About</li>
                        <li onClick={() => setMenuOpen(false)}>Services</li>
                        <li onClick={() => setMenuOpen(false)}>Contact</li>
                        <Button
                            style={{ backgroundColor: 'black', textTransform: 'none' }}
                            variant="contained"
                            fullWidth
                        >
                            Free Consultation
                        </Button>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
