import React, { useState } from 'react';

const Donations = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('payeer');
  const [customAmount, setCustomAmount] = useState('');
  
  const handleAmountClick = (amount) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };
  
  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setDonationAmount('custom');
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const finalAmount = donationAmount === 'custom' ? customAmount : donationAmount;
    
    // في هذه المرحلة، يمكن تنفيذ منطق توجيه المستخدم إلى صفحة الدفع
    alert(`شكرًا لدعمك! سيتم توجيهك لإتمام عملية التبرع بمبلغ ${finalAmount}$ عبر ${paymentMethod === 'payeer' ? 'Payeer' : 'Bitcoin'}`);
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>دعم المطورين</h1>
          <p>ساهم في استمرار تطوير البرمجيات المفيدة والمجانية</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>لماذا ندعم المطورين؟</h2>
              <p>
                تساعد تبرعاتك في دعم مطورينا للاستمرار في تقديم برمجيات مفيدة وعالية الجودة.
                نهدف إلى إبقاء كل برامجنا مجانية ومفتوحة المصدر للجميع، ولكن هذا يتطلب وقتًا وجهدًا كبيرًا.
              </p>
              <p>
                يتم استخدام التبرعات في:
              </p>
              <ul className="donation-uses">
                <li>
                  <i className="fas fa-server"></i>
                  <span>تكاليف استضافة الخوادم والخدمات</span>
                </li>
                <li>
                  <i className="fas fa-code"></i>
                  <span>تطوير ميزات وتطبيقات جديدة</span>
                </li>
                <li>
                  <i className="fas fa-bug"></i>
                  <span>إصلاح الأخطاء وتحسين الأداء</span>
                </li>
                <li>
                  <i className="fas fa-graduation-cap"></i>
                  <span>توفير موارد تعليمية للمجتمع</span>
                </li>
              </ul>
            </div>
            
            <div className="col-md-6">
              <div className="donation-form-card card">
                <div className="card-body">
                  <h3 className="card-title">تبرع الآن</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>اختر مبلغ التبرع:</label>
                      <div className="donation-amounts">
                        <button 
                          type="button" 
                          className={`amount-btn ${donationAmount === '5' ? 'active' : ''}`}
                          onClick={() => handleAmountClick('5')}
                        >
                          $5
                        </button>
                        <button 
                          type="button" 
                          className={`amount-btn ${donationAmount === '10' ? 'active' : ''}`}
                          onClick={() => handleAmountClick('10')}
                        >
                          $10
                        </button>
                        <button 
                          type="button" 
                          className={`amount-btn ${donationAmount === '20' ? 'active' : ''}`}
                          onClick={() => handleAmountClick('20')}
                        >
                          $20
                        </button>
                        <button 
                          type="button" 
                          className={`amount-btn ${donationAmount === '50' ? 'active' : ''}`}
                          onClick={() => handleAmountClick('50')}
                        >
                          $50
                        </button>
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label>أو أدخل مبلغًا مخصصًا:</label>
                      <div className="custom-amount-input">
                        <span className="currency-symbol">$</span>
                        <input 
                          type="number" 
                          className="form-control" 
                          placeholder="مبلغ مخصص"
                          value={customAmount}
                          onChange={handleCustomAmountChange}
                          min="1"
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label>اختر طريقة الدفع:</label>
                      <div className="payment-methods">
                        <div 
                          className={`payment-method ${paymentMethod === 'payeer' ? 'active' : ''}`}
                          onClick={() => setPaymentMethod('payeer')}
                        >
                          <i className="fas fa-credit-card"></i>
                          <span>Payeer</span>
                        </div>
                        <div 
                          className={`payment-method ${paymentMethod === 'bitcoin' ? 'active' : ''}`}
                          onClick={() => setPaymentMethod('bitcoin')}
                        >
                          <i className="fab fa-bitcoin"></i>
                          <span>Bitcoin</span>
                        </div>
                      </div>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="btn btn-primary donate-btn"
                      disabled={!donationAmount || (donationAmount === 'custom' && !customAmount)}
                    >
                      تبرع الآن
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>المتبرعون المميزون</h2>
            <p>شكر خاص لجميع الداعمين الذين ساهموا في استمرار مشاريعنا</p>
          </div>
          
          <div className="donors-list">
            <div className="row">
              <div className="col-md-4">
                <div className="donor-card">
                  <div className="donor-avatar">
                    <img src="https://via.placeholder.com/100" alt="متبرع" />
                  </div>
                  <h3>أحمد محمد</h3>
                  <p className="donor-amount">$100</p>
                  <p className="donor-message">
                    "استمروا في العمل الرائع! تطبيقاتكم أنقذتني كثيرًا."
                  </p>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="donor-card">
                  <div className="donor-avatar">
                    <img src="https://via.placeholder.com/100" alt="متبرع" />
                  </div>
                  <h3>سارة أحمد</h3>
                  <p className="donor-amount">$75</p>
                  <p className="donor-message">
                    "أستخدم برامجكم يوميًا وأقدر جهودكم الرائعة!"
                  </p>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="donor-card">
                  <div className="donor-avatar">
                    <img src="https://via.placeholder.com/100" alt="متبرع" />
                  </div>
                  <h3>محمد علي</h3>
                  <p className="donor-amount">$50</p>
                  <p className="donor-message">
                    "شكرًا على توفير هذه الأدوات بشكل مجاني للجميع."
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
            <h2>أسئلة شائعة</h2>
          </div>
          
          <div className="faq-section">
            <div className="faq-item">
              <h3>هل تبرعي آمن؟</h3>
              <p>
                نعم، جميع عمليات التبرع تتم عبر منصات دفع آمنة ومشفرة. نحن لا نخزن أي معلومات 
                حساسة متعلقة ببطاقات الائتمان أو المعلومات المصرفية.
              </p>
            </div>
            
            <div className="faq-item">
              <h3>هل يمكنني التبرع شهريًا؟</h3>
              <p>
                نعم، يمكنك اختيار التبرع الشهري المتكرر من خلال Payeer. هذا يساعدنا على 
                التخطيط بشكل أفضل للمستقبل.
              </p>
            </div>
            
            <div className="faq-item">
              <h3>هل تبرعي معفى من الضرائب؟</h3>
              <p>
                للأسف، نحن لسنا منظمة خيرية معفاة من الضرائب حاليًا، لذا لا يمكن اعتبار 
                تبرعك معفيًا من الضرائب.
              </p>
            </div>
            
            <div className="faq-item">
              <h3>كيف يتم استخدام التبرعات؟</h3>
              <p>
                تستخدم التبرعات في تغطية تكاليف الاستضافة والخوادم، وتمويل التطوير المستمر، 
                وإصلاح الأخطاء وتحسين البرامج الحالية.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donations;