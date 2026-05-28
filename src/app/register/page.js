"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await authClient.signUp.email({
        email,
        password,
        name,
        image: image || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150",
      });

      if (error) {
        setError(error.message || "Registration failed.");
      } else {
        router.push("/login");
      }
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-5">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full border border-orange-100">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Create Account ☀️
        </h2>

        {error && (
          <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-gray-600 block mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-gray-800"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-600 block mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-gray-800"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-600 block mb-1">
              Photo URL
            </label>
            <input
              type="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-gray-800"
              placeholder="https://example.com/avatar.png"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-600 block mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-gray-800"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 text-white py-2.5 rounded-lg font-bold hover:bg-orange-600 transition disabled:bg-gray-300"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-4">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Google Button */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2.5 rounded-lg font-bold text-gray-700 hover:bg-gray-50 transition"
        >
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-orange-500 font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}