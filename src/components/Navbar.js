"use client";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const { data: session, isPending } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = "/login";
        },
      },
    });
  };

  return (
    <nav className="bg-white border-b border-gray-100 py-4 px-6 flex justify-between items-center shadow-sm">
      <div className="flex items-center gap-2">
        <Link href="/" className="text-2xl font-black text-orange-500 tracking-tight">
          SunCart ☀️
        </Link>
      </div>

      <div className="flex items-center gap-6 font-semibold text-gray-600">
        <Link href="/" className="hover:text-orange-500 transition">Home</Link>
        <Link href="/products" className="hover:text-orange-500 transition">Products</Link>
        <Link href="/my-profile" className="hover:text-orange-500 transition">My Profile</Link>
      </div>

      <div className="flex items-center gap-4">
        {isPending ? (
          <span className="loading loading-spinner loading-sm text-orange-500"></span>
        ) : session ? (
          <div className="flex items-center gap-3">
            <img 
              src={session.user.image || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150"} 
              alt="User" 
              className="w-9 h-9 rounded-full object-cover border-2 border-orange-500"
            />
            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-bold transition shadow-sm">
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link href="/login" className="text-gray-700 hover:text-orange-500 px-4 py-2 text-sm font-bold transition">
              Login
            </Link>
            <Link href="/register" className="bg-orange-500 text-white hover:bg-orange-600 px-4 py-2 rounded-xl text-sm font-bold transition shadow-sm">
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}