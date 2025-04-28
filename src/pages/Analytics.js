import React, { useState } from 'react';

const Analytics = () => {
  const [url, setUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('performance');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!url) {
      alert('الرجاء إدخال رابط موقع للتحليل');
      return;
    }
    
    // هنا يمكن إضافة منطق لإرسال الرابط إلى الخادم للتحليل
    console.log('تحليل الموقع:', url);
    
    // إظهار نتائج التحليل
    setSubmitted(true);
  };
  
  const performanceMetrics = {
    score: 85,
    loadTime: '1.8 ثانية',
    firstContentfulPaint: '0.9 ثانية',
    timeToInteractive: '2.3 ثانية',
    speedIndex: '1.5 ثانية',
    totalBlockingTime: '120 مللي ثانية',
    largestContentfulPaint: '1.7 ثانية',
    cumulativeLayoutShift: '0.02'
  };
  
  const seoMetrics = {
    score: 92,
    metaTags: 'جيد',
    headings: 'متوسط',
    contentQuality: 'جيد',
    mobileOptimization: 'ممتاز',
    canonicalTags: 'جيد',
    urlStructure: 'جيد',
    robotsTxt: 'متوسط',
    sitemapXml: 'ممتاز'
  };
  
  const accessibilityMetrics = {
    score: 78,
    contrastRatio: 'متوسط',
    keyboardNavigation: 'جيد',
    imageAlts: 'متوسط',
    ariaAttributes: 'ضعيف',
    semanticHTML: 'جيد',
    focusIndicators: 'متوسط',
    textResize: 'ممتاز',
    languageDeclaration: 'جيد'
  };
  
  const bestPracticesMetrics = {
    score: 89,
    httpsUsage: 'ممتاز',
    errorFree: 'جيد',
    deprecatedApis: 'ممتاز',
    responsiveDesign: 'ممتاز',
    fontDisplay: 'متوسط',
    doctype: 'ممتاز',
    passwordFields: 'ممتاز',
    validHtml: 'جيد'
  };
  
  const getScoreClass = (score) => {
    if (score >= 90) return 'excellent';
    if (score >= 80) return 'good';
    if (score >= 70) return 'average';
    return 'poor';
  };
  
  const getRatingClass = (rating) => {
    switch(rating) {
      case 'ممتاز':
        return 'excellent';
      case 'جيد':
        return 'good';
      case 'متوسط':
        return 'average';
      case 'ضعيف':
        return 'poor';
      default:
        return '';
    }
  };
  
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>تحليلات الموقع</h1>
          <p>تحليل شامل لأداء موقعك وتحسين تجربة المستخدم</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="analytics-form-container">
            <h2>تحليل موقعك الإلكتروني</h2>
            <p>
              أدخل رابط موقعك للحصول على تحليل شامل لأدائه وتوصيات لتحسينه.
              سنقوم بفحص الأداء، وتحسين محركات البحث، وإمكانية الوصول، وأفضل الممارسات.
            </p>
            
            <form onSubmit={handleSubmit} className="analytics-form">
              <div className="form-group">
                <input 
                  type="url" 
                  className="form-control" 
                  placeholder="https://example.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-primary">
                  تحليل الموقع
                </button>
              </div>
            </form>
          </div>
          
          {submitted && (
            <div className="analytics-results">
              <div className="analytics-summary">
                <h3>نتائج تحليل الموقع: {url}</h3>
                <p>
                  نتائج التحليل أدناه تعطيك نظرة شاملة على أداء موقعك والمجالات
                  التي تحتاج إلى تحسين. استخدم هذه المعلومات لتحسين تجربة المستخدم
                  وزيادة ترتيب موقعك في محركات البحث.
                </p>
              </div>
              
              <div className="analytics-tabs">
                <button 
                  className={`tab-btn ${activeTab === 'performance' ? 'active' : ''}`}
                  onClick={() => setActiveTab('performance')}
                >
                  الأداء
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'seo' ? 'active' : ''}`}
                  onClick={() => setActiveTab('seo')}
                >
                  تحسين محركات البحث
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'accessibility' ? 'active' : ''}`}
                  onClick={() => setActiveTab('accessibility')}
                >
                  إمكانية الوصول
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'best-practices' ? 'active' : ''}`}
                  onClick={() => setActiveTab('best-practices')}
                >
                  أفضل الممارسات
                </button>
              </div>
              
              <div className="analytics-content">
                {activeTab === 'performance' && (
                  <div className="tab-content">
                    <div className="score-container">
                      <div className={`score ${getScoreClass(performanceMetrics.score)}`}>
                        <span className="score-value">{performanceMetrics.score}</span>
                      </div>
                      <div className="score-label">درجة الأداء</div>
                    </div>
                    
                    <div className="metrics-table">
                      <h4>مقاييس الأداء</h4>
                      <table>
                        <tbody>
                          <tr>
                            <td>وقت التحميل</td>
                            <td>{performanceMetrics.loadTime}</td>
                          </tr>
                          <tr>
                            <td>الرسم المحتوى الأول</td>
                            <td>{performanceMetrics.firstContentfulPaint}</td>
                          </tr>
                          <tr>
                            <td>وقت التفاعل</td>
                            <td>{performanceMetrics.timeToInteractive}</td>
                          </tr>
                          <tr>
                            <td>مؤشر السرعة</td>
                            <td>{performanceMetrics.speedIndex}</td>
                          </tr>
                          <tr>
                            <td>وقت الحظر الإجمالي</td>
                            <td>{performanceMetrics.totalBlockingTime}</td>
                          </tr>
                          <tr>
                            <td>أكبر رسم محتوى</td>
                            <td>{performanceMetrics.largestContentfulPaint}</td>
                          </tr>
                          <tr>
                            <td>تغيير التخطيط التراكمي</td>
                            <td>{performanceMetrics.cumulativeLayoutShift}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="recommendations">
                      <h4>توصيات لتحسين الأداء</h4>
                      <ul>
                        <li>ضغط الصور وتحسين حجمها</li>
                        <li>تقليل وقت استجابة الخادم</li>
                        <li>استخدام التخزين المؤقت للمتصفح</li>
                        <li>إزالة موارد JavaScript غير المستخدمة</li>
                        <li>تأجيل تحميل الصور غير المرئية</li>
                      </ul>
                    </div>
                  </div>
                )}
                
                {activeTab === 'seo' && (
                  <div className="tab-content">
                    <div className="score-container">
                      <div className={`score ${getScoreClass(seoMetrics.score)}`}>
                        <span className="score-value">{seoMetrics.score}</span>
                      </div>
                      <div className="score-label">درجة تحسين محركات البحث</div>
                    </div>
                    
                    <div className="metrics-table">
                      <h4>مقاييس تحسين محركات البحث</h4>
                      <table>
                        <tbody>
                          {Object.entries(seoMetrics).filter(([key]) => key !== 'score').map(([key, value]) => (
                            <tr key={key}>
                              <td>{getSEOMetricName(key)}</td>
                              <td className={`rating ${getRatingClass(value)}`}>{value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="recommendations">
                      <h4>توصيات لتحسين محركات البحث</h4>
                      <ul>
                        <li>تحسين العناوين الوصفية ووصف ميتا للصفحات</li>
                        <li>استخدام هيكل عناوين منطقي (H1, H2, H3)</li>
                        <li>تحسين سرعة تحميل الموقع</li>
                        <li>إضافة نص بديل للصور</li>
                        <li>إنشاء روابط داخلية ذات صلة</li>
                      </ul>
                    </div>
                  </div>
                )}
                
                {activeTab === 'accessibility' && (
                  <div className="tab-content">
                    <div className="score-container">
                      <div className={`score ${getScoreClass(accessibilityMetrics.score)}`}>
                        <span className="score-value">{accessibilityMetrics.score}</span>
                      </div>
                      <div className="score-label">درجة إمكانية الوصول</div>
                    </div>
                    
                    <div className="metrics-table">
                      <h4>مقاييس إمكانية الوصول</h4>
                      <table>
                        <tbody>
                          {Object.entries(accessibilityMetrics).filter(([key]) => key !== 'score').map(([key, value]) => (
                            <tr key={key}>
                              <td>{getAccessibilityMetricName(key)}</td>
                              <td className={`rating ${getRatingClass(value)}`}>{value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="recommendations">
                      <h4>توصيات لتحسين إمكانية الوصول</h4>
                      <ul>
                        <li>تحسين نسبة التباين بين النص والخلفية</li>
                        <li>إضافة نص بديل وصفي للصور</li>
                        <li>استخدام سمات ARIA بشكل صحيح</li>
                        <li>التأكد من إمكانية الوصول باستخدام لوحة المفاتيح</li>
                        <li>استخدام HTML دلالي مناسب</li>
                      </ul>
                    </div>
                  </div>
                )}
                
                {activeTab === 'best-practices' && (
                  <div className="tab-content">
                    <div className="score-container">
                      <div className={`score ${getScoreClass(bestPracticesMetrics.score)}`}>
                        <span className="score-value">{bestPracticesMetrics.score}</span>
                      </div>
                      <div className="score-label">درجة أفضل الممارسات</div>
                    </div>
                    
                    <div className="metrics-table">
                      <h4>مقاييس أفضل الممارسات</h4>
                      <table>
                        <tbody>
                          {Object.entries(bestPracticesMetrics).filter(([key]) => key !== 'score').map(([key, value]) => (
                            <tr key={key}>
                              <td>{getBestPracticesMetricName(key)}</td>
                              <td className={`rating ${getRatingClass(value)}`}>{value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="recommendations">
                      <h4>توصيات لتحسين أفضل الممارسات</h4>
                      <ul>
                        <li>استخدم HTTPS لجميع صفحات موقعك</li>
                        <li>أصلح أخطاء وحدة التحكم في JavaScript</li>
                        <li>تجنب استخدام واجهات برمجة تطبيقات مهملة</li>
                        <li>تأكد من استجابة الموقع لجميع أحجام الشاشات</li>
                        <li>استخدم HTML صالح ومتوافق مع المعايير</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>لماذا تحليل موقعك مهم؟</h2>
          </div>
          
          <div className="analytics-benefits">
            <div className="row">
              <div className="col-md-4">
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <i className="fas fa-tachometer-alt"></i>
                  </div>
                  <h3>تحسين الأداء</h3>
                  <p>
                    موقع سريع يعني تجربة مستخدم أفضل ومعدلات ارتداد أقل،
                    مما يؤدي إلى تحويلات أعلى.
                  </p>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <i className="fas fa-search"></i>
                  </div>
                  <h3>تحسين ترتيب محركات البحث</h3>
                  <p>
                    موقع محسن يحصل على ترتيب أفضل في نتائج البحث،
                    مما يجلب المزيد من الزوار العضويين.
                  </p>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <i className="fas fa-universal-access"></i>
                  </div>
                  <h3>تحسين إمكانية الوصول</h3>
                  <p>
                    موقع متاح للجميع يوسع قاعدة مستخدميك ويحسن
                    تجربة المستخدم للجميع.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// وظائف مساعدة للترجمة
const getSEOMetricName = (key) => {
  const names = {
    metaTags: 'الوسوم الوصفية',
    headings: 'العناوين',
    contentQuality: 'جودة المحتوى',
    mobileOptimization: 'تحسين الجوال',
    canonicalTags: 'العلامات القانونية',
    urlStructure: 'هيكل عنوان URL',
    robotsTxt: 'ملف robots.txt',
    sitemapXml: 'خريطة الموقع XML'
  };
  
  return names[key] || key;
};

const getAccessibilityMetricName = (key) => {
  const names = {
    contrastRatio: 'نسبة التباين',
    keyboardNavigation: 'التنقل بلوحة المفاتيح',
    imageAlts: 'النص البديل للصور',
    ariaAttributes: 'سمات ARIA',
    semanticHTML: 'HTML دلالي',
    focusIndicators: 'مؤشرات التركيز',
    textResize: 'إعادة تحجيم النص',
    languageDeclaration: 'إعلان اللغة'
  };
  
  return names[key] || key;
};

const getBestPracticesMetricName = (key) => {
  const names = {
    httpsUsage: 'استخدام HTTPS',
    errorFree: 'خالي من الأخطاء',
    deprecatedApis: 'واجهات برمجة مهملة',
    responsiveDesign: 'تصميم متجاوب',
    fontDisplay: 'عرض الخط',
    doctype: 'نوع المستند',
    passwordFields: 'حقول كلمة المرور',
    validHtml: 'HTML صالح'
  };
  
  return names[key] || key;
};

export default Analytics;