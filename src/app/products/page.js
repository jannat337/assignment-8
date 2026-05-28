import Link from "next/link";

export default function ProductsPage() {
  // আপনার দেওয়া সবকটি ইমেজ লিংক এবং ডাটা একদম হুবহু ঠিক রাখা হয়েছে
  const allProducts = [
    { "id": 1, "name": "UV Protection Sunglasses", "brand": "SunShade", "price": 15, "rating": 4.7, "category": "Accessories", "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=500" },
    { "id": 2, "name": "Coconut Hydrating Sunscreen", "brand": "SkinGlow", "price": 22, "rating": 4.9, "category": "Skincare", "image": "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=500" },
    { "id": 3, "name": "Tropical Summer Beach Shirt", "brand": "Breeze", "price": 28, "rating": 4.5, "category": "Clothing", "image": "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=500" },
    { "id": 4, "name": "Waterproof Beach Tote Bag", "brand": "OceanPack", "price": 28, "rating": 4.6, "category": "Accessories", "image": "https://images.unsplash.com/photo-1622560480654-d96214fdc887?q=80&w=500&auto=format&fit=crop" },
    { "id": 5, "name": "Insulated Stainless Water Bottle", "brand": "HydroChill", "price": 25, "rating": 4.8, "category": "Essentials", "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=500" },
    { "id": 6, "name": "Wide Brim Straw Sun Hat", "brand": "Sombrero", "price": 19, "rating": 4.4, "category": "Clothing", "image": "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?q=80&w=500" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-5">
      <div className="max-w-6xl mx-auto">
        
        {/* টাইটেল অ্যানিমেশন */}
        <div className="text-center mb-12 animate__animated animate__fadeIn">
          <h1 className="text-4xl font-extrabold text-gray-800">All Summer Collection 🌊</h1>
          <p className="text-gray-500 mt-2">Explore our premium and handpicked summer essentials</p>
        </div>

        {/* ৩টি কলামের রেস্পন্সিভ গ্রিড লেআউট */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {allProducts.map((product) => (
            /* প্রতিটি কার্ডের জন্য fadeInUp অ্যানিমেশন এবং হোভার ইফেক্ট */
            <div key={product.id} className="bg-white rounded-xl shadow-md card-compact overflow-hidden p-5 hover:shadow-xl transition transform hover:-translate-y-1 duration-300 animate__animated animate__fadeInUp">
              
              {/* প্রোডাক্ট ইমেজ */}
              <img src={product.image} alt={product.name} className="w-full h-56 object-cover rounded-lg" />
              
              {/* ব্র্যান্ড ও ক্যাটাগরি ট্যাগ */}
              <div className="flex gap-2 mt-3">
                <span className="badge badge-sm bg-orange-50 text-orange-600 font-bold border-none">{product.brand}</span>
                <span className="badge badge-sm bg-gray-100 text-gray-600 font-medium border-none">{product.category}</span>
              </div>

              {/* প্রোডাক্টের নাম */}
              <h3 className="text-lg font-bold text-gray-800 mt-2 h-14 line-clamp-2">{product.name}</h3>
              
              {/* রেটিং ও প্রাইস সেকশন */}
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm font-semibold text-gray-500">⭐ {product.rating}</span>
                <span className="text-2xl font-black text-gray-900">${product.price}</span>
              </div>
              
              {/* ডাইনামিক রাউট লিংক সংবলিত বাটন */}
              <Link href={`/products/${product.id}`}>
                <button className="w-full mt-4 bg-orange-500 text-white py-2.5 rounded-xl font-bold hover:bg-orange-600 transition shadow-sm">
                  Buy Now
                </button>
              </Link>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}