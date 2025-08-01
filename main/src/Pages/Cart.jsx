import React from 'react';
import useCartStore from '../Zustand/useCartStore';
import { FaTrash } from 'react-icons/fa';

function Cart() {
  const { cart, removeFromCart, clearCart } = useCartStore();

  const calculateTotal = () =>
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-[var(--color-cream-white)] p-6 md:p-10">
      <h1
        className="text-3xl font-bold mb-6 text-center"
        style={{
          color: 'var(--color-burgundy-red)',
          fontFamily: 'var(--font-primary)',
        }}
      >
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <div className="text-center text-gray-500 mt-20 text-xl">
          Your cart is empty 🛒
        </div>
      ) : (
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white p-4 rounded-xl shadow-md"
            >
              <img src={item.image} alt="" className='w-40 h-30 rounded-md' />
              <div>
                <h2
                  className="text-lg font-semibold"
                  style={{ fontFamily: 'var(--font-secondary)' }}
                >
                  {item.name}
                </h2>
                <p className="text-sm text-gray-500">
                  ₹{item.price} x {item.quantity}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-md font-semibold text-[var(--color-burgundy-red)]">
                  ₹{item.price * item.quantity}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 transition"
                  title="Remove item"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6 text-lg font-semibold border-t pt-4">
            <span>Total:</span>
            <span className="text-[var(--color-burgundy-red)]">₹{calculateTotal()}</span>
          </div>

          <button
            onClick={clearCart}
            className="mt-4 self-end bg-[var(--color-sunset-orange)] text-white px-5 py-2 rounded-full hover:brightness-110 transition font-semibold"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
