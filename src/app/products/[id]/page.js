"use client";
import { useSession } from "@/lib/auth-client";
import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";
import 'animate.css';

export default function ProductDetailsPage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const { id } = useParams();

  // 🔒 লগইন না থাকলে কারেন্ট ইউআরএল মনে রেখে লগইন পেজে পাঠানো
  useEffect(() => {
    if (!isPending && !session) {
      router.push(`/login?callbackUrl=/products/${id}`);
    }
  }, [session, isPending, router, id]);

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <span className="loading loading-spinner loading-lg text-orange-500"></span>
      </div>
    );
  }

  if (!session) return null;

  const allProducts = [
    { "id": 1, "name": "UV Protection Sunglasses", "brand": "SunShade", "price": 15, "rating": 4.7, "category": "Accessories", "stock": 10, "description": "Stylish UV protection sunglasses perfect for summer outings.", "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=500" },
    { "id": 2, "name": "Coconut Hydrating Sunscreen", "brand": "SkinGlow", "price": 22, "rating": 4.9, "category": "Skincare", "stock": 15, "description": "Broad-spectrum SPF 50 sunscreen infused with natural coconut water.", "image": "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=500" },
    { "id": 3, "name": "Tropical Summer Beach Shirt", "brand": "Breeze", "price": 28, "rating": 4.5, "category": "Clothing", "stock": 8, "description": "Lightweight and breathable cotton shirt with vibrant tropical prints.", "image": "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=500" },
    { "id": 4, "name": "Waterproof Beach Tote Bag", "brand": "OceanPack", "price": 28, "rating": 4.6, "category": "Accessories", "stock": 12, "description": "Spacious and durable tote bag to carry all your beach essentials safely.", "image": "https://images.unsplash.com/photo-1622560480654-d96214fdc887?q=80&w=500&auto=format&fit=crop" },
    { "id": 5, "name": "Insulated Stainless Water Bottle", "brand": "HydroChill", "price": 25, "rating": 4.8, "category": "Essentials", "stock": 20, "description": "Keeps your drinks ice-cold up to 24 hours even in hot summer days.", "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=500" },
    { "id": 6, "name": "Wide Brim Straw Sun Hat", "brand": "Sombrero", "price": 19, "rating": 4.4, "category": "Clothing", "stock": 5, "description": "Classic woven straw hat offering excellent sun shade for face and neck.", "image": "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?q=80&w=500" }
  ];

  const product = allProducts.find((p) => p.id === parseInt(id));

  if (!product) return <div className="text-center py-20 text-red-500 font-bold">Product Not Found!</div>;

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-5 animate__animated animate__fadeIn">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-orange-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-xl shadow-sm" />
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex gap-2">
                <span className="badge bg-orange-50 text-orange-600 font-bold border-none text-xs uppercase px-2.5 py-1">{product.brand}</span>
                <span className="badge bg-gray-100 text-gray-600 font-medium border-none text-xs px-2.5 py-1">{product.category}</span>
              </div>
              <h1 className="text-3xl font-black text-gray-800 mt-3">{product.name}</h1>
              <div className="flex items-center gap-4 mt-3">
                <span className="text-sm font-bold text-gray-500">⭐ {product.rating}</span>
                <span className="text-sm font-semibold text-gray-400">Stock: {product.stock} left</span>
              </div>
              <p className="text-3xl font-black text-gray-900 mt-4">${product.price}</p>
              <p className="text-gray-600 mt-5 text-sm leading-relaxed">{product.description}</p>
            </div>
            <button className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-bold transition shadow-md">
              Add To Cart 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}