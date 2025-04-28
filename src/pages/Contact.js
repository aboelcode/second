import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // هنا يمكن إضافة منطق لإرسال بيانات النموذج إلى الخادم
    console.log('تم إرسال نموذج الاتصال:', formData);
    
    // إظهار رسالة النجاح
    setSubmitted(true);
    
    // إعادة ضبط النموذج
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'البريد الإلكتروني',
      content: 'ahm@aboelcode.com',
      link: 'mailto:ahm@aboelcode.com'
    },
    {
      icon: 'fab fa-whatsapp',
      title: 'واتساب',
      content: '+201234567890',
      link: 'https://wa.me/201234567890'
    },
    {
      icon: 'fab fa-linkedin',
      title: 'لينكد إن',
      content: 'AboelCode',
      link: 'https://linkedin.com/in/aboelcode'
    },
    {
      icon: 'fab fa-facebook',
      title: 'فيسبوك',
      content: 'AboelCode',
      link: 'https://facebook.com/aboelcode'
    }
  ];
  
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>تواصل معنا</h1>
          <p>نحن هنا للإجابة على استفساراتك ومساعدتك</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-info-container">
                <h2>معلومات الاتصال</h2>
                <p>
                  يمكنك التواصل معنا مباشرة من خلال أي من وسائل الاتصال أدناه
                  أو يمكنك ملء نموذج الاتصال وسنرد عليك في أقرب وقت ممكن.
                </p>
                
                <div className="contact-info-items">
                  {contactInfo.map((item, index) => (
                    <div className="contact-info-item" key={index}>
                      <div className="contact-icon">
                        <i className={item.icon}></i>
                      </div>
                      <div className="contact-details">
                        <h3>{item.title}</h3>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          {item.content}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="office-hours">
                  <h3>ساعات العمل</h3>
                  <p>
                    <span className="day">الأحد - الخميس:</span>
                    <span className="time">9:00 ص - 5:00 م</span>
                  </p>
                  <p>
                    <span className="day">الجمعة - السبت:</span>
                    <span className="time">مغلق</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              {submitted ? (
                <div className="thank-you-message">
                  <div className="success-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h3>شكرًا لتواصلك معنا!</h3>
                  <p>
                    تم استلام رسالتك بنجاح. سنقوم بالرد عليك في أقرب وقت ممكن.
                  </p>
                  <button 
                    className="btn btn-primary"
                    onClick={() => setSubmitted(false)}
                  >
                    إرسال رسالة أخرى
                  </button>
                </div>
              ) : (
                <div className="contact-form-container">
                  <h2>أرسل لنا رسالة</h2>
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                      <label htmlFor="name">الاسم</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        className="form-control" 
                        placeholder="الاسم الكامل"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">البريد الإلكتروني</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        className="form-control" 
                        placeholder="بريدك الإلكتروني"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="subject">الموضوع</label>
                      <input 
                        type="text" 
                        id="subject"
                        name="subject"
                        className="form-control" 
                        placeholder="موضوع الرسالة"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="message">الرسالة</label>
                      <textarea 
                        id="message"
                        name="message"
                        className="form-control" 
                        rows="5"
                        placeholder="اكتب رسالتك هنا..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">
                      إرسال الرسالة
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>الأسئلة الشائعة</h2>
            <p>إجابات على الأسئلة الأكثر شيوعًا</p>
          </div>
          
          <div className="faqs">
            <div className="faq-item">
              <h3>ما هي مواعيد الرد على الاستفسارات؟</h3>
              <p>
                نحن نسعى للرد على جميع الاستفسارات خلال 24-48 ساعة من وقت استلامها
                خلال أيام العمل الرسمية (الأحد إلى الخميس).
              </p>
            </div>
            
            <div className="faq-item">
              <h3>هل تقدمون دعمًا فنيًا للتطبيقات؟</h3>
              <p>
                نعم، نقدم دعمًا فنيًا لجميع تطبيقاتنا. يمكنك التواصل معنا من خلال
                نموذج الاتصال أو عبر البريد الإلكتروني للحصول على المساعدة.
              </p>
            </div>
            
            <div className="faq-item">
              <h3>هل يمكنني طلب تطوير تطبيق مخصص؟</h3>
              <p>
                بالتأكيد! نحن نقدم خدمات تطوير مخصصة للأفراد والشركات. يرجى التواصل
                معنا مع تفاصيل متطلباتك وسنرد عليك بتقدير للتكلفة والوقت.
              </p>
            </div>
            
            <div className="faq-item">
              <h3>هل تقدمون خدمات استضافة المواقع؟</h3>
              <p>
                حاليًا، نحن لا نقدم خدمات استضافة مباشرة ولكن يمكننا تقديم توصيات
                ومساعدتك في اختيار مزود استضافة مناسب لاحتياجاتك.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;