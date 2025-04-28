import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>AboelCode</h3>
            <p>نقدم خدمات وحلول برمجية متكاملة للأفراد والشركات بجودة عالية وأسعار تنافسية.</p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>روابط سريعة</h3>
            <ul>
              <li><Link to="/">الرئيسية</Link></li>
              <li><Link to="/about">نحن</Link></li>
              <li><Link to="/downloads">التحميلات</Link></li>
              <li><Link to="/blog">المدونة</Link></li>
              <li><Link to="/contact">تواصل معنا</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>الخدمات</h3>
            <ul>
              <li><Link to="/downloads">التطبيقات والبرامج</Link></li>
              <li><Link to="/analytics">تحليلات المواقع</Link></li>
              <li><Link to="/rating">تقييم الخدمات</Link></li>
              <li><Link to="/donations">دعم المطورين</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>تواصل معنا</h3>
            <p>
              <i className="fas fa-envelope"></i> ahm@aboelcode.com
            </p>
            <p>
              <i className="fab fa-whatsapp"></i> +201234567890
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i> القاهرة، مصر
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} AboelCode. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;