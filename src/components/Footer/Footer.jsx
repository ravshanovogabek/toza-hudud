import React from 'react';
import './footer.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaExternalLinkAlt, FaTelegramPlane, FaInstagram } from 'react-icons/fa';
import logo from '../../assets/images/logo1.png'; // Adjust this path to your actual logo location

const Footer = () => {
    return (
        <footer className="footer" role="contentinfo">
            <div className="header-left">
                <img src={logo} alt="Dezinfeksiya Tashkent Logo" className="logo-icon" />
                <h1>Toza Hudud</h1>
            </div>
            <div className="footer-contact" role="list">
                <div className="contact-item" role="listitem">
                    <div className="icon-box">
                        <FaMapMarkerAlt className="icon" aria-hidden="true" />
                    </div>
                    <span className="contact-text" aria-label="Location">Ўзбекистон, Тошкент шаҳри</span>
                    <FaExternalLinkAlt className="external-link" aria-hidden="true" />
                </div>
                <div className="contact-item" role="listitem">
                    <div className="icon-box">
                        <FaPhoneAlt className="icon" aria-hidden="true" />
                    </div>
                    <span className="contact-text" aria-label="Phone Number">+998 99 119 99 33</span>
                    <FaExternalLinkAlt className="external-link" aria-hidden="true" />
                </div>
                <div className="contact-item" role="listitem">
                    <div className="icon-box">
                        <FaTelegramPlane className="icon" aria-hidden="true" />
                    </div>
                    <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="contact-text" aria-label="Telegram Link">Telegram</a>
                    <FaExternalLinkAlt className="external-link" aria-hidden="true" />
                </div>
                <div className="contact-item" role="listitem">
                    <div className="icon-box">
                        <FaInstagram className="icon" aria-hidden="true" />
                    </div>
                    <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-text" aria-label="Instagram Link">Instagram</a>
                    <FaExternalLinkAlt className="external-link" aria-hidden="true" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
