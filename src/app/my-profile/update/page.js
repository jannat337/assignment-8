"use client";
import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function UpdateInfoPage() {
  const { data: session } = authClient.useSession();
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [status, setStatus] = useState({ type: "", msg: "" });
  const router = useRouter();

  useEffect(() => {
    if (session?.user) {
      setName(session.user.name || "");
      setPhotoUrl(session.user.image || "");
    }
  }, [session]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setStatus({ type: "", msg: "" });

    const { error } = await authClient.updateUser({ 
      name, 
      image: photoUrl 
    });

    if (error) {
      setStatus({ type: "error", msg: error.message });
    } else {
      setStatus({ type: "success", msg: "Information updated! 🎉" });
      setTimeout(() => { router.push("/my-profile"); }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-5">
      <form onSubmit={handleUpdate} className="bg-white p-8 rounded-2xl shadow-md border border-orange-100 max-w-md w-full space-y-4 animate__animated animate__zoomIn">
        <h3 className="text-2xl font-black text-gray-800 text-center">Edit Profile ⚙️</h3>
        
        {status.msg && (
          <div className={`p-3 rounded-xl text-sm font-bold text-center ${status.type === "success" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-500"}`}>
            {status.msg}
          </div>
        )}
        
        <div>
          <label className="text-sm font-semibold text-gray-600 block mb-1">Name</label>
          <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 border rounded-xl focus:outline-orange-400 text-gray-800" />
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-600 block mb-1">Photo URL</label>
          <input type="url" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} className="w-full px-4 py-2 border rounded-xl focus:outline-orange-400 text-gray-800" />
        </div>
        
        <button type="submit" className="w-full bg-orange-500 text-white py-2.5 rounded-xl font-bold hover:bg-orange-600 transition">
          Update Information
        </button>
      </form>
    </div>
  );
}