/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  Plus, 
  Minus, 
  ChevronRight, 
  Languages, 
  Leaf, 
  ShieldCheck, 
  Truck, 
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
  Search
} from 'lucide-react';
import { products } from './data/products';
import { Product, CartItem, Language } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('ta');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Translations
  const t = {
    ta: {
      brand: 'ஹீல்கேர் காற்றாலை சோப்பு',
      heroTitle: 'இயற்கையின் மடியில் இருந்து உங்கள் ஆரோக்கியத்திற்கு',
      heroSub: '100% இயற்கை மூலிகை பொருட்கள். உங்கள் சருமம் மற்றும் உடல் நலனுக்கான சிறந்த தேர்வு.',
      shopNow: 'இப்போதே வாங்குங்கள்',
      categories: 'வகைகள்',
      all: 'அனைத்தும்',
      skincare: 'சரும பராமரிப்பு',
      health: 'ஆரோக்கியம்',
      haircare: 'கூந்தல் பராமரிப்பு',
      wellness: 'நலவாழ்வு',
      addToCart: 'கூடையில் சேர்',
      cart: 'உங்கள் கூடை',
      emptyCart: 'உங்கள் கூடை காலியாக உள்ளது',
      total: 'மொத்தம்',
      checkout: 'பணம் செலுத்துங்கள்',
      benefits: 'பயன்கள்',
      ingredients: 'பொருட்கள்',
      usage: 'பயன்படுத்தும் முறை',
      search: 'தேடுங்கள்...',
      freeShipping: 'இலவச டெலிவரி',
      quality: 'தரமான பொருட்கள்',
      secure: 'பாதுகாப்பான கட்டணம்',
      contact: 'தொடர்புக்கு',
      about: 'எங்களைப் பற்றி',
      footerDesc: 'ஹீல்கேர் காற்றாலை சோப்பு - பாரம்பரிய மூலிகை அறிவை நவீன வாழ்வியலோடு இணைக்கிறோம்.',
    },
    en: {
      brand: 'Healcare Windmill Soap',
      heroTitle: 'From Nature\'s Lap to Your Wellbeing',
      heroSub: '100% Natural herbal products. The best choice for your skin and body health.',
      shopNow: 'Shop Now',
      categories: 'Categories',
      all: 'All',
      skincare: 'Skincare',
      health: 'Health',
      haircare: 'Haircare',
      wellness: 'Wellness',
      addToCart: 'Add to Cart',
      cart: 'Your Cart',
      emptyCart: 'Your cart is empty',
      total: 'Total',
      checkout: 'Checkout',
      benefits: 'Benefits',
      ingredients: 'Ingredients',
      usage: 'How to Use',
      search: 'Search products...',
      freeShipping: 'Free Shipping',
      quality: 'Premium Quality',
      secure: 'Secure Payment',
      contact: 'Contact Us',
      about: 'About Us',
      footerDesc: 'Healcare Windmill Soap - Bridging traditional herbal wisdom with modern lifestyle.',
    }
  };

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesSearch = p.name[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.description[lang].toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory, lang]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className={`min-h-screen font-sans ${lang === 'ta' ? 'tamil-text' : ''}`}>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-600 rounded-full flex items-center justify-center text-white">
                <Leaf size={24} />
              </div>
              <span className="text-xl font-bold text-brand-800 hidden sm:block">
                {t[lang].brand}
              </span>
            </div>

            <div className="flex-1 max-w-md mx-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-400" size={18} />
                <input
                  type="text"
                  placeholder={t[lang].search}
                  className="w-full pl-10 pr-4 py-2 bg-brand-50 border-none rounded-full focus:ring-2 focus:ring-brand-500 text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => setLang(lang === 'ta' ? 'en' : 'ta')}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-brand-100 text-brand-700 hover:bg-brand-200 transition-colors text-sm font-medium"
              >
                <Languages size={16} />
                {lang === 'ta' ? 'English' : 'தமிழ்'}
              </button>
              
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-brand-700 hover:bg-brand-50 rounded-full transition-colors"
              >
                <ShoppingBag size={24} />
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 bg-brand-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                    {cart.reduce((s, i) => s + i.quantity, 0)}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center overflow-hidden bg-brand-900">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=2000" 
            alt="Herbal background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              {t[lang].heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-brand-100 mb-8">
              {t[lang].heroSub}
            </p>
            <button 
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-brand-500 hover:bg-brand-400 text-white rounded-full font-bold transition-all transform hover:scale-105 flex items-center gap-2"
            >
              {t[lang].shopNow}
              <ChevronRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-brand-50">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-600 shadow-sm">
                <Truck size={24} />
              </div>
              <div>
                <h3 className="font-bold">{t[lang].freeShipping}</h3>
                <p className="text-sm text-brand-600">On orders above ₹500</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-brand-50">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-600 shadow-sm">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="font-bold">{t[lang].quality}</h3>
                <p className="text-sm text-brand-600">100% Natural & Pure</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-brand-50">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-600 shadow-sm">
                <ShoppingBag size={24} />
              </div>
              <div>
                <h3 className="font-bold">{t[lang].secure}</h3>
                <p className="text-sm text-brand-600">Safe & Fast Checkout</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
          <h2 className="text-3xl font-bold text-brand-900">{t[lang].categories}</h2>
          
          <div className="flex flex-wrap gap-2">
            {['all', 'skincare', 'health', 'haircare', 'wellness'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? 'bg-brand-600 text-white shadow-md' 
                    : 'bg-white text-brand-600 hover:bg-brand-100 border border-brand-200'
                }`}
              >
                {t[lang][cat as keyof typeof t['en']]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group bg-white rounded-3xl overflow-hidden border border-brand-100 hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="p-8 flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-brand-400 block mb-1">
                        {t[lang][product.category]}
                      </span>
                      <h3 className="text-2xl font-bold text-brand-900 leading-tight">
                        {product.name[lang]}
                      </h3>
                    </div>
                    <div className="bg-brand-50 px-3 py-1 rounded-full text-xs font-bold text-brand-600 shrink-0">
                      {product.size}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <p className="text-brand-700 font-medium leading-relaxed">
                        {product.description[lang]}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-brand-900 mb-3 flex items-center gap-2 border-b border-brand-100 pb-1">
                        <Leaf size={14} className="text-brand-500" />
                        {t[lang].benefits}
                      </h4>
                      <ul className="space-y-2">
                        {product.benefits[lang].map((benefit, i) => (
                          <li key={i} className="text-sm text-brand-600 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-300 mt-1.5 shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {product.ingredients && (
                      <div>
                        <h4 className="text-sm font-bold text-brand-900 mb-2 flex items-center gap-2 border-b border-brand-100 pb-1">
                          <ShieldCheck size={14} className="text-brand-500" />
                          {t[lang].ingredients}
                        </h4>
                        <p className="text-xs text-brand-500 leading-relaxed">
                          {product.ingredients[lang].join(', ')}
                        </p>
                      </div>
                    )}

                    {product.usage && (
                      <div className="p-4 bg-brand-50 rounded-2xl border border-brand-100">
                        <h4 className="text-xs font-bold text-brand-900 mb-2 flex items-center gap-2">
                          <Truck size={14} className="text-brand-500" />
                          {t[lang].usage}
                        </h4>
                        <p className="text-xs text-brand-600 leading-relaxed">
                          {product.usage[lang]}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="p-6 bg-brand-50/50 border-t border-brand-100 flex items-center justify-between">
                  <span className="text-2xl font-bold text-brand-800">
                    ₹{product.price}
                  </span>
                  <button 
                    onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                    className="flex items-center gap-2 px-6 py-3 bg-brand-600 text-white hover:bg-brand-700 rounded-2xl transition-all shadow-lg shadow-brand-600/20 font-bold"
                  >
                    <Plus size={20} />
                    {t[lang].addToCart}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Leaf className="text-brand-400" size={32} />
                <span className="text-2xl font-bold">{t[lang].brand}</span>
              </div>
              <p className="text-brand-300 max-w-md mb-8">
                {t[lang].footerDesc}
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">{t[lang].about}</h4>
              <ul className="space-y-4 text-brand-300">
                <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Quality Standards</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ingredients</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">{t[lang].contact}</h4>
              <ul className="space-y-4 text-brand-300">
                <li>Email: info@healcare.com</li>
                <li>Phone: +91 98765 43210</li>
                <li>Address: Tamil Nadu, India</li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/10 text-center text-brand-400 text-sm">
            © 2026 {t[lang].brand}. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full text-brand-900 hover:bg-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-auto">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name[lang]}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="w-full md:w-1/2 p-8 overflow-y-auto">
                <span className="text-xs font-bold text-brand-400 uppercase tracking-widest mb-2 block">
                  {t[lang][selectedProduct.category]}
                </span>
                <h2 className="text-3xl font-bold text-brand-900 mb-2">
                  {selectedProduct.name[lang]}
                </h2>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-2xl font-bold text-brand-700">₹{selectedProduct.price}</span>
                  <span className="px-3 py-1 bg-brand-50 text-brand-600 rounded-full text-sm font-bold">
                    {selectedProduct.size}
                  </span>
                </div>

                <p className="text-brand-600 mb-8 leading-relaxed">
                  {selectedProduct.description[lang]}
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-brand-900 mb-3 flex items-center gap-2">
                      <ChevronRight size={18} className="text-brand-500" />
                      {t[lang].benefits}
                    </h4>
                    <ul className="space-y-2">
                      {selectedProduct.benefits[lang].map((benefit, i) => (
                        <li key={i} className="text-sm text-brand-600 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-300 mt-1.5 shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedProduct.ingredients && (
                    <div>
                      <h4 className="font-bold text-brand-900 mb-3 flex items-center gap-2">
                        <ChevronRight size={18} className="text-brand-500" />
                        {t[lang].ingredients}
                      </h4>
                      <p className="text-sm text-brand-600">
                        {selectedProduct.ingredients[lang].join(', ')}
                      </p>
                    </div>
                  )}

                  {selectedProduct.usage && (
                    <div className="p-4 bg-brand-50 rounded-2xl border border-brand-100">
                      <h4 className="font-bold text-brand-900 mb-2 flex items-center gap-2">
                        <ChevronRight size={18} className="text-brand-500" />
                        {t[lang].usage}
                      </h4>
                      <p className="text-sm text-brand-600">
                        {selectedProduct.usage[lang]}
                      </p>
                    </div>
                  )}
                </div>

                <button 
                  onClick={() => {
                    addToCart(selectedProduct);
                    setSelectedProduct(null);
                  }}
                  className="w-full mt-8 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-600/20"
                >
                  <ShoppingBag size={20} />
                  {t[lang].addToCart}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 z-[110] bg-black/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-[120] shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-brand-100 flex items-center justify-between">
                <h2 className="text-xl font-bold text-brand-900 flex items-center gap-2">
                  <ShoppingBag size={24} className="text-brand-600" />
                  {t[lang].cart}
                </h2>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-brand-50 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-brand-400">
                    <ShoppingBag size={64} strokeWidth={1} className="mb-4" />
                    <p>{t[lang].emptyCart}</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cart.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name[lang]} 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-brand-900 leading-tight mb-1">
                            {item.name[lang]}
                          </h4>
                          <p className="text-xs text-brand-500 mb-2">{item.size}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 bg-brand-50 rounded-lg px-2 py-1">
                              <button 
                                onClick={() => updateQuantity(item.id, -1)}
                                className="p-1 hover:text-brand-600 transition-colors"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, 1)}
                                className="p-1 hover:text-brand-600 transition-colors"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                            <span className="font-bold text-brand-800">₹{item.price * item.quantity}</span>
                          </div>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-brand-300 hover:text-red-500 transition-colors"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 border-t border-brand-100 bg-brand-50">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-brand-600 font-medium">{t[lang].total}</span>
                    <span className="text-2xl font-bold text-brand-900">₹{cartTotal}</span>
                  </div>
                  <button 
                    onClick={() => {
                      const message = encodeURIComponent(`Hello! I would like to order:\n${cart.map(i => `- ${i.name[lang]} (${i.size}) x ${i.quantity}`).join('\n')}\nTotal: ₹${cartTotal}`);
                      window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
                    }}
                    className="w-full py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-2xl font-bold transition-all shadow-lg shadow-brand-600/20 flex items-center justify-center gap-2"
                  >
                    {t[lang].checkout}
                    <ArrowRight size={20} />
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/918190942026" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[90] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/></svg>
      </a>
    </div>
  );
}
