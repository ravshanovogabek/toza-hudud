import React, { useState } from 'react';
import './header.css';
import logo from '../../assets/images/logo1.png'; // Update with the actual logo image path
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for the hamburger menu

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-left">
                <img src={logo} alt="Dezinfeksiya Tashkent Logo" className="logo-icon" />
                <h1>Toza Hudud</h1>
            </div>

            <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`} aria-label="Main Navigation">
                <a href="/" className="nav-link">Асосий</a>
                <a href="#about" className="nav-link">Биз ҳақимизда</a>
                <a href="#services" className="nav-link">Хизматлар</a>
                <a href="#faq" className="nav-link">ФАҚ</a>
            </nav>

            <div className="header-right">
                <select className="language-selector" aria-label="Language Selector">
                    <option value="uz">Ўзбекча</option>
                    <option value="ru">Русский</option>
                    <option value="en">English</option>
                </select>
                <button className="contact-button">Богланиш</button>
            </div>

            <div className="hamburger" onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
        </header>
    );
};

export default Header;
