"use client";

import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";
import Link from "next/link";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowLeft,
  Package,
  CreditCard,
} from "lucide-react";
import { toast } from "react-toastify";

const CartPage = () => {
  const { items, removeItem, updateQuantity } = useCartStore();

  const subtotal = items.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleRemoveItem = (id: number, title: string) => {
    removeItem(id);
    toast.success(`${title} removed from cart`, {
      position: "bottom-right",
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
        <div className="max-w-md w-full text-center">
          <div className="relative mx-auto mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center">
              <ShoppingBag
                className="h-16 w-16 text-primary"
                strokeWidth={1.5}
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-3">Your cart is empty</h2>
          <p className="text-foreground/60 mb-8 text-lg">
            Discover amazing products and start shopping!
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="h-5 w-5" />
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen md:py-8 lg:py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-4 lg:mb-8">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors mb-4 text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Continue Shopping
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className=" text-xl lg:text-4xl font-bold mb-2">
                Shopping Cart
              </h1>
              <p className="text-foreground/60 text-sm lg:text-lg">
                {items.length} {items.length === 1 ? "item" : "items"}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-8 space-y-4">
            {items.map((product) => (
              <div
                key={product.id}
                className="group bg-card-bg rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Product Image */}
                  <Link
                    href={`/products/${product.id}`}
                    className="relative w-full sm:w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300"
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain p-3"
                    />
                  </Link>

                  {/* Product Info */}
                  <div className="flex-grow flex flex-col justify-between min-w-0">
                    <div>
                      <Link href={`/products/${product.id}`}>
                        <h3 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-primary transition-colors">
                          {product.title}
                        </h3>
                      </Link>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary capitalize">
                          {product.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-center gap-6">
                        {/* Price */}
                        <div>
                          <p className="text-sm text-foreground/60 mb-1">
                            Price
                          </p>
                          <p className="text-2xl font-bold text-primary">
                            ${product.price.toFixed(2)}
                          </p>
                        </div>

                        {/* Quantity Controls */}
                        <div>
                          <p className="text-sm text-foreground/60 mb-1">
                            Quantity
                          </p>
                          <div className="flex items-center gap-2 bg-secondary/50 rounded-xl p-1 border border-border">
                            <button
                              onClick={() =>
                                updateQuantity(product.id, product.quantity - 1)
                              }
                              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-primary/10 hover:text-primary transition-all"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-12 text-center font-bold text-base">
                              {product.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(product.id, product.quantity + 1)
                              }
                              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-primary/10 hover:text-primary transition-all"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Subtotal & Remove */}
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-sm text-foreground/60 mb-1">
                            Subtotal
                          </p>
                          <p className="text-2xl font-bold">
                            ${(product.price * product.quantity).toFixed(2)}
                          </p>
                        </div>
                        <button
                          onClick={() =>
                            handleRemoveItem(product.id, product.title)
                          }
                          className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-red-50 dark:hover:bg-red-500/10 text-foreground/40 hover:text-red-500 transition-all"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-gradient-to-br from-card-bg to-card-bg/50 rounded-2xl p-6 border border-border sticky top-4 shadow-xl">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

              {/* Summary Items */}
              <div className="space-y-4 mb-6 pb-6 border-b border-border">
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70">
                    Subtotal ({items.length} items)
                  </span>
                  <span className="font-semibold text-lg">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70 flex items-center gap-2">
                    <Package className="h-4 w-4" />
                    Shipping
                  </span>
                  <span
                    className={`font-semibold text-lg ${
                      shipping === 0 ? "text-green-500" : ""
                    }`}
                  >
                    {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70">Tax (8%)</span>
                  <span className="font-semibold text-lg">
                    ${tax.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Free Shipping Progress */}
              {shipping > 0 && (
                <div className="mb-6 p-4 bg-primary/5 border border-primary/20 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-primary">
                      Free Shipping Progress
                    </p>
                    <p className="text-sm font-bold text-primary">
                      ${(50 - subtotal).toFixed(2)} to go
                    </p>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2 overflow-hidden mb-1">
                    <div
                      className="bg-gradient-to-r from-primary to-primary/70 h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${Math.min((subtotal / 50) * 100, 100)}%`,
                      }}
                    />
                  </div>
                </div>
              )}

              {shipping === 0 && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 rounded-xl flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Package className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-400 font-medium">
                    🎉 You qualify for free shipping!
                  </p>
                </div>
              )}

              {/* Total */}
              <div className="flex justify-between items-center mb-6 py-4 px-4 bg-primary/5 rounded-xl">
                <span className="text-xl font-bold">Total</span>
                <span className="text-3xl font-bold text-primary">
                  ${total.toFixed(2)}
                </span>
              </div>

              {/* Checkout Button */}
              <button
                style={{
                  backgroundColor: "var(--contact-btn-bg)",
                  color: "var(--contact-btn-text)",
                }}
                className="w-full flex items-center justify-center gap-3 py-4 font-bold rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-xl mb-4 group"
                onClick={() => toast.info("Checkout coming soon!")}
              >
                <CreditCard className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Proceed to Checkout
              </button>

              {/* Security badges */}
              <div className="flex items-center justify-center gap-4 text-xs text-foreground/50">
                <span className="flex items-center gap-1">
                  🔒 Secure Checkout
                </span>
                <span>•</span>
                <span>SSL Encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
