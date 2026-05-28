"use client";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function MyProfilePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  if (isPending) return <div className="min-h-screen flex items-center justify-center"><span className="loading loading-spinner loading-lg text-orange-500"></span></div>;
  if (!session) { router.push("/login"); return null; }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-5">
      <div className="bg-white p-8 rounded-2xl shadow-md border border-orange-100 max-w-sm w-full text-center space-y-4 animate__animated animate__fadeIn">
        <img src={session.user.image || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150"} alt="Avatar" className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-orange-400 p-1" />
        <h2 className="text-2xl font-black text-gray-800">{session.user.name}</h2>
        <p className="text-gray-500 text-sm break-all">{session.user.email}</p>
        
        {/* ⚙️ এই বাটনে ক্লিক করলে আলাদা আপডেট রাউটে নিয়ে যাবে */}
        <Link href="/my-profile/update">
          <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2.5 rounded-xl font-bold transition">
            Update Information ⚙️
          </button>
        </Link>
      </div>
    </div>
  );
}