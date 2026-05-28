import HeroSlider from "@/components/HeroSlider";
import Link from "next/link";
import 'animate.css';

export default function HomePage() {
  const popularProducts = [
    { "id": 1, "name": "UV Protection Sunglasses", "brand": "SunShade", "price": 15, "rating": 4.7, "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=500" },
    { "id": 2, "name": "Coconut Hydrating Sunscreen", "brand": "SkinGlow", "price": 22, "rating": 4.9, "image": "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=500" },
    { "id": 3, "name": "Tropical Summer Beach Shirt", "brand": "Breeze", "price": 28, "rating": 4.5, "image": "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=500" }
  ];

  return (
    <div className="bg-white min-h-screen space-y-20 pb-20">

      {/* 🌅 ১. Hero Section - Image Slider */}
      <section className="px-6 pt-6">
        <HeroSlider />
      </section>

      {/* 🔥 ২. Popular Products Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-3xl font-black text-gray-800 tracking-tight">Popular Products</h2>
          <p className="text-gray-500 text-sm">Handpicked top seasonal items just for you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularProducts.map((product) => (
            <div key={product.id} className="card bg-white border border-gray-100 shadow-sm rounded-2xl overflow-hidden hover:shadow-md transition duration-300">
              <figure className="relative h-64 w-full bg-gray-50">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </figure>
              <div className="card-body p-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">{product.brand}</span>
                  <span className="text-sm font-bold text-gray-600">⭐ {product.rating}</span>
                </div>
                <h3 className="card-title text-lg font-bold text-gray-800 line-clamp-1">{product.name}</h3>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-2xl font-black text-gray-900">${product.price}</span>
                  <Link href={`/products/${product.id}`} className="btn btn-sm bg-orange-500 hover:bg-orange-600 text-white font-bold border-none rounded-xl px-4 py-2">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ➕ ৩. Summer Care Tips */}
      <section className="bg-orange-50/60 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-3xl font-black text-gray-800 tracking-tight">Summer Care Tips ☀️</h2>
            <p className="text-gray-500 text-sm">Stay fresh, glowing, and hydrated during the hot seasons</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-orange-100 space-y-3 shadow-sm">
              <div className="text-3xl">🧴</div>
              <h4 className="text-lg font-bold text-gray-800">Never Skip Sunscreen</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Apply broad-spectrum SPF 50+ at least 15 minutes before stepping out into the bright summer sun.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-orange-100 space-y-3 shadow-sm">
              <div className="text-3xl">💧</div>
              <h4 className="text-lg font-bold text-gray-800">Hydrate Constantly</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Drink at least 3-4 liters of water daily. Keep an insulated water bottle nearby to maintain crisp freshness.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-orange-100 space-y-3 shadow-sm">
              <div className="text-3xl">🕶️</div>
              <h4 className="text-lg font-bold text-gray-800">Protect Your Eyes</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Wear verified UV-protection sunglasses to shield your eyes from harmful and straining solar rays.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ➕ ৪. Top Brands */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-3xl font-black text-gray-800 tracking-tight">Top Brands</h2>
          <p className="text-gray-500 text-sm">Premium static brands delivering quality summer wear</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gray-50 hover:bg-orange-50 border border-gray-100 p-8 rounded-2xl text-center font-black text-xl text-gray-400 hover:text-orange-500 transition duration-300">
            SUNSHADE
          </div>
          <div className="bg-gray-50 hover:bg-orange-50 border border-gray-100 p-8 rounded-2xl text-center font-black text-xl text-gray-400 hover:text-orange-500 transition duration-300">
            SKINGLOW
          </div>
          <div className="bg-gray-50 hover:bg-orange-50 border border-gray-100 p-8 rounded-2xl text-center font-black text-xl text-gray-400 hover:text-orange-500 transition duration-300">
            BREEZE
          </div>
          <div className="bg-gray-50 hover:bg-orange-50 border border-gray-100 p-8 rounded-2xl text-center font-black text-xl text-gray-400 hover:text-orange-500 transition duration-300">
            HYDROCHILL
          </div>
        </div>
      </section>

    </div>
  );
}