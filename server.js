const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 4000;

// نضيف مجلد data للتخزين
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

// ملف للبيانات
const visitorsFile = path.join(dataDir, 'visitors.json');
if (!fs.existsSync(visitorsFile)) {
  fs.writeFileSync(visitorsFile, JSON.stringify({ count: 0 }), 'utf8');
}

// Middleware
app.use(express.static('public'));
app.use(express.json());

// الصفحة الرئيسية
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API لعدد الزوار
app.get('/api/visitors', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(visitorsFile, 'utf8'));
    data.count++;
    fs.writeFileSync(visitorsFile, JSON.stringify(data), 'utf8');
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'حدث خطأ في قراءة البيانات' });
  }
});

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`Local:   http://localhost:${PORT}`);
  console.log(`Online:  https://aboelcode-second.onrender.com`);
});