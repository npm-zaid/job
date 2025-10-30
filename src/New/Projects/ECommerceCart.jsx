import React, { useState } from "react";
import { ShoppingCart, Trash2, X } from "lucide-react";

const ECommerceCart = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Kurti",
      price: 4999,
      img: 'https://res.cloudinary.com/dkqjqrqcn/image/upload/v1732779172/a0oefo3lcakmqnaoywzk.png',
    },
    {
      id: 2,
      name: "Jacket",
      price: 2999,
      img: "https://res.cloudinary.com/dkqjqrqcn/image/upload/v1732778854/ns7e5fsgcuijaekhqwuq.png",
    },
    {
      id: 3,
      name: "top",
      price: 1499,
      img: "https://res.cloudinary.com/dkqjqrqcn/image/upload/v1732779208/htu5cxcuf1wklmwqctnm.png",
    },
    {
      id: 4,
      name: "skirt",
      price: 899,
      img: "https://res.cloudinary.com/dkqjqrqcn/image/upload/v1732777960/rk0nsqg5b8roh0o2d5nu.png",
    },
  ];

  // ✅ Cart logic
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((item) => item.id !== id));

  const updateQty = (id, qty) =>
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, qty) } : item
      )
    );

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-gray-100 font-sans overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center p-5 bg-gray-900/70 backdrop-blur-lg shadow-lg sticky top-0 z-20 border-b border-gray-800">
        <h1 className="text-2xl font-extrabold tracking-wide text-white">
          🛒 React<span className="text-blue-400">Shop</span>
        </h1>
        <button
          onClick={() => setCartOpen(true)}
          className="relative bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full flex items-center gap-2 shadow-md transition-all"
        >
          <ShoppingCart size={20} />
          Cart
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-500 text-xs rounded-full px-2 py-0.5 shadow-lg">
              {totalItems}
            </span>
          )}
        </button>
      </header>

      {/* Product Grid */}
      <main className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-gray-800/60 border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-600/20 hover:-translate-y-1 transition-all duration-300 backdrop-blur-md"
          >
            <img
              src={p.img}
              alt={p.name}
              className="w-full h-56 object-contain transform hover:scale-105 transition-transform duration-300"
            />
            <div className="p-5 flex flex-col gap-3">
              <h3 className="font-semibold text-lg text-gray-100">{p.name}</h3>
              <p className="text-gray-400">₹{p.price}</p>
              <button
                onClick={() => addToCart(p)}
                className="mt-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 transition-all shadow-md"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </main>

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-gray-900/95 border-l border-gray-800 shadow-2xl transform transition-transform duration-3000 z-30 backdrop-blur-xl ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">Your Cart</h2>
          <button
            onClick={() => setCartOpen(false)}
            className="text-gray-400 hover:text-gray-200"
          >
            <X size={24} />
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="p-6 text-gray-500 text-center">Your cart is empty</p>
        ) : (
          <div className="p-4 flex flex-col gap-4 overflow-y-auto h-[calc(100%-160px)]">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-gray-700 pb-3"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 rounded object-cover border border-gray-700"
                />
                <div className="flex-1 px-3">
                  <h4 className="text-sm font-semibold text-gray-100">{item.name}</h4>
                  <p className="text-xs text-gray-500">₹{item.price}</p>
                </div>
                <input
                  type="number"
                  min="1"
                  value={item.qty}
                  onChange={(e) => updateQty(item.id, Number(e.target.value))}
                  className="w-12 bg-gray-800 border border-gray-700 rounded text-center text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-400"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="p-5 border-t border-gray-800 bg-gray-900/80 backdrop-blur-md">
          <h3 className="font-semibold text-lg text-white">
            Total: <span className="text-blue-400">₹{totalPrice}</span>
          </h3>
          <button
            className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2.5 rounded-md font-medium transition-all shadow-md"
            disabled={cart.length === 0}
          >
            Checkout
          </button>
        </div>
      </div>

      {/* Overlay */}
      {cartOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-20 transition-opacity"
          onClick={() => setCartOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default ECommerceCart;
