import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="animate-fade-in">مرحبًا بك في AboelCode</h1>
          <p className="animate-fade-in">نقدم حلول برمجية متكاملة وتطبيقات مبتكرة لتلبية احتياجاتك الرقمية</p>
          <div className="hero-buttons">
            <Link to="/downloads" className="btn btn-primary">تصفح تطبيقاتنا</Link>
            <Link to="/contact" className="btn btn-outline">تواصل معنا</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>خدماتنا</h2>
            <p>نقدم مجموعة متنوعة من الخدمات والحلول البرمجية عالية الجودة</p>
          </div>

          <div className="row">
            <div className="col-md-4 animate-slide-up">
              <div className="card">
                <div className="card-body">
                  <div className="service-icon">
                    <i className="fas fa-download"></i>
                  </div>
                  <h3 className="card-title">التطبيقات والبرامج</h3>
                  <p className="card-text">مجموعة من التطبيقات والبرامج المفيدة للمستخدمين بمختلف احتياجاتهم.</p>
                  <Link to="/downloads" className="btn btn-primary">عرض التطبيقات</Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 animate-slide-up">
              <div className="card">
                <div className="card-body">
                  <div className="service-icon">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <h3 className="card-title">تحليلات وإحصائيات</h3>
                  <p className="card-text">أدوات تحليلية متقدمة لمساعدتك في فهم أداء موقعك وتحسينه بشكل مستمر.</p>
                  <Link to="/analytics" className="btn btn-primary">تحليل موقعك</Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 animate-slide-up">
              <div className="card">
                <div className="card-body">
                  <div className="service-icon">
                    <i className="fas fa-star"></i>
                  </div>
                  <h3 className="card-title">تقييم الخدمات</h3>
                  <p className="card-text">منصة تقييم شاملة تمكنك من الحصول على آراء المستخدمين حول خدماتك.</p>
                  <Link to="/rating" className="btn btn-primary">تقييم الخدمات</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>أحدث المقالات</h2>
            <p>تابع أحدث الأخبار والمقالات في عالم البرمجة والتقنية</p>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="https://via.placeholder.com/350x200" alt="مقال" className="card-img" />
                <div className="card-body">
                  <h3 className="card-title">كيفية تحسين أداء موقعك</h3>
                  <p className="card-text">نصائح وإرشادات لتحسين أداء موقعك وتجربة المستخدم...</p>
                  <Link to="/blog" className="btn btn-primary">قراءة المزيد</Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <img src="https://via.placeholder.com/350x200" alt="مقال" className="card-img" />
                <div className="card-body">
                  <h3 className="card-title">أدوات تطوير الويب الحديثة</h3>
                  <p className="card-text">استعراض لأحدث أدوات تطوير الويب التي يمكن أن تساعدك...</p>
                  <Link to="/blog" className="btn btn-primary">قراءة المزيد</Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <img src="https://via.placeholder.com/350x200" alt="مقال" className="card-img" />
                <div className="card-body">
                  <h3 className="card-title">أساسيات الأمان الرقمي</h3>
                  <p className="card-text">كيفية حماية بياناتك ومعلوماتك الشخصية من التهديدات...</p>
                  <Link to="/blog" className="btn btn-primary">قراءة المزيد</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>ادعم المطورين</h2>
            <p>ساهم في تطوير المزيد من البرامج والتطبيقات المفيدة</p>
          </div>

          <div className="donate-section">
            <p className="text-center">
              إذا أعجبتك برامجنا وتطبيقاتنا، يمكنك دعمنا للاستمرار في تطوير المزيد من الأدوات المفيدة.
            </p>
            <div className="text-center mt-4">
              <Link to="/donations" className="btn btn-primary">تبرع الآن</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>تواصل معنا</h2>
            <p>نحن هنا للإجابة على استفساراتك ومساعدتك</p>
          </div>

          <div className="contact-info">
            <div className="row">
              <div className="col-md-6">
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <h3>البريد الإلكتروني</h3>
                  <p>ahm@aboelcode.com</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="contact-item">
                  <i className="fab fa-whatsapp"></i>
                  <h3>واتساب</h3>
                  <p>+201234567890</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-4">
              <Link to="/contact" className="btn btn-primary">اتصل بنا</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;