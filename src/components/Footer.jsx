import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="footer-title">WebVibe</h3>
            <p className="footer-text">
              Crafting digital solutions that work
            </p>
          </div>
          <div>
            <h3 className="footer-title">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="footer-link">Website Development</a></li>
              <li><a href="#services" className="footer-link">SEO Optimization</a></li>
              <li><a href="#services" className="footer-link">Contextual Advertising</a></li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title">Contact</h3>
            <ul className="space-y-2">
              <li><a href="mailto:hello@webvibe.com" className="footer-link">hello@webvibe.com</a></li>
              <li><a href="https://t.me/webvibe" className="footer-link">Telegram</a></li>
              <li><a href="https://instagram.com/webvibe" className="footer-link">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="flex items-center justify-center gap-2">
            © 2025 WebVibe. Made with <Heart className="w-4 h-4 footer-heart" /> and pure CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;