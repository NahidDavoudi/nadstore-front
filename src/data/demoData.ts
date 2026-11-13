export type OrderStatus = 'paid' | 'packed' | 'shipped';

export interface DemoOrder {
  id: string;
  orderNumber: string;
  productTitle: string;
  variant: string;
  customerName: string;
  customerPhone: string;
  city: string;
  address: string;
  postalCode: string;
  amount: number;
  status: OrderStatus;
  subtitleNote: string;
  trackingCode?: string;
  createdAt: string;
  icon: 'check_circle' | 'inventory_2' | 'local_shipping';
}

export interface DemoProduct {
  id: string;
  title: string;
  category: string;
  variants: string;
  price: number;
  stock: number;
  inStock: boolean;
  soldCount: number;
  sku: string;
}

export const ASSETS = {
  logo: 'https://lh3.googleusercontent.com/aida/AEtjO1XWvWtRw6lvqOYktYx3fFW2G8UiURR9alZp1_yPbylMBQ4_eZUi-nhINklnKr5gH0EowPtpoBZ-vmgrTMj3WMlfAKWiu_YfcSxVJxuOe15WXB2kuIrIXLCK5Rqbcb4TOOec39z0VRe16cXoeBSW6ZUOyapoxemYNdXOP5R2722KJUBnLEzfeq1GnjNTxxiWl-o2juV5pTnThmqPWzFxvwyKl0blJZekBFgTlMZEEHc',
  heroClayCharacter:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDADMAgKd72CzE267SLIAdON0g60GI_HCe28OOou-7s2MiPhaiy3SjgHvd4piHhScvtGVD5UiejKbDoSiZPD6oea-IatuMWFrxeyT0cOdytd3icDbUGNEVtqW8P7-YHyylFXEDYYCspKMvwFYF3HLVtx9IzxERXySN6S3hJ6pDZUk68wMqoc45pqO1DYEqvA_Jz088xl8FnHt-wisVRD9gGQh2wzIP8x4lxUmK7dLc',
  problemClayIcons:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAUxAyJlHgZbW5eNqqkCn-j9WhMiDX9YPJUTiY839PoK8eY7WN4obfcNR2NP8LP8TSAICKHaoZmC_evZM0eD3eDI2KBiZUrrKEZtxEOPk2hywzZo9_AnTo8NEka5jtoZ48WhHahilAmqwPQ7xpGyLK9_CZaAWplavxwCctV1vLZ5tS4pJOPkVwICBX6wamdEwvIOJWueHWdcuEhO7me8v7pxh6EqBqLFVZ2c5Uw3BQ',
  setupClayCharacter:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBpt0OivD22OBvSxlpnU4VkML37txOFhJds2CQhJ3-GwGWRYf_EQEzg_Wp2XbNPOU9DbiEko9aGSOcGDY3pwfXos5euKxaZXNt_pxKNqz6ItQ6QKPJ8Y_N35ua814SxYuMQCPEFDAX9qXxHvsRBs506jqOGWjCUis8H9EhEPzStvEK9U5kJFncLeS6ahfnp1tyI3EzPPQWz3EZlWJharQXOOwKiECCAr840uj1OJDk',
  finalCtaClayGift:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBgPcaP8aCcibvSUH6vsnU3xVu6_9lLPK7TOLZpxW4f3Qxb7Js6woIuTJEuENPqSUZuK0I_tEMA3XfaX7yuGkHS0yBPN3VwW59W_54GoghUncPvTsz-EQkrCu0fNe0JIoaFXi2V8GZPojKrYY-tO2AcCHLRgXtgYqPtTzFjd1PQczztXwA4qLU7M1LrH0QoZpXd6tibzV4NB8QiOTehzGXpoPP17BqytNQRlc4RbM4',
};

export const EXTERNAL_LINKS = {
  telegram: 'https://t.me/nadstore_support',
  instagram: 'https://instagram.com/nadstore',
};

