import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="not-found">
      <div className="container">
        <div className="not-found-content">
          <h1>404</h1>
          <h2>الصفحة غير موجودة</h2>
          <p>
            عذرًا، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
          </p>
          <Link to="/" className="btn btn-primary">
            العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;