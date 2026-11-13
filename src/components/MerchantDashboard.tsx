import React, { useState } from 'react';
import {
  ASSETS,
  DemoOrder,
  DemoProduct,
  EXTERNAL_LINKS,
  OrderStatus,
  formatToman,
  toPersianDigits,
} from '../data/demoData';

interface MerchantDashboardProps {
  orders: DemoOrder[];
  products: DemoProduct[];
  onUpdateOrderStatus: (orderId: string, nextStatus: OrderStatus, trackingCode?: string) => void;
  onToggleProductStock: (productId: string) => void;
  onAddProduct: (newProduct: Omit<DemoProduct, 'id' | 'soldCount' | 'sku'>) => void;
  onResetDemo: () => void;
  onBackToLanding: () => void;
  initialSelectedOrderId?: string | null;
}

export const MerchantDashboard: React.FC<MerchantDashboardProps> = ({
  orders,
  products,
  onUpdateOrderStatus,
  onToggleProductStock,
  onAddProduct,
  onResetDemo,
  onBackToLanding,
  initialSelectedOrderId,
}) => {
  const [activeTab, setActiveTab] = useState<'orders' | 'products'>('orders');
  const [statusFilter, setStatusFilter] = useState<'all' | OrderStatus>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOrderId, setSelectedOrderId] = useState<string>(
    initialSelectedOrderId || orders[0]?.id || ''
  );
  const [trackingInput, setTrackingInput] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showPrintLabelModal, setShowPrintLabelModal] = useState(false);

  // New product form state
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('شال و روسری');
  const [newVariants, setNewVariants] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newStock, setNewStock] = useState('5');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3200);
  };

  const filteredOrders = orders.filter((ord) => {
    const matchesStatus = statusFilter === 'all' || ord.status === statusFilter;
    const q = searchQuery.trim();
    if (!q) return matchesStatus;
    return (
      ord.productTitle.includes(q) ||
      ord.customerName.includes(q) ||
      ord.orderNumber.includes(q) ||
      ord.city.includes(q)
    );
  });

  const selectedOrder =
    orders.find((o) => o.id === selectedOrderId) || filteredOrders[0] || orders[0];

  const totalRevenue = orders.reduce((acc, o) => acc + o.amount, 0);
  const paidCount = orders.filter((o) => o.status === 'paid').length;
  const packedCount = orders.filter((o) => o.status === 'packed').length;
  const shippedCount = orders.filter((o) => o.status === 'shipped').length;

  const handleCopyBioLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('https://toranjboutique.ir').catch(() => {});
    }
    showToast('لینک اختصاصی بیو (toranjboutique.ir) کپی شد');
  };

  const handleAdvanceStatus = (order: DemoOrder) => {
    if (order.status === 'paid') {
      onUpdateOrderStatus(order.id, 'packed');
      showToast(`سفارش ${order.orderNumber} به وضعیت «بسته‌بندی شده» تغییر یافت و برچسب پستی آماده شد.`);
    } else if (order.status === 'packed') {
      const code =
        trackingInput.trim() ||
        `۲۴۸۹۱${toPersianDigits(Math.floor(1000000000 + Math.random() * 9000000000))}`;
      onUpdateOrderStatus(order.id, 'shipped', code);
      setTrackingInput('');
      showToast(`کد رهگیری پستی برای ${order.customerName} پیامک شد.`);
    }
  };

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const numericPrice = Number(newPrice.replace(/[^0-9]/g, '')) || 650000;
    const numericStock = Math.max(0, Number(newStock) || 0);
    if (!newTitle.trim()) return;

    onAddProduct({
      title: newTitle.trim(),
      category: newCategory,
      variants: newVariants.trim() || 'تک‌سایز • رنگ‌بندی کامل',
      price: numericPrice,
      stock: numericStock,
      inStock: numericStock > 0,
    });

    setNewTitle('');
    setNewVariants('');
    setNewPrice('');
    setNewStock('5');
    setShowAddProductForm(false);
    showToast('محصول جدید با موفقیت به ویترین بوتیک ترنج اضافه شد.');
  };

  const renderStatusPill = (status: OrderStatus) => {
    if (status === 'paid') {
      return (
        <span className="px-2.5 py-1 rounded-full bg-[#EBF5EA] text-[#2E6B34] text-xs font-semibold whitespace-nowrap shrink-0">
          پرداخت موفق
        </span>
      );
    }
    if (status === 'packed') {
      return (
        <span className="px-2.5 py-1 rounded-full bg-[#EDE3C8] text-[#5C4B33] text-xs font-semibold whitespace-nowrap shrink-0">
          بسته‌بندی شده
        </span>
      );
    }
    return (
      <span className="px-2.5 py-1 rounded-full bg-[#E5ECF6] text-[#284873] text-xs font-semibold whitespace-nowrap shrink-0">
        ارسال با پست
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-[#FAF6EC] text-[#22191B] pb-20">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-[#E5DBC7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToLanding}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#FAF6EC] hover:bg-[#EDE3C8] text-[#5C1F2E] text-xs font-bold border border-[#DDD2B8] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              <span>بازگشت به صفحه اصلی</span>
            </button>
            <div className="hidden sm:flex items-center gap-2.5 pr-2 border-r border-[#E5DBC7]">
              <img
                src={ASSETS.logo}
                alt="NadStore Logo"
                referrerPolicy="no-referrer"
                className="h-7 w-auto object-contain"
              />
              <span className="text-sm font-bold text-[#22191B] whitespace-nowrap">
                میز کار بوتیک ترنج (دموی زنده ناداستور)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleCopyBioLink}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF6EC] hover:bg-[#EDE3C8]/70 text-[#5C4B33] text-xs font-medium border border-[#DECFA8] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">link</span>
              <span dir="ltr">toranjboutique.ir</span>
              <span className="material-symbols-outlined text-[15px]">content_copy</span>
            </button>

            <button
              onClick={() => {
                onResetDemo();
                showToast('داده‌های نمایشی به حالت اولیه بازنشانی شدند.');
              }}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium text-[#534345] hover:bg-[#EDE3C8]/50 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              title="بازنشانی داده‌های دمو"
            >
              <span className="material-symbols-outlined text-[16px]">restart_alt</span>
              <span className="hidden sm:inline">بازنشانی دمو</span>
            </button>

            <a
              href={EXTERNAL_LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-9 px-4 rounded-full bg-[#5C1F2E] text-white text-xs font-medium shadow-[0_6px_18px_rgba(92,31,46,0.2)] hover:bg-[#400919] transition-all whitespace-nowrap shrink-0"
            >
              ساخت فروشگاه برای پیج من
            </a>
          </div>
        </div>
      </header>

      {/* Toast Feedback */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#231A1C] text-[#FAF6EC] px-5 py-3 rounded-2xl shadow-xl border border-[#5C1F2E] flex items-center gap-2.5 text-xs sm:text-sm font-medium max-w-md w-[92%]">
          <span className="material-symbols-outlined text-[#EDE3C8] text-[20px]">task_alt</span>
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-8">
        {/* Summary Strip */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#DDD2B8] shadow-[0_12px_30px_-8px_rgba(92,31,46,0.06)] mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-5 border-b border-[#ECE0C7]">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#EDE3C8] flex items-center justify-center text-[#5C1F2E] shrink-0">
                <span className="material-symbols-outlined text-[26px]">storefront</span>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-[#22191B]">
                  میز کار بوتیک ترنج
                </h1>
                <p className="text-xs sm:text-sm text-[#534345] mt-0.5">
                  سفارش‌های لحظه‌ای ثبت‌شده از لینک بیو اینستاگرام • تسویه مستقیم شاپرک
                </p>
              </div>
            </div>

            {/* Segmented View Switcher */}
            <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-[#FAF6EC] border border-[#E5DAC4] self-start lg:self-auto">
              <button
                onClick={() => setActiveTab('orders')}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  activeTab === 'orders'
                    ? 'bg-[#5C1F2E] text-white shadow-xs'
                    : 'text-[#534345] hover:text-[#22191B]'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">receipt_long</span>
                <span>سفارش‌های امروز ({toPersianDigits(orders.length)})</span>
              </button>
              <button
                onClick={() => setActiveTab('products')}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  activeTab === 'products'
                    ? 'bg-[#5C1F2E] text-white shadow-xs'
                    : 'text-[#534345] hover:text-[#22191B]'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">inventory</span>
                <span>محصولات و موجودی ({toPersianDigits(products.length)})</span>
              </button>
            </div>
          </div>

          {/* 4 Metric Items */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-5 tabular-nums">
            <div className="p-3.5 rounded-2xl bg-[#FAF6EC] border border-[#E5DAC4]">
              <span className="text-xs text-[#534345] block mb-1">فروش ثبت‌شده امروز</span>
              <div className="text-base sm:text-lg font-bold text-[#22191B]">
                {formatToman(totalRevenue)}{' '}
                <span className="text-xs font-normal text-[#534345]">تومان</span>
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#FAF6EC] border border-[#E5DAC4]">
              <span className="text-xs text-[#534345] block mb-1">آماده بسته‌بندی (پرداخت موفق)</span>
              <div className="text-base sm:text-lg font-bold text-[#2E6B34]">
                {toPersianDigits(paidCount)} سفارش
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#FAF6EC] border border-[#E5DAC4]">
              <span className="text-xs text-[#534345] block mb-1">بسته‌بندی شده / تحویل پست</span>
              <div className="text-base sm:text-lg font-bold text-[#5C4B33]">
                {toPersianDigits(packedCount)} بسته آماده · {toPersianDigits(shippedCount)} ارسال‌شده
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#EDE3C8]/65 border border-[#DECFA8]">
              <span className="text-xs text-[#5C4B33] block mb-1">صرفه‌جویی در پاسخگویی دایرکت</span>
              <div className="text-base sm:text-lg font-bold text-[#5C1F2E]">
                ۴ ساعت زمان آزاد امروز
              </div>
            </div>
          </div>
        </div>

        {activeTab === 'orders' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
            {/* Right Column: Orders List */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-6 border border-[#DDD2B8] shadow-[0_8px_24px_-6px_rgba(92,31,46,0.05)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                  {(
                    [
                      { key: 'all', label: 'همه سفارش‌ها' },
                      { key: 'paid', label: 'پرداخت موفق' },
                      { key: 'packed', label: 'بسته‌بندی شده' },
                      { key: 'shipped', label: 'ارسال با پست' },
                    ] as const
                  ).map((item) => (
                    <button
                      key={item.key}
                      onClick={() => setStatusFilter(item.key)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        statusFilter === item.key
                          ? 'bg-[#EDE3C8] text-[#5C1F2E] border border-[#DECFA8]'
                          : 'text-[#534345] hover:bg-[#FAF6EC]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="جستجوی نام، محصول یا شهر..."
                    className="w-full sm:w-52 pr-8 pl-3 py-1.5 rounded-xl bg-[#FAF6EC] border border-[#E5DAC4] text-xs text-[#22191B] placeholder:text-[#857275] focus:outline-none focus:border-[#5C1F2E]"
                  />
                  <span className="material-symbols-outlined text-[16px] text-[#857275] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none">
                    search
                  </span>
                </div>
              </div>

              {filteredOrders.length === 0 ? (
                <div className="text-center py-12 px-4 rounded-2xl bg-[#FAF6EC] border border-[#E5DAC4]">
                  <span className="material-symbols-outlined text-[32px] text-[#8C6D3B] mb-2">
                    inbox
                  </span>
                  <p className="text-sm font-bold text-[#22191B] mb-1">
                    سفارشی با این فیلتر پیدا نشد
                  </p>
                  <p className="text-xs text-[#534345] mb-4">
                    می‌توانید فیلتر وضعیت یا عبارت جستجو را پاک کنید.
                  </p>
                  <button
                    onClick={() => {
                      setStatusFilter('all');
                      setSearchQuery('');
                    }}
                    className="px-4 py-2 rounded-full bg-[#5C1F2E] text-white text-xs font-medium cursor-pointer"
                  >
                    نمایش همه سفارش‌ها
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredOrders.map((order) => {
                    const isSelected = selectedOrder?.id === order.id;
                    return (
                      <div
                        key={order.id}
                        onClick={() => setSelectedOrderId(order.id)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                          isSelected
                            ? 'bg-[#FAF6EC] border-[#5C1F2E] shadow-xs'
                            : 'bg-white hover:bg-[#FAF6EC]/60 border-[#F0E6D2]'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                              order.status === 'shipped'
                                ? 'bg-[#F5E8EB] text-[#5C1F2E]'
                                : 'bg-[#EDE3C8]/70 text-[#5C1F2E]'
                            }`}
                          >
                            <span className="material-symbols-outlined text-[20px]">
                              {order.status === 'paid'
                                ? 'check_circle'
                                : order.status === 'packed'
                                ? 'inventory_2'
                                : 'local_shipping'}
                            </span>
                          </div>
                          <div className="min-w-0 text-right">
                            <div className="flex items-center gap-2">
                              <span className="text-xs sm:text-sm font-bold text-[#22191B] truncate">
                                {order.productTitle}
                              </span>
                            </div>
                            <div className="text-[11px] text-[#534345] mt-0.5 truncate">
                              شماره سفارش: {order.orderNumber} · {order.customerName} ({order.city})
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-end gap-1.5 shrink-0 tabular-nums">
                          <span className="text-xs sm:text-sm font-bold text-[#22191B]">
                            {formatToman(order.amount)}{' '}
                            <span className="text-[10px] font-normal text-[#534345]">تومان</span>
                          </span>
                          {renderStatusPill(order.status)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Left Column: Selected Order Details & One-Click Actions */}
            {selectedOrder && (
              <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-[#DDD2B8] shadow-[0_8px_24px_-6px_rgba(92,31,46,0.05)] sticky top-24">
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#ECE0C7]">
                  <div>
                    <span className="text-xs text-[#8C6D3B] font-bold block">
                      جزئیات سفارش {selectedOrder.orderNumber}
                    </span>
                    <h2 className="text-base sm:text-lg font-bold text-[#22191B] mt-0.5">
                      {selectedOrder.productTitle}
                    </h2>
                  </div>
                  {renderStatusPill(selectedOrder.status)}
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-2xl bg-[#FAF6EC] border border-[#E5DAC4]">
                    <div className="text-[#534345] text-xs mb-1">مدل و ویژگی انتخابی مشتری:</div>
                    <div className="font-bold text-[#22191B]">{selectedOrder.variant}</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FAF6EC] border border-[#E5DAC4] space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[#534345] text-xs">گیرنده:</span>
                      <span className="font-bold text-[#22191B]">{selectedOrder.customerName}</span>
                    </div>
                    <div className="flex items-center justify-between tabular-nums">
                      <span className="text-[#534345] text-xs">شماره همراه:</span>
                      <span className="font-bold text-[#22191B]" dir="ltr">
                        {selectedOrder.customerPhone}
                      </span>
                    </div>
                    <div className="flex items-center justify-between tabular-nums">
                      <span className="text-[#534345] text-xs">کد پستی ۱۰ رقمی:</span>
                      <span className="font-bold text-[#22191B]">{selectedOrder.postalCode}</span>
                    </div>
                    <div className="pt-2 border-t border-[#E5DAC4]">
                      <span className="text-[#534345] text-xs block mb-1">نشانی دقیق پستی:</span>
                      <p className="text-[#22191B] font-medium leading-relaxed">
                        {selectedOrder.city}، {selectedOrder.address}
                      </p>
                    </div>
                  </div>

                  {selectedOrder.trackingCode && (
                    <div className="p-3.5 rounded-2xl bg-[#E5ECF6]/60 border border-[#C4D6E4] flex items-center justify-between">
                      <div>
                        <span className="text-[11px] text-[#284873] block">
                          کد رهگیری مرسوله پستی (پیامک شده):
                        </span>
                        <span className="font-bold text-[#1F2A44] text-xs tabular-nums">
                          {selectedOrder.trackingCode}
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-[#284873] text-[20px]">
                        sms
                      </span>
                    </div>
                  )}

                  {/* Workflow Actions */}
                  <div className="pt-2 space-y-3">
                    {selectedOrder.status === 'paid' && (
                      <button
                        onClick={() => handleAdvanceStatus(selectedOrder)}
                        className="w-full py-3 px-4 rounded-full bg-[#5C1F2E] hover:bg-[#400919] text-white font-medium text-xs sm:text-sm shadow-[0_8px_20px_rgba(92,31,46,0.22)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[18px]">inventory_2</span>
                        <span>تایید بسته‌بندی و آماده‌سازی فیش پستی</span>
                      </button>
                    )}

                    {selectedOrder.status === 'packed' && (
                      <div className="space-y-2.5 p-3.5 rounded-2xl bg-[#FAF6EC] border border-[#DECFA8]">
                        <label className="block text-xs font-bold text-[#22191B]">
                          ثبت کد رهگیری پست و ارسال پیامک خودکار به خریدار:
                        </label>
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={trackingInput}
                            onChange={(e) => setTrackingInput(e.target.value)}
                            placeholder="کد ۲۴ رقمی پست (اختیاری برای تست)"
                            className="flex-1 px-3 py-2 rounded-xl bg-white border border-[#DDD2B8] text-xs text-[#22191B] focus:outline-none focus:border-[#5C1F2E]"
                          />
                          <button
                            onClick={() => handleAdvanceStatus(selectedOrder)}
                            className="px-4 py-2 rounded-xl bg-[#5C1F2E] hover:bg-[#400919] text-white text-xs font-medium whitespace-nowrap shrink-0 cursor-pointer"
                          >
                            ثبت و پیامک
                          </button>
                        </div>
                      </div>
                    )}

                    <button
                      onClick={() => setShowPrintLabelModal(true)}
                      className="w-full py-2.5 px-4 rounded-full bg-[#EDE3C8] hover:bg-[#DECFA8] text-[#5C4B33] font-bold text-xs sm:text-sm border border-[#DECFA8] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">print</span>
                      <span>مشاهده برچسب آدرس آماده چاپ روی بسته</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Products & Inventory View */
          <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#DDD2B8] shadow-[0_8px_24px_-6px_rgba(92,31,46,0.05)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-6 border-b border-[#ECE0C7]">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-[#22191B]">
                  مدیریت موجودی و ویترین محصولات
                </h2>
                <p className="text-xs sm:text-sm text-[#534345] mt-0.5">
                  وقتی موجودی تمام شود، برچسب «ناموجود» خودکار در لینک بیو فعال می‌شود تا سفارشی بیش از ظرفیت ثبت نشود.
                </p>
              </div>
              <button
                onClick={() => setShowAddProductForm((prev) => !prev)}
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-[#5C1F2E] hover:bg-[#400919] text-white text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer self-start sm:self-auto"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {showAddProductForm ? 'close' : 'add'}
                </span>
                <span>{showAddProductForm ? 'بستن فرم' : 'افزودن محصول نمونه'}</span>
              </button>
            </div>

            {showAddProductForm && (
              <form
                onSubmit={handleCreateProduct}
                className="mb-7 p-5 rounded-2xl bg-[#FAF6EC] border border-[#DECFA8] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
              >
                <div>
                  <label className="block text-xs font-bold text-[#22191B] mb-1.5">
                    نام محصول *
                  </label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="مثلاً: شال موهر پاییزه"
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#DDD2B8] text-xs text-[#22191B] focus:outline-none focus:border-[#5C1F2E]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#22191B] mb-1.5">
                    دسته‌بندی
                  </label>
                  <input
                    type="text"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#DDD2B8] text-xs text-[#22191B] focus:outline-none focus:border-[#5C1F2E]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#22191B] mb-1.5">
                    قیمت (تومان) *
                  </label>
                  <input
                    type="number"
                    required
                    min={10000}
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    placeholder="890000"
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#DDD2B8] text-xs text-[#22191B] focus:outline-none focus:border-[#5C1F2E]"
                  />
                </div>
                <div className="flex items-end gap-2">
                  <div className="flex-1">
                    <label className="block text-xs font-bold text-[#22191B] mb-1.5">
                      تعداد موجودی
                    </label>
                    <input
                      type="number"
                      min={0}
                      value={newStock}
                      onChange={(e) => setNewStock(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#DDD2B8] text-xs text-[#22191B] focus:outline-none focus:border-[#5C1F2E]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="h-[34px] px-4 rounded-xl bg-[#5C1F2E] text-white text-xs font-bold hover:bg-[#400919] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    ثبت در ویترین
                  </button>
                </div>
              </form>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="p-5 rounded-2xl bg-[#FAF6EC] border border-[#E5DAC4] flex flex-col justify-between gap-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[11px] text-[#8C6D3B] font-bold">
                        {product.category} · کد {product.sku}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-[#22191B] mt-0.5">
                        {product.title}
                      </h3>
                      <p className="text-xs text-[#534345] mt-1">{product.variants}</p>
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-bold whitespace-nowrap shrink-0 ${
                        product.inStock
                          ? 'bg-[#EBF5EA] text-[#2E6B34]'
                          : 'bg-[#FAF0F2] text-[#733140] border border-[#ECD3D7]'
                      }`}
                    >
                      {product.inStock
                        ? `موجود (${toPersianDigits(product.stock)} عدد)`
                        : 'ناموجود'}
                    </span>
                  </div>

                  <div className="pt-3 border-t border-[#E5DAC4] flex items-center justify-between gap-2 tabular-nums">
                    <div>
                      <span className="text-sm font-bold text-[#22191B]">
                        {formatToman(product.price)}{' '}
                        <span className="text-xs font-normal text-[#534345]">تومان</span>
                      </span>
                      <span className="text-[11px] text-[#534345] block">
                        {toPersianDigits(product.soldCount)} فروش موفق در سایت
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        onToggleProductStock(product.id);
                        showToast(
                          product.inStock
                            ? `«${product.title}» برچسب ناموجود خورد.`
                            : `«${product.title}» مجدداً در فروشگاه موجود شد.`
                        );
                      }}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        product.inStock
                          ? 'bg-white border border-[#DDD2B8] text-[#534345] hover:bg-[#FAF0F2] hover:text-[#733140]'
                          : 'bg-[#5C1F2E] text-white hover:bg-[#400919]'
                      }`}
                    >
                      {product.inStock ? 'تغییر به ناموجود' : 'شارژ مجدد موجودی'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Printable Postal Label Modal */}
      {showPrintLabelModal && selectedOrder && (
        <div
          className="fixed inset-0 z-50 bg-black/45 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setShowPrintLabelModal(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-md w-full p-6 border border-[#DDD2B8] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#ECE0C7]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#5C1F2E]">local_post_office</span>
                <span className="text-sm font-bold text-[#22191B]">
                  برچسب پستی آماده الصاق روی بسته
                </span>
              </div>
              <button
                onClick={() => setShowPrintLabelModal(false)}
                className="w-8 h-8 rounded-full hover:bg-[#FAF6EC] flex items-center justify-center text-[#534345] cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF6EC] border-2 border-dashed border-[#8C6D3B] space-y-3 text-xs sm:text-sm">
              <div className="flex items-center justify-between pb-2.5 border-b border-[#DECFA8]">
                <span className="font-bold text-[#5C1F2E]">فرستنده: بوتیک ترنج (ناداستور)</span>
                <span className="font-bold tabular-nums">سفارش {selectedOrder.orderNumber}</span>
              </div>
              <div>
                <span className="text-[#534345] text-xs block">گیرنده مرسوله:</span>
                <span className="font-bold text-base text-[#22191B]">
                  {selectedOrder.customerName}
                </span>
              </div>
              <div>
                <span className="text-[#534345] text-xs block">نشانی مقصد:</span>
                <p className="font-medium text-[#22191B] leading-relaxed">
                  {selectedOrder.city} — {selectedOrder.address}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#DECFA8] tabular-nums">
                <div>
                  <span className="text-[#534345] text-[11px] block">کد پستی:</span>
                  <span className="font-bold text-[#22191B]">{selectedOrder.postalCode}</span>
                </div>
                <div>
                  <span className="text-[#534345] text-[11px] block">تلفن تماس:</span>
                  <span className="font-bold text-[#22191B]" dir="ltr">
                    {selectedOrder.customerPhone}
                  </span>
                </div>
              </div>
              <div className="pt-2 border-t border-[#DECFA8] text-[11px] text-[#534345]">
                محتویات بسته: {selectedOrder.productTitle} ({selectedOrder.variant})
              </div>
            </div>

            <div className="mt-5 flex items-center justify-end gap-2.5">
              <button
                onClick={() => setShowPrintLabelModal(false)}
                className="px-4 py-2 rounded-full text-xs font-medium text-[#534345] hover:bg-[#FAF6EC] cursor-pointer"
              >
                بستن
              </button>
              <button
                onClick={() => {
                  setShowPrintLabelModal(false);
                  showToast(`برچسب پستی سفارش ${selectedOrder.orderNumber} آماده چاپ شد.`);
                }}
                className="px-5 py-2.5 rounded-full bg-[#5C1F2E] text-white text-xs font-medium hover:bg-[#400919] flex items-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">print</span>
                <span>چاپ برچسب آدرس</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
