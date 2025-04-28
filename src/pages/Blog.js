import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const articles = [
    {
      id: 1,
      title: "كيفية تحسين أداء موقعك الإلكتروني",
      excerpt: "نصائح وإرشادات لتحسين سرعة تحميل موقعك وتجربة المستخدم الشاملة.",
      image: "https://via.placeholder.com/800x600",
      category: "web-development",
      date: "22 أبريل 2025",
      author: "أحمد محمد",
      tags: ["تحسين الأداء", "تجربة المستخدم", "سرعة الموقع"]
    },
    {
      id: 2,
      title: "مقدمة في الذكاء الاصطناعي للمبتدئين",
      excerpt: "شرح مبسط لمفاهيم الذكاء الاصطناعي وتطبيقاته في حياتنا اليومية.",
      image: "https://via.placeholder.com/800x600",
      category: "artificial-intelligence",
      date: "15 أبريل 2025",
      author: "سارة أحمد",
      tags: ["ذكاء اصطناعي", "تعلم الآلة", "تقنية"]
    },
    {
      id: 3,
      title: "أفضل أدوات تطوير الويب في 2025",
      excerpt: "استعراض لأحدث وأفضل أدوات تطوير الويب التي يجب على كل مطور معرفتها.",
      image: "https://via.placeholder.com/800x600",
      category: "web-development",
      date: "8 أبريل 2025",
      author: "محمد علي",
      tags: ["أدوات تطوير", "ويب", "برمجة"]
    },
    {
      id: 4,
      title: "كيفية حماية بياناتك على الإنترنت",
      excerpt: "نصائح أساسية لحماية معلوماتك الشخصية والحفاظ على الخصوصية عبر الإنترنت.",
      image: "https://via.placeholder.com/800x600",
      category: "cybersecurity",
      date: "1 أبريل 2025",
      author: "نورا حسن",
      tags: ["أمان", "خصوصية", "حماية البيانات"]
    },
    {
      id: 5,
      title: "تعلم React في 2025: دليل شامل",
      excerpt: "كل ما تحتاج معرفته لتعلم React وبناء تطبيقات الويب الحديثة.",
      image: "https://via.placeholder.com/800x600",
      category: "web-development",
      date: "25 مارس 2025",
      author: "أحمد محمد",
      tags: ["React", "JavaScript", "تطوير واجهات"]
    },
    {
      id: 6,
      title: "مستقبل العملات الرقمية والبلوكشين",
      excerpt: "نظرة على مستقبل العملات الرقمية وتكنولوجيا البلوكشين وتأثيرها على الاقتصاد.",
      image: "https://via.placeholder.com/800x600",
      category: "blockchain",
      date: "18 مارس 2025",
      author: "محمود راشد",
      tags: ["بلوكشين", "عملات رقمية", "اقتصاد"]
    }
  ];

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>المدونة</h1>
          <p>آخر الأخبار والمقالات في عالم التكنولوجيا والبرمجة</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-categories">
            <button 
              className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              الكل
            </button>
            <button 
              className={`category-btn ${activeCategory === 'web-development' ? 'active' : ''}`}
              onClick={() => setActiveCategory('web-development')}
            >
              تطوير الويب
            </button>
            <button 
              className={`category-btn ${activeCategory === 'artificial-intelligence' ? 'active' : ''}`}
              onClick={() => setActiveCategory('artificial-intelligence')}
            >
              الذكاء الاصطناعي
            </button>
            <button 
              className={`category-btn ${activeCategory === 'cybersecurity' ? 'active' : ''}`}
              onClick={() => setActiveCategory('cybersecurity')}
            >
              أمن المعلومات
            </button>
            <button 
              className={`category-btn ${activeCategory === 'blockchain' ? 'active' : ''}`}
              onClick={() => setActiveCategory('blockchain')}
            >
              بلوكشين
            </button>
          </div>

          <div className="blog-articles">
            {filteredArticles.map(article => (
              <div className="blog-article" key={article.id}>
                <div className="article-image">
                  <img src={article.image} alt={article.title} />
                  <div className="article-category">{getCategoryName(article.category)}</div>
                </div>
                <div className="article-content">
                  <h2 className="article-title">{article.title}</h2>
                  <div className="article-meta">
                    <span className="article-date"><i className="far fa-calendar"></i> {article.date}</span>
                    <span className="article-author"><i className="far fa-user"></i> {article.author}</span>
                  </div>
                  <p className="article-excerpt">{article.excerpt}</p>
                  <div className="article-tags">
                    {article.tags.map((tag, index) => (
                      <span className="article-tag" key={index}>#{tag}</span>
                    ))}
                  </div>
                  <Link to={`/blog/${article.id}`} className="btn btn-primary">قراءة المزيد</Link>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button className="pagination-btn active">1</button>
            <button className="pagination-btn">2</button>
            <button className="pagination-btn">3</button>
            <button className="pagination-btn next">التالي <i className="fas fa-chevron-right"></i></button>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>اشترك في النشرة البريدية</h2>
            <p>احصل على آخر المقالات والأخبار مباشرة إلى بريدك الإلكتروني</p>
          </div>

          <div className="subscribe-form">
            <form>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="البريد الإلكتروني" required />
                <button type="submit" className="btn btn-primary">اشتراك</button>
              </div>
            </form>
            <p className="privacy-note">
              لن نشارك بريدك الإلكتروني مع أي جهة خارجية ويمكنك إلغاء الاشتراك في أي وقت.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

// وظيفة مساعدة للحصول على اسم التصنيف بالعربية
const getCategoryName = (category) => {
  switch(category) {
    case 'web-development':
      return 'تطوير الويب';
    case 'artificial-intelligence':
      return 'الذكاء الاصطناعي';
    case 'cybersecurity':
      return 'أمن المعلومات';
    case 'blockchain':
      return 'بلوكشين';
    default:
      return 'عام';
  }
};

export default Blog;