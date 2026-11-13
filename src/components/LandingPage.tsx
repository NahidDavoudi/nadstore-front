import React from 'react';
import {
  ASSETS,
  DemoOrder,
  EXTERNAL_LINKS,
  formatToman,
} from '../data/demoData';

interface LandingPageProps {
  orders: DemoOrder[];
  onOpenDashboard: (orderId?: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  orders,
  onOpenDashboard,
}) => {
  const heroOrders = orders.slice(0, 3);

  return (
    <div className="bg-[#FAF6EC] font-sans text-[#22191b] antialiased selection:bg-[#EDE3C8] selection:text-[#5C1F2E]">
      {/* FLOATING GLASS HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-14 pt-3">
        <div className="h-16 max-w-6xl mx-auto px-6 rounded-full bg-white/75 backdrop-blur-md border border-[#E5DBC7] shadow-[0_8px_30px_-4px_rgba(92,31,46,0.06)] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 shrink-0">
            <img
              alt="NadStore Logo Mark"
              referrerPolicy="no-referrer"
              className="h-8 w-auto object-contain"
              src={ASSETS.logo}
            />
            <div className="flex flex-col text-right leading-none">
              <span className="text-base font-bold text-[#22191b] whitespace-nowrap">
                ناداستور
              </span>
              <span className="text-[11px] text-[#534345] whitespace-nowrap">
                NadStore Boutique
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              className="text-sm font-medium text-[#534345] hover:text-[#5C1F2E] transition-colors whitespace-nowrap shrink-0"
              href="#why-nadstore"
            >
              چرا ناداستور؟
            </a>
            <a
              className="text-sm font-medium text-[#534345] hover:text-[#5C1F2E] transition-colors whitespace-nowrap shrink-0"
              href="#how-it-works"
            >
              مراحل راه‌اندازی
            </a>
            <a
              className="text-sm font-medium text-[#534345] hover:text-[#5C1F2E] transition-colors whitespace-nowrap shrink-0"
              href="#features"
            >
              امکانات
            </a>
            <a
              className="text-sm font-medium text-[#534345] hover:text-[#5C1F2E] transition-colors whitespace-nowrap shrink-0"
              href="#faq"
            >
              سوالات متداول
            </a>
            <button
              type="button"
              onClick={() => onOpenDashboard()}
              className="text-sm font-bold text-[#5C1F2E] hover:text-[#400919] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              پنل فروشنده (دمو)
            </button>
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <a
              className="inline-flex items-center justify-center h-10 px-5 rounded-full bg-[#5C1F2E] text-white text-sm font-medium shadow-[0_6px_20px_rgba(92,31,46,0.22)] hover:bg-[#400919] transition-all whitespace-nowrap shrink-0"
              href={EXTERNAL_LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              شروع گفتگو
            </a>
          </div>
        </div>
      </header>

      <main className="w-full pt-16 bg-[#FAF6EC]">
        {/* HERO SECTION (Background #FAF6EC with soft ambient circle) */}
        <section className="relative bg-[#FAF6EC] pt-14 pb-24 lg:pt-20 lg:pb-28 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Right Column: Narrative & CTA */}
              <div className="lg:col-span-6 flex flex-col items-start text-right z-10">
                {/* Status Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE3C8] text-[#5C4B33] text-xs font-semibold mb-6 border border-[#DECFA8]">
                  <span className="w-2 h-2 rounded-full bg-[#8C6D3B]"></span>
                  <span>ویژه آنلاین‌شاپ‌های اینستاگرامی</span>
                </div>

                {/* Headline */}
                <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] text-[#22191B] leading-[1.3] font-bold tracking-tight mb-6">
                  سفارش‌های پیجت دیگه توی دایرکت گم نمی‌شن
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-[#534345] leading-relaxed mb-8 max-w-xl">
                  فروشگاه آنلاین اختصاصی و آرام برای کسب‌وکارهای مستقل و بوتیک‌ها؛ بدون پیچیدگی‌های فنی، بدون دردسر هماهنگی فیش بانکی.
                </p>

                {/* CTA Row */}
                <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                  <a
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#5C1F2E] text-white font-medium text-sm shadow-[0_10px_26px_rgba(92,31,46,0.25)] hover:bg-[#400919] transition-all duration-200 whitespace-nowrap shrink-0"
                    href={EXTERNAL_LINKS.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    پیام بده، رایگان بررسی می‌کنیم
                  </a>
                  <button
                    type="button"
                    onClick={() => onOpenDashboard()}
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-[#22191b] font-medium text-sm hover:bg-[#EDE3C8]/60 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>تجربه پنل مدیریت سفارش‌ها</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                  </button>
                </div>

                {/* Trust Note */}
                <div className="flex flex-wrap items-center gap-4 mt-8 text-[#534345] text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[#8C6D3B] text-[18px]">
                      verified
                    </span>
                    <span>بدون نیاز به دانش فنی</span>
                  </div>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D8C1C3]"></span>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[#8C6D3B] text-[18px]">
                      schedule
                    </span>
                    <span>راه‌اندازی ظرف ۲ تا ۴ روز کاری</span>
                  </div>
                </div>
              </div>

              {/* Left Column: Hero Mockup with Claymorphism Illustration overlapping */}
              <div className="lg:col-span-6 relative flex items-center justify-center">
                {/* Soft ambient blurred circle #EDE3C8 behind mockup */}
                <div className="w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] rounded-full bg-[#EDE3C8] blur-3xl opacity-75 absolute -z-0 pointer-events-none"></div>

                {/* Clay Character Illustration Floating Next to Card */}
                <div className="absolute -left-4 sm:-left-10 -bottom-8 sm:-bottom-12 w-44 sm:w-56 z-20 pointer-events-none drop-shadow-[0_20px_25px_rgba(31,42,68,0.18)]">
                  <img
                    alt="تصویر شخصیت سه‌بعدی ناداستور"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-contain"
                    src={ASSETS.heroClayCharacter}
                  />
                </div>

                {/* Liquid Glass Card Container */}
                <div className="relative z-10 w-full max-w-md sm:mr-6 bg-white/75 backdrop-blur-xl rounded-3xl p-5 sm:p-7 border border-[#DDD2B8] shadow-[0_24px_50px_-12px_rgba(92,31,46,0.12)]">
                  {/* Glass Card Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#ECE0C7]/80">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-2xl bg-[#EDE3C8] flex items-center justify-center text-[#5C1F2E]">
                        <span className="material-symbols-outlined text-[20px]">
                          storefront
                        </span>
                      </div>
                      <div className="flex flex-col text-right">
                        <span className="text-sm font-bold text-[#22191b]">
                          میز کار بوتیک ترنج
                        </span>
                        <span className="text-[11px] text-[#534345]">
                          سفارش‌های لحظه‌ای از لینک بیو
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => onOpenDashboard()}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white hover:bg-[#FAF6EC] text-[#8C6D3B] text-xs font-semibold shadow-xs border border-[#DECFA8] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span>همگام با شاپرک</span>
                    </button>
                  </div>

                  {/* Order Mockup Rows (Interactive: clicking opens that order in dashboard) */}
                  <div className="space-y-2.5">
                    {heroOrders.map((order) => (
                      <div
                        key={order.id}
                        onClick={() => onOpenDashboard(order.id)}
                        title="کلیک برای مدیریت این سفارش در پنل فروشنده"
                        className="flex items-center justify-between p-3 rounded-2xl bg-white/90 hover:bg-white border border-[#F0E6D2] hover:border-[#DECFA8] shadow-xs transition-all cursor-pointer"
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center text-[#5C1F2E] ${
                              order.status === 'shipped'
                                ? 'bg-[#F5E8EB]'
                                : 'bg-[#EDE3C8]/60'
                            }`}
                          >
                            <span className="material-symbols-outlined text-[19px]">
                              {order.status === 'paid'
                                ? 'check_circle'
                                : order.status === 'packed'
                                ? 'inventory_2'
                                : 'local_shipping'}
                            </span>
                          </div>
                          <div className="flex flex-col text-right">
                            <span className="text-xs font-bold text-[#22191b]">
                              {order.productTitle}
                            </span>
                            <span className="text-[10px] text-[#534345]">
                              شماره سفارش: {order.orderNumber} • {order.subtitleNote}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col items-end text-left tabular-nums">
                          <span className="text-xs font-bold text-[#22191b]">
                            {formatToman(order.amount)}{' '}
                            <span className="text-[9px] text-[#534345]">تومان</span>
                          </span>
                          {order.status === 'paid' && (
                            <span className="px-2 py-0.5 rounded-full bg-[#EBF5EA] text-[#2E6B34] text-[10px] font-semibold">
                              پرداخت موفق
                            </span>
                          )}
                          {order.status === 'packed' && (
                            <span className="px-2 py-0.5 rounded-full bg-[#EDE3C8] text-[#5C4B33] text-[10px] font-semibold">
                              بسته‌بندی شده
                            </span>
                          )}
                          {order.status === 'shipped' && (
                            <span className="px-2 py-0.5 rounded-full bg-[#E5ECF6] text-[#284873] text-[10px] font-semibold">
                              ارسال با پست
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Metric Pill & Interactive Trigger */}
                  <div
                    onClick={() => onOpenDashboard()}
                    className="mt-4 pt-3 flex items-center justify-between bg-[#EDE3C8]/70 hover:bg-[#EDE3C8] rounded-2xl p-3 border border-[#DECFA8] transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2 text-[#22191b]">
                      <span className="material-symbols-outlined text-[#5C1F2E] text-[18px]">
                        task_alt
                      </span>
                      <span className="text-xs font-bold">
                        ۲۴ سفارش امروز، بدون ارسال ۱ دایرکت
                      </span>
                    </div>
                    <span className="text-[11px] text-[#5C1F2E] font-bold flex items-center gap-1 whitespace-nowrap">
                      <span>ورود به پنل</span>
                      <span className="material-symbols-outlined text-[14px]">
                        open_in_new
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM SECTION: Full width #FFFFFF with cards #FAF6EC */}
        <section className="w-full bg-[#FFFFFF] py-24 lg:py-28" id="why-nadstore">
          <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-14">
            <div className="text-right max-w-2xl mb-14">
              <span className="text-xs font-bold text-[#8C6D3B] tracking-wide block mb-2">
                مسئله روزمره آنلاین‌شاپ‌ها
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#22191B] mb-3">
                چرا فروش توی دایرکت انرژی پیجت رو می‌سوزونه؟
              </h2>
              <p className="text-sm sm:text-base text-[#534345] leading-relaxed">
                اینستاگرام یک ویترین عالی برای دیده‌شدنه، اما حسابداری و بسته‌بندی تو چت‌های نامنظم دایرکت، فروشگاه رو خسته می‌کنه.
              </p>
            </div>

            {/* 3 Problem Cards on #FAF6EC with Clay visual cues */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {/* Card 1 */}
              <div className="p-8 rounded-3xl flex flex-col justify-between text-right bg-[#FAF6EC] border border-[#E5DAC4] shadow-[0_6px_24px_-4px_rgba(92,31,46,0.06)] hover:-translate-y-1 transition-all duration-200">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white border border-[#E1D2B5] shadow-xs flex items-center justify-center mb-6 overflow-hidden p-1.5">
                    <img
                      alt="فیش گم شده"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-xl"
                      src={ASSETS.problemClayIcons}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#22191B] mb-3">
                    گم شدن فیش‌ها و نشانی مشتری
                  </h3>
                  <p className="text-xs sm:text-sm text-[#534345] leading-relaxed">
                    اسکرین‌شات‌های نامفهوم، حساب‌کتاب کارت به کارت‌های ثبت نشده و گم شدن کد پستی بین ده‌ها پیام تبریک و استیکر در دایرکت.
                  </p>
                </div>
                <div className="mt-8 pt-4 flex items-center gap-2 text-xs rounded-xl px-3.5 py-2.5 bg-[#FAF0F2] border border-[#ECD3D7] text-[#733140]">
                  <span className="w-2 h-2 rounded-full bg-[#A84E60]"></span>
                  <span className="font-medium">ریسک فیش‌های جعلی و واریز ناموفق</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-8 rounded-3xl flex flex-col justify-between text-right bg-[#FAF6EC] border border-[#E5DAC4] shadow-[0_6px_24px_-4px_rgba(92,31,46,0.06)] hover:-translate-y-1 transition-all duration-200">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white border border-[#E1D2B5] shadow-xs flex items-center justify-center mb-6 overflow-hidden p-1.5">
                    <img
                      alt="زمان و پاسخ مکرر"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center rounded-xl"
                      src={ASSETS.problemClayIcons}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#22191B] mb-3">
                    ساعت‌ها پاسخ به «قیمت و موجودی»
                  </h3>
                  <p className="text-xs sm:text-sm text-[#534345] leading-relaxed">
                    پاسخ دادن مکرر به سوالات یکسان در تمام ساعات شبانه‌روز، در حالی که مشتری در انتظار پاسخ طولانی منصرف شده و سراغ رقیب می‌ره.
                  </p>
                </div>
                <div className="mt-8 pt-4 flex items-center gap-2 text-xs rounded-xl px-3.5 py-2.5 bg-[#FAF0F2] border border-[#ECD3D7] text-[#733140]">
                  <span className="w-2 h-2 rounded-full bg-[#A84E60]"></span>
                  <span className="font-medium">اتلاف زمان تولید محتوا برای پاسخ تکراری</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-8 rounded-3xl flex flex-col justify-between text-right bg-[#FAF6EC] border border-[#E5DAC4] shadow-[0_6px_24px_-4px_rgba(92,31,46,0.06)] hover:-translate-y-1 transition-all duration-200">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white border border-[#E1D2B5] shadow-xs flex items-center justify-center mb-6 overflow-hidden p-1.5">
                    <img
                      alt="کد رهگیری و پیامک"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-left rounded-xl"
                      src={ASSETS.problemClayIcons}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#22191B] mb-3">
                    نبود کد رهگیری و استرس مشتری
                  </h3>
                  <p className="text-xs sm:text-sm text-[#534345] leading-relaxed">
                    پیگیری‌های پیاپی «سفارشم کی می‌رسه؟» و جستجوی وقت‌گیر فیش پست داخل استوری و کانال‌های تلگرامی که تصویر برندت رو مخدوش می‌کنه.
                  </p>
                </div>
                <div className="mt-8 pt-4 flex items-center gap-2 text-xs rounded-xl px-3.5 py-2.5 bg-[#FAF0F2] border border-[#ECD3D7] text-[#733140]">
                  <span className="w-2 h-2 rounded-full bg-[#A84E60]"></span>
                  <span className="font-medium">عدم ارسال پیامک خودکار به خریدار</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION: Full-width band with solid background #EDE3C8 */}
        <section className="w-full bg-[#EDE3C8] py-24 lg:py-28" id="how-it-works">
          <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
              <div className="lg:col-span-8 text-right">
                <span className="text-xs font-bold text-[#5C1F2E] tracking-wide block mb-2">
                  فرآیند راه‌اندازی
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#22191B] mb-3">
                  سه گام ساده تا نظم کامل و آرامش در فروش
                </h2>
                <p className="text-sm sm:text-base text-[#534345]">
                  لازم نیست ساعت‌ها درگیر کنترل پنل‌های پیچیده باشی؛ ما همه‌چیز رو برات روبه‌راه می‌کنیم.
                </p>
              </div>

              {/* Clay Character Setup Illustration */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="w-48 sm:w-56 drop-shadow-[0_16px_20px_rgba(92,31,46,0.12)]">
                  <img
                    alt="راه‌اندازی آسان فروشگاه ناداستور"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-contain rounded-2xl"
                    src={ASSETS.setupClayCharacter}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {/* Step 1 */}
              <div className="p-8 rounded-3xl text-right flex flex-col bg-white border border-[#DDCFA9] shadow-[0_8px_24px_-6px_rgba(92,31,46,0.06)] hover:-translate-y-1 transition-all duration-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl font-black leading-none text-[#8C6D3B]">۰۱</div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#EDE3C8] text-[#5C4B33] border border-[#DECFA8]">
                    قدم اول
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#22191B] mb-3">
                  پیام بده و پیجت رو بفرست
                </h3>
                <p className="text-xs sm:text-sm text-[#534345] leading-relaxed mb-6">
                  آدرس پیج اینستاگرامت رو برامون دایرکت یا تلگرام می‌کنی. سبک محصولات، نیازها و تعداد تنوع کارهات رو دقیق و صمیمانه با هم بررسی می‌کنیم.
                </p>
                <div className="mt-auto pt-4 flex items-center gap-2 text-xs rounded-xl px-3.5 py-2.5 bg-[#FAF6EC] border border-[#E8DEC4] text-[#5C4B33]">
                  <span className="material-symbols-outlined text-[18px] text-[#8C6D3B]">
                    forum
                  </span>
                  <span className="font-medium">مشاوره کاملاً رایگان و اختصاصی</span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-8 rounded-3xl text-right flex flex-col bg-white border border-[#DDCFA9] shadow-[0_8px_24px_-6px_rgba(92,31,46,0.06)] hover:-translate-y-1 transition-all duration-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl font-black leading-none text-[#8A957B]">۰۲</div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E8EDE4] text-[#344327] border border-[#C8D6BF]">
                    آماده‌سازی
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#22191B] mb-3">
                  فروشگاهت رو تحویل می‌گیری
                </h3>
                <p className="text-xs sm:text-sm text-[#534345] leading-relaxed mb-6">
                  ما ظاهر سایت، دسته‌بندی‌ها، درگاه رسمی شاپرک و نحوه ارسال رو متناسب با رنگ و هویت پیجت آماده می‌کنیم و لینک اختصاصی رو در بیو قرار می‌دی.
                </p>
                <div className="mt-auto pt-4 flex items-center gap-2 text-xs rounded-xl px-3.5 py-2.5 bg-[#F4F7F2] border border-[#D9E4D4] text-[#384C2C]">
                  <span className="material-symbols-outlined text-[18px] text-[#5D724E]">
                    tune
                  </span>
                  <span className="font-medium">ست شدن با کارتخوان و درگاه بدون دردسر</span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-8 rounded-3xl text-right flex flex-col bg-white border border-[#DDCFA9] shadow-[0_8px_24px_-6px_rgba(92,31,46,0.06)] hover:-translate-y-1 transition-all duration-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl font-black leading-none text-[#B07A84]">۰۳</div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F8E8EB] text-[#5C1F2E] border border-[#E7CAD0]">
                    فروش خودکار
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#22191B] mb-3">
                  سفارش‌ها خودکار ثبت می‌شن
                </h3>
                <p className="text-xs sm:text-sm text-[#534345] leading-relaxed mb-6">
                  مشتری با یک لمس روی لینک، سایز و رنگ رو انتخاب می‌کنه، پرداخت می‌کنه و آدرس ثبت می‌شه. تو فقط فیش آماده رو برمی‌داری و بسته‌بندی می‌کنی.
                </p>
                <div className="mt-auto pt-4 flex items-center gap-2 text-xs rounded-xl px-3.5 py-2.5 bg-[#FFF1F3] border border-[#EED4D8] text-[#692433]">
                  <span className="material-symbols-outlined text-[18px] text-[#A84E60]">
                    done_all
                  </span>
                  <span className="font-medium">پیامک لحظه‌ای برای خریدار و مدیر پیج</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION: Full width #FAF6EC with crisp white (#FFFFFF) cards & thin border (#DDD2B8) */}
        <section className="w-full bg-[#FAF6EC] py-24 lg:py-28" id="features">
          <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-14">
            <div className="text-right max-w-2xl mb-14">
              <span className="text-xs font-bold text-[#8C6D3B] tracking-wide block mb-2">
                ساده، سریع و بدون تجملات اضافی
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#22191B] mb-3">
                فقط آنچه واقعاً به فروش پیجت کمک می‌کنه
              </h2>
              <p className="text-sm sm:text-base text-[#534345] leading-relaxed">
                بدون منوهای پیچیده وردپرس یا تنظیمات خسته‌کننده؛ یک بوتیک دیجیتال که مادر یا دستیارت هم ظرف ۵ دقیقه یاد می‌گیره باهاش کار کنه.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="p-7 rounded-3xl text-right flex flex-col bg-[#FFFFFF] border border-[#DDD2B8] shadow-[0_6px_20px_-4px_rgba(92,31,46,0.05)] hover:-translate-y-1 transition-all duration-200">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-[#EDE3C8] text-[#493F2E] border border-[#DBCBA6]">
                  <span className="material-symbols-outlined text-[24px]">
                    smartphone
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#22191B] mb-2">
                  خرید آسان برای گوشی موبایل
                </h3>
                <p className="text-xs sm:text-sm text-[#534345] leading-relaxed">
                  بیش از ۹۵٪ ورودی پیجت با موبایله. فرآیند خرید تنها در ۳ مرحله بدون نیاز به ثبت‌نام اجباری انجام می‌شه.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-7 rounded-3xl text-right flex flex-col bg-[#FFFFFF] border border-[#DDD2B8] shadow-[0_6px_20px_-4px_rgba(92,31,46,0.05)] hover:-translate-y-1 transition-all duration-200">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-[#F8E9EB] text-[#5C1F2E] border border-[#EAC8CE]">
                  <span className="material-symbols-outlined text-[24px]">
                    credit_card
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#22191B] mb-2">
                  درگاه شاپرک با پیامک آنی
                </h3>
                <p className="text-xs sm:text-sm text-[#534345] leading-relaxed">
                  اتصال امن و سریع به درگاه‌های پرداخت؛ وجه مستقیم به حساب خودت واریز می‌شه و مشتری رسید تایید دریافت می‌کنه.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-7 rounded-3xl text-right flex flex-col bg-[#FFFFFF] border border-[#DDD2B8] shadow-[0_6px_20px_-4px_rgba(92,31,46,0.05)] hover:-translate-y-1 transition-all duration-200">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-[#EAF0E6] text-[#37462C] border border-[#C8D8C0]">
                  <span className="material-symbols-outlined text-[24px]">
                    inventory
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#22191B] mb-2">
                  مدیریت موجودی در یک نگاه
                </h3>
                <p className="text-xs sm:text-sm text-[#534345] leading-relaxed">
                  وقتی جنسی تموم شد، محصول اتوماتیک برچسب «ناموجود» می‌خوره تا سفارشی بیش از ظرفیت قبول نشه.
                </p>
              </div>

              {/* Feature 4 */}
              <div
                onClick={() => onOpenDashboard()}
                className="p-7 rounded-3xl text-right flex flex-col bg-[#FFFFFF] border border-[#DDD2B8] shadow-[0_6px_20px_-4px_rgba(92,31,46,0.05)] hover:-translate-y-1 transition-all duration-200 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-[#F4ECE7] text-[#5B3C33] border border-[#E1CEBE]">
                  <span className="material-symbols-outlined text-[24px]">
                    dashboard
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#22191B] mb-2">
                  پنل تمیز، بدون نیاز به آموزش
                </h3>
                <p className="text-xs sm:text-sm text-[#534345] leading-relaxed">
                  افزودن عکس، نوشتن ابعاد و تغییر قیمت با چند کلیک ساده در موبایل؛ بدون پلاگین‌های گیج‌کننده.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="p-7 rounded-3xl text-right flex flex-col bg-[#FFFFFF] border border-[#DDD2B8] shadow-[0_6px_20px_-4px_rgba(92,31,46,0.05)] hover:-translate-y-1 transition-all duration-200">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-[#E8EEF4] text-[#283F55] border border-[#C4D6E4]">
                  <span className="material-symbols-outlined text-[24px]">
                    public
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#22191B] mb-2">
                  دامنه اختصاصی با نام برند شما
                </h3>
                <p className="text-xs sm:text-sm text-[#534345] leading-relaxed">
                  آدرس اینترنتی اختصاصی (مثل yourboutique.ir) برای اعتبار بیشتر برندت پیش مخاطبان جدید.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="p-7 rounded-3xl text-right flex flex-col bg-[#FFFFFF] border border-[#DDD2B8] shadow-[0_6px_20px_-4px_rgba(92,31,46,0.05)] hover:-translate-y-1 transition-all duration-200">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-[#F7EAEB] text-[#5C1F2E] border border-[#E5C3C8]">
                  <span className="material-symbols-outlined text-[24px]">
                    support_agent
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#22191B] mb-2">
                  پشتیبانی نزدیک و همراهی صمیمانه
                </h3>
                <p className="text-xs sm:text-sm text-[#534345] leading-relaxed">
                  ما بعد از تحویل غیبمون نمی‌زنه! هر سوالی درباره سفارش‌ها و نحوه ارسال داشتی، مستقیماً با ما در تماسی.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LAUNCH OFFER SECTION: Full-width deep navy #1F2A44 with frosted liquid glass card */}
        <section className="w-full bg-[#1F2A44] py-24 lg:py-28 relative overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#3B4D72] blur-3xl opacity-40 pointer-events-none"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10">
            {/* Frosted Liquid Glass Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 sm:p-12 text-center text-white shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-[#EDE3C8] text-xs font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-[#FFB2BF]"></span>
                <span>ظرفیت محدود افتتاحیه • فقط برای ۳ فروشگاه</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                جشن افتتاحیه: ۳۰٪ تخفیف ویژه ۳ پیج اول
              </h2>
              <p className="text-sm sm:text-base text-gray-200 max-w-xl mx-auto mb-8 leading-relaxed">
                راه‌اندازی کامل و بدون دردسر فروشگاه آنلاین، همراه با بارگذاری ۱۰ محصول اول و تنظیمات درگاه شاپرک به‌صورت هدیه ناداستور.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#5C1F2E] text-white font-medium text-sm shadow-[0_10px_25px_rgba(0,0,0,0.35)] hover:bg-[#73273a] transition-all duration-200 whitespace-nowrap"
                  href={EXTERNAL_LINKS.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  رزرو تخفیف افتتاحیه
                </a>
                <a
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-[#FAF6EC] font-medium text-sm transition-all duration-200 whitespace-nowrap"
                  href={EXTERNAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  مشاهده و پیام در اینستاگرام
                </a>
              </div>
              <span className="text-xs text-gray-300 mt-5 block">
                بدون نیاز به تعهد پرداخت اولیه؛ ابتدا وضعیت پیج بررسی می‌شود.
              </span>
            </div>
          </div>
        </section>

        {/* FAQ SECTION: Full width #FFFFFF with cleanly formatted accordion */}
        <section className="w-full bg-[#FFFFFF] py-24 lg:py-28" id="faq">
          <div className="max-w-3xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-14">
              <span className="text-xs font-bold text-[#8C6D3B] tracking-wide block mb-2">
                شفاف و بی‌پرده
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#22191B] mb-3">
                پرسش‌های پرتکرار صاحبان فروشگاه
              </h2>
              <p className="text-sm sm:text-base text-[#534345]">
                هر آن‌چه که قبل از راه‌اندازی سایت برای ذهنت سواله.
              </p>
            </div>

            <div className="space-y-4 text-right">
              {/* Item 1 */}
              <details className="group rounded-2xl p-5 bg-[#FAF6EC] border border-[#E5DAC4] shadow-xs transition-all duration-200">
                <summary className="flex items-center justify-between cursor-pointer list-none select-none text-base font-bold text-[#22191B]">
                  <span>آیا برای داشتن فروشگاه نیاز به اینماد یا ثبت شرکت دارم؟</span>
                  <span className="material-symbols-outlined transition-transform duration-200 group-open:rotate-180 text-[#8C6D3B]">
                    expand_more
                  </span>
                </summary>
                <div className="mt-4 pt-3 text-xs sm:text-sm text-[#534345] leading-relaxed border-t border-[#DECFA8]">
                  خیر، نیازی به ثبت شرکت نیست. برای درگاه پرداخت اینترنتی می‌توانید از پرداخت‌یارهای رسمی و دارای مجوز شاپرک استفاده کنید که تنها با مدارک هویتی فردی (کارت ملی و شناسنامه) فعال می‌شوند و دریافت آن بسیار سریع و ساده است.
                </div>
              </details>

              {/* Item 2 */}
              <details className="group rounded-2xl p-5 bg-[#FAF6EC] border border-[#E5DAC4] shadow-xs transition-all duration-200">
                <summary className="flex items-center justify-between cursor-pointer list-none select-none text-base font-bold text-[#22191B]">
                  <span>چقدر زمان می‌بره تا سایتم آماده بشه؟</span>
                  <span className="material-symbols-outlined transition-transform duration-200 group-open:rotate-180 text-[#8C6D3B]">
                    expand_more
                  </span>
                </summary>
                <div className="mt-4 pt-3 text-xs sm:text-sm text-[#534345] leading-relaxed border-t border-[#DECFA8]">
                  معمولاً فرآیند تنظیمات اولیه، هماهنگی دامنه، چیدمان محصولات نمونه و درگاه پرداخت بین ۲ تا ۴ روز کاری زمان می‌برد. پس از این زمان، فروشگاه آماده دریافت اولین سفارش است.
                </div>
              </details>

              {/* Item 3 */}
              <details className="group rounded-2xl p-5 bg-[#FAF6EC] border border-[#E5DAC4] shadow-xs transition-all duration-200">
                <summary className="flex items-center justify-between cursor-pointer list-none select-none text-base font-bold text-[#22191B]">
                  <span>اگر بلد نباشم با سایت کار کنم چی؟</span>
                  <span className="material-symbols-outlined transition-transform duration-200 group-open:rotate-180 text-[#8C6D3B]">
                    expand_more
                  </span>
                </summary>
                <div className="mt-4 pt-3 text-xs sm:text-sm text-[#534345] leading-relaxed border-t border-[#DECFA8]">
                  پنل فروشگاه ناداستور دقیقاً به سادگی محیط اینستاگرام طراحی شده است. علاوه بر این، یک ویدیوی کوتاه ۵ دقیقه‌ای اختصاصی از محیط سایت خودتان برایتان ارسال می‌کنیم و در تمام مراحل در کنارتان هستیم.
                </div>
              </details>

              {/* Item 4 */}
              <details className="group rounded-2xl p-5 bg-[#FAF6EC] border border-[#E5DAC4] shadow-xs transition-all duration-200">
                <summary className="flex items-center justify-between cursor-pointer list-none select-none text-base font-bold text-[#22191B]">
                  <span>آیا مشتری‌های اینستاگرام حاضرند از سایت خرید کنند؟</span>
                  <span className="material-symbols-outlined transition-transform duration-200 group-open:rotate-180 text-[#8C6D3B]">
                    expand_more
                  </span>
                </summary>
                <div className="mt-4 pt-3 text-xs sm:text-sm text-[#534345] leading-relaxed border-t border-[#DECFA8]">
                  بله، تجربه نشان داده خریداران امروز از معطلی چند ساعته برای گرفتن شماره کارت خسته شده‌اند. وقتی مشتری ببیند در کمتر از ۲ دقیقه می‌تواند سفارشش را با کد پیگیری قطعی کند، خرید سایت را ترجیح می‌دهد.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION: Full width #EDE3C8 with rounded-t-[40px] and clay gift illustration */}
        <section
          className="w-full bg-[#EDE3C8] rounded-t-[40px] py-20 lg:py-24 border-t border-[#DDD2B8]"
          id="contact"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
            {/* Clay Gift Box & Bag Illustration */}
            <div className="w-36 sm:w-44 mb-6 drop-shadow-[0_12px_18px_rgba(92,31,46,0.12)]">
              <img
                alt="جعبه هدیه ناداستور"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain rounded-2xl"
                src={ASSETS.finalCtaClayGift}
              />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#22191B] mb-3">
              آماده‌ای سفارش‌هات منظم و بی‌دغدغه بشن؟
            </h2>
            <p className="text-sm sm:text-base text-[#534345] max-w-xl mx-auto mb-8 leading-relaxed">
              همین حالا به ما پیام بده؛ پیج اینستاگرامت رو می‌بینیم، نیازهاش رو بررسی می‌کنیم و بهترین چیدمان رو رایگان بهت پیشنهاد می‌دیم.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#5C1F2E] text-white font-medium text-sm sm:text-base shadow-[0_12px_28px_rgba(92,31,46,0.25)] hover:bg-[#400919] transition-all duration-200 whitespace-nowrap"
                href={EXTERNAL_LINKS.telegram}
                target="_blank"
                rel="noopener noreferrer"
              >
                شروع گفتگوی رایگان در تلگرام
              </a>
              <a
                className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-white text-[#5C1F2E] border border-[#DDD2B8] font-medium text-sm sm:text-base hover:bg-[#FAF6EC] transition-all duration-200 whitespace-nowrap"
                href={EXTERNAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                ارسال دایرکت در اینستاگرام
              </a>
            </div>
            <p className="text-xs text-[#534345] mt-4">
              پاسخگویی سریع توسط تیم ناداستور • همراهی مرحله به مرحله
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER SECTION: Full width solid #231A1C background with cream text (#EDE3C8 / #FAF6EC) */}
      <footer className="w-full bg-[#231A1C] text-[#FAF6EC] py-14 border-t border-[#382E30]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-right">
            <div className="flex items-center gap-3">
              <img
                alt="NadStore Logo Mark"
                referrerPolicy="no-referrer"
                className="h-7 w-auto object-contain"
                src={ASSETS.logo}
              />
              <span className="text-lg font-bold text-[#EDE3C8]">ناداستور</span>
            </div>
            <p className="text-xs sm:text-sm text-[#D8C1C3]">
              زیرساخت اختصاصی و آرام فروشگاهی برای برندها و بوتیک‌های مستقل
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#EDE3C8]">
            <a
              className="hover:text-white transition-colors"
              href={EXTERNAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              اینستاگرام nadstore@
            </a>
            <a
              className="hover:text-white transition-colors"
              href={EXTERNAL_LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              ارتباط و پشتیبانی تلگرام
            </a>
            <button
              type="button"
              onClick={() => onOpenDashboard()}
              className="hover:text-white transition-colors cursor-pointer"
            >
              پیش‌نمایش میز کار فروشنده
            </button>
          </div>
          <div className="text-[11px] text-[#A69395] text-center md:text-left">
            <p>© ۲۰۲۴ ناداستور. طراحی شده با ظرافت و آرامش.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
