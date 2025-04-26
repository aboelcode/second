// عناصر DOM
const visitorCounter = document.getElementById('visitorCounter');
const refreshBtn = document.getElementById('refreshBtn');

// مدير الحالة البسيط (State Manager) باستخدام Proxy
const state = new Proxy(
  {
    visitorCount: 0,
    isLoading: false,
    error: null
  },
  {
    set(target, key, value) {
      target[key] = value;
      
      // تحديث واجهة المستخدم عند تغيير الحالة
      render();
      return true;
    }
  }
);

// وظيفة لعرض البيانات في واجهة المستخدم
function render() {
  // تحديث عداد الزوار
  visitorCounter.textContent = state.isLoading ? 'جاري التحميل...' : state.visitorCount;
  
  // تعطيل زر التحديث أثناء التحميل
  refreshBtn.disabled = state.isLoading;
  
  // عرض رسالة الخطأ إن وجدت
  if (state.error) {
    console.error('حدث خطأ:', state.error);
    // يمكن إضافة عنصر لعرض الخطأ في الواجهة
  }
}

// وظيفة لجلب عدد الزوار من السيرفر
async function fetchVisitorCount() {
  try {
    state.isLoading = true;
    
    const response = await fetch('/api/visitors');
    
    if (!response.ok) {
      throw new Error(`خطأ في الاستجابة: ${response.status}`);
    }
    
    const data = await response.json();
    state.visitorCount = data.count;
    state.error = null;
  } catch (error) {
    state.error = error.message;
    console.error('حدث خطأ أثناء جلب البيانات:', error);
  } finally {
    state.isLoading = false;
  }
}

// إضافة مستمعي الأحداث
refreshBtn.addEventListener('click', fetchVisitorCount);

// جلب البيانات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', fetchVisitorCount);

// تحديث كل دقيقة
setInterval(fetchVisitorCount, 60000);

// عرض البيانات الأولية
render();