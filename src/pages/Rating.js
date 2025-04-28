import React, { useState } from 'react';

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!rating) {
      alert('الرجاء تقييم الخدمة قبل الإرسال');
      return;
    }
    
    // هنا يمكن إضافة منطق لإرسال التقييم إلى الخادم
    console.log('تم إرسال التقييم:', { rating, feedback, name, email });
    
    // إظهار رسالة شكر
    setSubmitted(true);
    
    // إعادة ضبط النموذج
    setRating(0);
    setFeedback('');
    setName('');
    setEmail('');
  };
  
  const recentReviews = [
    {
      id: 1,
      name: 'محمد أحمد',
      rating: 5,
      comment: 'خدمة ممتازة! التطبيقات سهلة الاستخدام ومفيدة جدًا. سأواصل استخدامها بكل تأكيد.',
      date: '15 أبريل 2025'
    },
    {
      id: 2,
      name: 'سارة محمود',
      rating: 4,
      comment: 'أنا سعيد جدًا بتطبيق محول الصور. إنه يوفر الكثير من الوقت ويقدم نتائج رائعة.',
      date: '10 أبريل 2025'
    },
    {
      id: 3,
      name: 'أحمد علي',
      rating: 5,
      comment: 'تطبيق عداد التسبيح رائع جدًا وسهل الاستخدام. شكرًا لكم على هذا العمل المميز.',
      date: '5 أبريل 2025'
    }
  ];
  
  const services = [
    { id: 1, name: 'تطبيق عداد التسبيح', rating: 4.8, reviews: 120 },
    { id: 2, name: 'محول الصور', rating: 4.5, reviews: 85 },
    { id: 3, name: 'مدير المهام', rating: 4.7, reviews: 92 },
    { id: 4, name: 'قارئ PDF', rating: 4.6, reviews: 78 },
    { id: 5, name: 'منظم الملفات', rating: 4.4, reviews: 65 },
    { id: 6, name: 'محرر النصوص', rating: 4.9, reviews: 110 }
  ];
  
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>تقييم الخدمات</h1>
          <p>شاركنا رأيك وساعدنا في تحسين خدماتنا</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>تقييم الخدمات</h2>
            <p>تصنيف التطبيقات حسب التقييمات من مستخدمينا</p>
          </div>

          <div className="services-rating">
            <table className="rating-table">
              <thead>
                <tr>
                  <th>الخدمة</th>
                  <th>التقييم</th>
                  <th>عدد التقييمات</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service.id}>
                    <td>{service.name}</td>
                    <td>
                      <div className="star-rating">
                        {[...Array(5)].map((_, i) => (
                          <i 
                            key={i}
                            className={`fas fa-star ${i < Math.floor(service.rating) ? 'filled' : ''}`}
                          ></i>
                        ))}
                        <span>{service.rating}</span>
                      </div>
                    </td>
                    <td>{service.reviews}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>أحدث التقييمات</h2>
            <p>آراء المستخدمين حول خدماتنا</p>
          </div>

          <div className="recent-reviews">
            {recentReviews.map((review) => (
              <div className="review-card" key={review.id}>
                <div className="review-header">
                  <div className="reviewer-name">{review.name}</div>
                  <div className="review-date">{review.date}</div>
                </div>
                <div className="review-rating">
                  {[...Array(5)].map((_, i) => (
                    <i 
                      key={i}
                      className={`fas fa-star ${i < review.rating ? 'filled' : ''}`}
                    ></i>
                  ))}
                </div>
                <div className="review-comment">
                  <p>{review.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="rating-info">
                <h2>أهمية تقييمك لنا</h2>
                <p>
                  تقييمك مهم جدًا لنا، فهو يساعدنا على:
                </p>
                <ul className="rating-benefits">
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>تحسين جودة خدماتنا وتطبيقاتنا</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>فهم احتياجات المستخدمين بشكل أفضل</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>تحديد المشكلات وإصلاحها بسرعة</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>تطوير ميزات جديدة تلبي توقعاتك</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>تحفيز فريقنا على التطوير المستمر</span>
                  </li>
                </ul>
                <p>
                  نحن نأخذ جميع الملاحظات على محمل الجد ونعمل باستمرار
                  على تحسين تجربتك مع خدماتنا وتطبيقاتنا.
                </p>
              </div>
            </div>
            
            <div className="col-md-6">
              {submitted ? (
                <div className="thank-you-message">
                  <div className="success-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h3>شكرًا لك على تقييمك!</h3>
                  <p>
                    نقدر وقتك ورأيك. سنأخذ ملاحظاتك بعين الاعتبار
                    لتحسين خدماتنا.
                  </p>
                  <button 
                    className="btn btn-primary"
                    onClick={() => setSubmitted(false)}
                  >
                    إرسال تقييم آخر
                  </button>
                </div>
              ) : (
                <div className="rating-form-container">
                  <h3>أخبرنا برأيك</h3>
                  <form onSubmit={handleSubmit} className="rating-form">
                    <div className="form-group">
                      <label>تقييمك</label>
                      <div className="star-rating-input">
                        {[...Array(5)].map((_, index) => {
                          const ratingValue = index + 1;
                          
                          return (
                            <i 
                              key={index}
                              className={`fas fa-star ${ratingValue <= (hover || rating) ? 'filled' : ''}`}
                              onClick={() => setRating(ratingValue)}
                              onMouseEnter={() => setHover(ratingValue)}
                              onMouseLeave={() => setHover(0)}
                            ></i>
                          );
                        })}
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="feedback">تعليقك</label>
                      <textarea 
                        id="feedback"
                        className="form-control" 
                        rows="4"
                        placeholder="أخبرنا برأيك حول خدماتنا..."
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                      ></textarea>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="name">الاسم</label>
                      <input 
                        type="text" 
                        id="name"
                        className="form-control" 
                        placeholder="اسمك (اختياري)"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">البريد الإلكتروني</label>
                      <input 
                        type="email" 
                        id="email"
                        className="form-control" 
                        placeholder="بريدك الإلكتروني (اختياري)"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    
                    <button type="submit" className="btn btn-primary">
                      إرسال التقييم
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rating;