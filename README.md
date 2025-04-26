# موقع أبو الكود - المشروع الثاني

هذا موقع بسيط مستضاف على GitHub Pages باستخدام HTML و CSS و JavaScript الأصلي (Vanilla JS).

## المميزات

- تصميم متجاوب يعمل على جميع الأجهزة
- عداد زوار بسيط باستخدام Local Storage
- تصميم بسيط وأنيق

## كيفية التشغيل محليًا

1. قم بنسخ المستودع (Clone):
```bash
git clone https://github.com/aboelcode/second.git
cd second
```

2. افتح ملف `public/index.html` في المتصفح مباشرة

أو يمكنك استخدام أي خادم ويب بسيط مثل:

```bash
# باستخدام Python 3
python -m http.server

# أو باستخدام VS Code و Live Server Extension
# افتح المجلد في VS Code واضغط على Go Live
```

## النشر على GitHub Pages

1. قم بإنشاء فرع `gh-pages` (إذا لم يكن موجودًا):
```bash
git checkout -b gh-pages
```

2. نقل ملفات المجلد `public` إلى الجذر:
```bash
# نسخ محتويات مجلد public/ إلى الجذر
cp -r public/* .
```

3. رفع التغييرات:
```bash
git add .
git commit -m "إعداد GitHub Pages"
git push origin gh-pages
```

4. في إعدادات المستودع على GitHub، تأكد من تفعيل GitHub Pages واختيار الفرع `gh-pages` كمصدر.

## التقنيات المستخدمة

- HTML5
- CSS3
- Vanilla JavaScript
- Local Storage للتخزين المحلي
- GitHub Pages للاستضافة

## التواصل

- GitHub: [@aboelcode](https://github.com/aboelcode)
- Facebook: [@aboelcode](https://facebook.com/aboelcode)
- البريد الإلكتروني: aboelcode@gmail.com