import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-950/95 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">Logo</div>
            <div className="hidden md:flex gap-8">
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">المميزات</a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">حول</a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">التسعير</a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">تواصل</a>
            </div>
            <button className="md:hidden p-2">☰</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 dark:bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              مرحباً بك في <span className="text-blue-600 dark:text-blue-400">مشروعك</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              بناء تطبيقات ويب عصرية وسريعة باستخدام Next.js و React
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-semibold transition shadow-lg hover:shadow-xl">
                ابدأ الآن
              </button>
              <button className="px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg font-semibold transition">
                تعرف أكثر
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">المميزات الرئيسية</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "سريع جداً",
                description: "أداء عالي وتحميل فوري للصفحات"
              },
              {
                icon: "🎨",
                title: "تصميم حديث",
                description: "واجهة مستخدم جميلة وسهلة الاستخدام"
              },
              {
                icon: "📱",
                title: "متجاوب",
                description: "يعمل بشكل مثالي على جميع الأجهزة"
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg dark:hover:shadow-xl transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">هل أنت مستعد للبدء؟</h2>
          <p className="text-xl text-blue-100 mb-8">انضم إلينا اليوم وابدأ رحلتك نحو النجاح</p>
          <button className="px-10 py-4 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-lg font-bold hover:shadow-lg transition">
            اتصل بنا الآن
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-gray-300 dark:text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">عن الشركة</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">من نحن</a></li>
                <li><a href="#" className="hover:text-white transition">الرؤية</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">الخدمات</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">التطوير</a></li>
                <li><a href="#" className="hover:text-white transition">التصميم</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">المحتوى</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">المدونة</a></li>
                <li><a href="#" className="hover:text-white transition">الموارد</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">التواصل</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">البريد الإلكتروني</a></li>
                <li><a href="#" className="hover:text-white transition">الهاتف</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2025 جميع الحقوق محفوظة. تم التطوير بواسطة فريق التطوير.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
