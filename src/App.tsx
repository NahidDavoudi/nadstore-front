/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { MerchantDashboard } from './components/MerchantDashboard';
import {
  DemoOrder,
  DemoProduct,
  INITIAL_ORDERS,
  INITIAL_PRODUCTS,
  OrderStatus,
  toPersianDigits,
} from './data/demoData';

export default function App() {
  const [activeView, setActiveView] = useState<'landing' | 'dashboard'>('landing');
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

  // Static demonstration state in memory (resets on page refresh)
  const [orders, setOrders] = useState<DemoOrder[]>(() => [...INITIAL_ORDERS]);
  const [products, setProducts] = useState<DemoProduct[]>(() => [...INITIAL_PRODUCTS]);

  const handleOpenDashboard = (orderId?: string) => {
    if (orderId) {
      setSelectedOrderId(orderId);
    }
    setActiveView('dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUpdateOrderStatus = (
    orderId: string,
    nextStatus: OrderStatus,
    trackingCode?: string
  ) => {
    setOrders((prev) =>
      prev.map((order) => {
        if (order.id !== orderId) return order;
        const subtitleNote =
          nextStatus === 'paid'
            ? 'پرداخت آنلاین'
            : nextStatus === 'packed'
            ? 'چاپ برچسب آدرس'
            : 'پیامک کد رهگیری';
        return {
          ...order,
          status: nextStatus,
          subtitleNote,
          trackingCode: trackingCode || order.trackingCode,
        };
      })
    );
  };

  const handleToggleProductStock = (productId: string) => {
    setProducts((prev) =>
      prev.map((prd) => {
        if (prd.id !== productId) return prd;
        const nextInStock = !prd.inStock;
        return {
          ...prd,
          inStock: nextInStock,
          stock: nextInStock ? Math.max(5, prd.stock) : 0,
        };
      })
    );
  };

  const handleAddProduct = (
    newProduct: Omit<DemoProduct, 'id' | 'soldCount' | 'sku'>
  ) => {
    const nextIndex = products.length + 101;
    const created: DemoProduct = {
      ...newProduct,
      id: `prd-${Date.now()}`,
      soldCount: 0,
      sku: `TRJ-${toPersianDigits(nextIndex)}`,
    };
    setProducts((prev) => [created, ...prev]);
  };

  const handleResetDemo = () => {
    setOrders([...INITIAL_ORDERS]);
    setProducts([...INITIAL_PRODUCTS]);
  };

  if (activeView === 'dashboard') {
    return (
      <MerchantDashboard
        orders={orders}
        products={products}
        onUpdateOrderStatus={handleUpdateOrderStatus}
        onToggleProductStock={handleToggleProductStock}
        onAddProduct={handleAddProduct}
        onResetDemo={handleResetDemo}
        onBackToLanding={() => {
          setActiveView('landing');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        initialSelectedOrderId={selectedOrderId}
      />
    );
  }

  return (
    <LandingPage
      orders={orders}
      onOpenDashboard={handleOpenDashboard}
    />
  );
}
