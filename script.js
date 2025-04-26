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

// وظيفة لجلب وتحديث عدد الزوار من localStorage
function updateVisitorCount() {
  try {
    state.isLoading = true;
    
    // جلب العدد الحالي أو استخدام 0 إذا لم يكن موجودًا
    let count = parseInt(localStorage.getItem('visitorCount') || '0');
    
    // زيادة العداد
    count++;
    
    // حفظ القيمة الجديدة
    localStorage.setItem('visitorCount', count.toString());
    
    // تحديث الحالة
    state.visitorCount = count;
    state.error = null;
  } catch (error) {
    state.error = error.message;
    console.error('حدث خطأ أثناء تحديث البيانات:', error);
  } finally {
    state.isLoading = false;
  }
}

// وظيفة لجلب عدد الزوار بدون زيادة العداد
function getVisitorCount() {
  try {
    state.isLoading = true;
    
    // جلب العدد الحالي أو استخدام 0 إذا لم يكن موجودًا
    let count = parseInt(localStorage.getItem('visitorCount') || '0');
    
    // تحديث الحالة
    state.visitorCount = count;
    state.error = null;
  } catch (error) {
    state.error = error.message;
    console.error('حدث خطأ أثناء جلب البيانات:', error);
  } finally {
    state.isLoading = false;
  }
}

// إضافة مستمعي الأحداث
refreshBtn.addEventListener('click', updateVisitorCount);

// جلب البيانات عند تحميل الصفحة وزيادة العداد
document.addEventListener('DOMContentLoaded', updateVisitorCount);

// عرض البيانات الأولية
render();