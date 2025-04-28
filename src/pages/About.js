import React from 'react';

const About = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>نحن</h1>
          <p>تعرف على فريق AboelCode ورؤيتنا ورسالتنا</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>من نحن</h2>
              <p>
                نحن فريق من المطورين المحترفين الذين يسعون لتقديم حلول برمجية مبتكرة وعالية الجودة.
                تأسست AboelCode بهدف تلبية احتياجات السوق المتزايدة للتطبيقات والبرامج المتطورة
                التي تساعد الأفراد والشركات على تحقيق أهدافهم بكفاءة وفعالية.
              </p>
              <p>
                نؤمن بأن التكنولوجيا يجب أن تكون في متناول الجميع، لذلك نسعى جاهدين لتطوير
                منتجات سهلة الاستخدام وفعالة في نفس الوقت. نحن ملتزمون بتقديم أعلى مستويات
                الجودة والأمان في جميع منتجاتنا.
              </p>
            </div>
            <div className="col-md-6">
              <img src="https://via.placeholder.com/600x400" alt="فريق العمل" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>رؤيتنا ورسالتنا</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">رؤيتنا</h3>
                  <p className="card-text">
                    نطمح أن نكون الرواد في مجال تطوير البرمجيات والحلول التقنية المبتكرة
                    على مستوى المنطقة العربية، وتقديم منتجات عالية الجودة تساهم في تسهيل
                    الحياة اليومية للأفراد وتعزيز إنتاجية الشركات.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">رسالتنا</h3>
                  <p className="card-text">
                    تطوير حلول برمجية مبتكرة وعالية الجودة تلبي احتياجات المستخدمين
                    وتساعدهم على تحقيق أهدافهم بكفاءة. نسعى لبناء علاقات طويلة الأمد
                    مع عملائنا من خلال تقديم خدمة متميزة ودعم فني مستمر.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>قيمنا</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="value-item">
                <div className="value-icon">
                  <i className="fas fa-gem"></i>
                </div>
                <h3>الجودة</h3>
                <p>
                  نلتزم بتقديم منتجات وخدمات ذات جودة عالية تفوق توقعات عملائنا.
                  نهتم بأدق التفاصيل ونسعى للتحسين المستمر.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="value-item">
                <div className="value-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3>الابتكار</h3>
                <p>
                  نشجع الإبداع والتفكير خارج الصندوق. نسعى دائمًا لإيجاد حلول
                  مبتكرة للتحديات التي تواجه عملائنا.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="value-item">
                <div className="value-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3>العمل الجماعي</h3>
                <p>
                  نؤمن بقوة العمل الجماعي ونعزز التعاون بين أعضاء فريقنا
                  لتحقيق نتائج أفضل وتقديم قيمة أكبر لعملائنا.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>فريقنا</h2>
            <p>نفخر بفريقنا المحترف من المطورين والمصممين</p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="team-member">
                <img src="https://via.placeholder.com/300x300" alt="عضو الفريق" className="team-img" />
                <h3>محمد أحمد</h3>
                <p className="position">مؤسس ومطور رئيسي</p>
                <div className="social-icons">
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-github"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-member">
                <img src="https://via.placeholder.com/300x300" alt="عضو الفريق" className="team-img" />
                <h3>أحمد محمد</h3>
                <p className="position">مطور واجهة أمامية</p>
                <div className="social-icons">
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-github"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-member">
                <img src="https://via.placeholder.com/300x300" alt="عضو الفريق" className="team-img" />
                <h3>سارة محمود</h3>
                <p className="position">مصممة واجهات المستخدم</p>
                <div className="social-icons">
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fab fa-dribbble"></i></a>
                  <a href="#"><i className="fab fa-behance"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;