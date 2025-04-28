import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Downloads = () => {
  const [filter, setFilter] = useState('all');
  
  const apps = [
    {
      id: 1,
      title: 'عداد التسبيح',
      description: 'تطبيق بسيط لعد التسبيح مع إمكانية تخصيص الأذكار وحفظ الإحصائيات.',
      category: 'desktop',
      icon: 'fas fa-pray',
      downloadLink: '/counter/index.html',
      version: '1.2.0',
      size: '1.5 MB',
      platform: 'ويب، أندرويد، ويندوز',
      screenshots: ['https://via.placeholder.com/800x450']
    },
    {
      id: 2,
      title: 'محول الصور',
      description: 'أداة لتحويل صيغ الصور بسهولة مع خيارات تحرير متعددة وضبط الجودة.',
      category: 'utility',
      icon: 'fas fa-image',
      downloadLink: '#',
      version: '2.0.1',
      size: '3.2 MB',
      platform: 'ويندوز، ماك',
      screenshots: ['https://via.placeholder.com/800x450']
    },
    {
      id: 3,
      title: 'مدير المهام',
      description: 'تطبيق لإدارة المهام والمشاريع مع ميزات تعاونية وتنبيهات.',
      category: 'productivity',
      icon: 'fas fa-tasks',
      downloadLink: '#',
      version: '1.5.3',
      size: '2.8 MB',
      platform: 'ويب، أندرويد، iOS',
      screenshots: ['https://via.placeholder.com/800x450']
    },
    {
      id: 4,
      title: 'قارئ PDF',
      description: 'تطبيق لقراءة وتحرير ملفات PDF مع إمكانية إضافة تعليقات وعلامات.',
      category: 'utility',
      icon: 'fas fa-file-pdf',
      downloadLink: '#',
      version: '3.1.0',
      size: '5.4 MB',
      platform: 'ويندوز، ماك، لينكس',
      screenshots: ['https://via.placeholder.com/800x450']
    },
    {
      id: 5,
      title: 'منظم الملفات',
      description: 'أداة لتنظيم الملفات تلقائيًا حسب النوع والتاريخ وحجم الملف.',
      category: 'utility',
      icon: 'fas fa-folder',
      downloadLink: '#',
      version: '1.0.2',
      size: '1.8 MB',
      platform: 'ويندوز',
      screenshots: ['https://via.placeholder.com/800x450']
    },
    {
      id: 6,
      title: 'محرر النصوص',
      description: 'محرر نصوص متقدم مع دعم العديد من لغات البرمجة وإكمال تلقائي للكود.',
      category: 'development',
      icon: 'fas fa-code',
      downloadLink: '#',
      version: '2.3.1',
      size: '4.2 MB',
      platform: 'ويندوز، ماك، لينكس',
      screenshots: ['https://via.placeholder.com/800x450']
    }
  ];

  const filteredApps = filter === 'all' ? apps : apps.filter(app => app.category === filter);

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>التحميلات</h1>
          <p>استكشف مجموعة من التطبيقات والأدوات المفيدة</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="download-filters">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
              onClick={() => setFilter('all')}
            >
              الكل
            </button>
            <button 
              className={`filter-btn ${filter === 'desktop' ? 'active' : ''}`} 
              onClick={() => setFilter('desktop')}
            >
              تطبيقات سطح المكتب
            </button>
            <button 
              className={`filter-btn ${filter === 'utility' ? 'active' : ''}`} 
              onClick={() => setFilter('utility')}
            >
              أدوات مساعدة
            </button>
            <button 
              className={`filter-btn ${filter === 'productivity' ? 'active' : ''}`} 
              onClick={() => setFilter('productivity')}
            >
              إنتاجية
            </button>
            <button 
              className={`filter-btn ${filter === 'development' ? 'active' : ''}`} 
              onClick={() => setFilter('development')}
            >
              تطوير
            </button>
          </div>

          <div className="row">
            {filteredApps.map(app => (
              <div className="col-md-4" key={app.id}>
                <div className="app-card card">
                  <div className="card-body">
                    <div className="app-icon">
                      <i className={app.icon}></i>
                    </div>
                    <h3 className="card-title">{app.title}</h3>
                    <p className="card-text">{app.description}</p>
                    <div className="app-details">
                      <div className="app-detail">
                        <i className="fas fa-code-branch"></i>
                        <span>الإصدار: {app.version}</span>
                      </div>
                      <div className="app-detail">
                        <i className="fas fa-weight"></i>
                        <span>الحجم: {app.size}</span>
                      </div>
                      <div className="app-detail">
                        <i className="fas fa-desktop"></i>
                        <span>المنصة: {app.platform}</span>
                      </div>
                    </div>
                    <a href={app.downloadLink} className="btn btn-primary download-btn">
                      <i className="fas fa-download"></i> تحميل
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>كيفية التثبيت</h2>
            <p>إرشادات بسيطة لتثبيت واستخدام تطبيقاتنا</p>
          </div>

          <div className="install-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>تحميل التطبيق</h3>
              <p>انقر على زر "تحميل" للتطبيق الذي تريده وانتظر حتى يكتمل التحميل.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>فك الضغط</h3>
              <p>إذا كان الملف مضغوطًا، قم بفك الضغط باستخدام أي برنامج ضغط مثل WinRAR أو 7-Zip.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>التثبيت</h3>
              <p>افتح ملف التثبيت واتبع الخطوات المعروضة على الشاشة.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>الاستخدام</h3>
              <p>ابدأ باستخدام التطبيق واستكشاف ميزاته. راجع دليل المستخدم للمساعدة إذا لزم الأمر.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>دعم المطورين</h2>
            <p>ساعدنا في الاستمرار بتطوير برمجيات مفيدة ومجانية</p>
          </div>

          <div className="donate-section text-center">
            <p>
              إذا كنت تستفيد من برامجنا وترغب في دعم تطويرها، يرجى التفكير في التبرع. 
              تساعدنا تبرعاتك في تغطية تكاليف الاستضافة والتطوير والحفاظ على 
              التطبيقات مجانية للجميع.
            </p>
            <Link to="/donations" className="btn btn-primary mt-3">
              <i className="fas fa-heart"></i> تبرع الآن
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Downloads;