export const INITIAL_ORDERS: DemoOrder[] = [
  {
    id: 'ord-1042',
    orderNumber: '۱۰۴۲#',
    productTitle: 'روسری ابریشم والنتینو',
    variant: 'قواره ۱۴۰ • زرشکی دست‌دوز',
    customerName: 'مهسا رادفر',
    customerPhone: '۰۹۱۲۳۴۵۸۹۱۰',
    city: 'تهران',
    address: 'خیابان ولیعصر، بالاتر از پارک ساعی، کوچه ساعی دوم، پلاک ۱۴، واحد ۷',
    postalCode: '۱۵۱۱۷۴۳۸۹۱',
    amount: 1450000,
    status: 'paid',
    subtitleNote: 'پرداخت آنلاین',
    createdAt: '۱۰ دقیقه پیش',
    icon: 'check_circle',
  },
  {
    id: 'ord-1041',
    orderNumber: '۱۰۴۱#',
    productTitle: 'شمع معطر وانیل دست‌ساز',
    variant: 'ظرف سرامیکی کرم • فتیله چوبی',
    customerName: 'نگار فرهادی',
    customerPhone: '۰۹۱۲۸۷۶۵۴۳۲',
    city: 'شیراز',
    address: 'بلوار ستارخان، خیابان عفیف‌آباد، مجتمع مسکونی سرو، طبقه ۳، واحد ۹',
    postalCode: '۷۱۸۳۶۵۴۱۲۹',
    amount: 380000,
    status: 'packed',
    subtitleNote: 'چاپ برچسب آدرس',
    createdAt: '۳۵ دقیقه پیش',
    icon: 'inventory_2',
  },
  {
    id: 'ord-1040',
    orderNumber: '۱۰۴۰#',
    productTitle: 'کیف چرم دوشی مینیمال',
    variant: 'چرم طبیعی گاوی • قهوه‌ای فندقی',
    customerName: 'سارا کاظمی',
    customerPhone: '۰۹۳۵۲۱۴۷۸۹۶',
    city: 'اصفهان',
    address: 'خیابان چهارباغ بالا، کوچه بهار آزادی، ساختمان نگین، طبقه ۲',
    postalCode: '۸۱۶۳۹۴۷۱۲۰',
    amount: 2100000,
    status: 'shipped',
    subtitleNote: 'پیامک کد رهگیری',
    trackingCode: '۲۴۸۹۱خیص۰۹۴۱۲۸۷۵۴۳۱۰۹۸',
    createdAt: '۲ ساعت پیش',
    icon: 'local_shipping',
  },
  {
    id: 'ord-1039',
    orderNumber: '۱۰۳۹#',
    productTitle: 'شومیز لینن تابستانه ساحل',
    variant: 'سایز فری (۳۸-۴۴) • کرم شنی',
    customerName: 'الناز کریمی',
    customerPhone: '۰۹۱۱۳۴۵۶۷۸۹',
    city: 'رشت',
    address: 'گلسار، بلوار دیلمان، خیابان آذراندامی، بن‌بست یاس، پلاک ۶',
    postalCode: '۴۱۶۸۹۳۲۱۴۵',
    amount: 960000,
    status: 'paid',
    subtitleNote: 'پرداخت آنلاین',
    createdAt: '۳ ساعت پیش',
    icon: 'check_circle',
  },
  {
    id: 'ord-1038',
    orderNumber: '۱۰۳۸#',
    productTitle: 'ست گوشواره مروارید پرورشی',
    variant: 'نقره عیار ۹۲۵ • آبکاری طلا',
    customerName: 'پرنیا توکلی',
    customerPhone: '۰۹۱۵۴۳۲۱۰۹۸',
    city: 'مشهد',
    address: 'بلوار وکیل‌آباد، خیابان هاشمیه ۱۴، پلاک ۲۸، واحد ۴',
    postalCode: '۹۱۷۸۶۵۴۳۲۱',
    amount: 1280000,
    status: 'packed',
    subtitleNote: 'چاپ برچسب آدرس',
    createdAt: '۴ ساعت پیش',
    icon: 'inventory_2',
  },
];

export const INITIAL_PRODUCTS: DemoProduct[] = [
  {
    id: 'prd-1',
    title: 'روسری ابریشم والنتینو',
    category: 'شال و روسری',
    variants: 'زرشکی، سرمه‌ای، بژ شنی (قواره ۱۴۰)',
    price: 1450000,
    stock: 8,
    inStock: true,
    soldCount: 34,
    sku: 'TRJ-101',
  },
  {
    id: 'prd-2',
    title: 'شمع معطر وانیل دست‌ساز',
    category: 'دکوراتیو و عطر خانه',
    variants: 'ظرف سرامیکی ۲۵۰ گرم • وانیل و چوب صندل',
    price: 380000,
    stock: 14,
    inStock: true,
    soldCount: 62,
    sku: 'TRJ-102',
  },
  {
    id: 'prd-3',
    title: 'کیف چرم دوشی مینیمال',
    category: 'کیف و اکسسوری چرم',
    variants: 'قهوه‌ای فندقی، مشکی مات',
    price: 2100000,
    stock: 3,
    inStock: true,
    soldCount: 19,
    sku: 'TRJ-103',
  },
  {
    id: 'prd-4',
    title: 'شومیز لینن تابستانه ساحل',
    category: 'پوشاک زنانه',
    variants: 'کرم شنی، سبز مریم‌گلی • فری‌سایز',
    price: 960000,
    stock: 0,
    inStock: false,
    soldCount: 45,
    sku: 'TRJ-104',
  },
  {
    id: 'prd-5',
    title: 'ست گوشواره مروارید پرورشی',
    category: 'زیورآلات دست‌ساز',
    variants: 'نقره ۹۲۵ با روکش طلا ۱۸ عیار',
    price: 1280000,
    stock: 6,
    inStock: true,
    soldCount: 27,
    sku: 'TRJ-105',
  },
];

const PERSIAN_DIGITS = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

export function toPersianDigits(value: number | string): string {
  return String(value).replace(/\d/g, (d) => PERSIAN_DIGITS[Number(d)]);
}

export function formatToman(amount: number): string {
  return toPersianDigits(amount.toLocaleString('en-US'));
}
