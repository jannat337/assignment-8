"use client";
import { useState } from "react";
import { signIn } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  // 🔄 আগের পেজের ইউআরএল চেক করা (না থাকলে হোম পেজ '/')
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const { data, error: authError } = await signIn.email({
      email,
      password,
    });

    if (authError) {
      setError(authError.message || "Invalid email or password.");
    } else {
      // ✅ লগইন সফল হলে আগের পেজে (Redirect Back) ফেরত পাঠানো হচ্ছে
      router.push(callbackUrl);
    }
  };

  const handleGoogleLogin = async () => {
    await signIn.social({
      provider: "google",
      callbackURL: callbackUrl, // ✅ গুগলের ক্ষেত্রেও আগের পেজে ফেরত যাবে
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-5">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full border border-orange-100 animate__animated animate__fadeIn">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Welcome Back ☀️</h2>
        
        {error && <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm mb-4 font-medium text-center">{error}</div>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-gray-600 block mb-1">Email Address</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-orange-400 text-gray-800" placeholder="example@mail.com" />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-600 block mb-1">Password</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-orange-400 text-gray-800" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2.5 rounded-lg font-bold transition shadow-sm">Login</button>
        </form>

        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-xs uppercase">Or connect with</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        <button onClick={handleGoogleLogin} className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition">
          <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#EA4335" d="M12.24 10.285V14.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l3.227-3.102C18.445 2.025 15.605 1 12.24 1V1c-6.075 0-11 4.925-11 11s4.925 11 11 11c6.34 0 10.556-4.43 10.556-10.73 0-.726-.077-1.282-.175-1.685H12.24z"/></svg>
          Google
        </button>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account? <Link href="/register" className="text-orange-500 font-bold hover:underline">Register</Link>
        </p>
      </div>
    </div>
  );
}