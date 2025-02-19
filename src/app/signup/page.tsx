"use client";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/slices/authSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange =  (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("/api/signup", formData);
      dispatch(setToken(response.data.token));
      localStorage.setItem("token", response.data.token);
      toast.success("Signup successful!");
      router.push("/login");
    } catch (error) {
      console.error(error);
      toast.error("Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 bg-white p-6 rounded-lg shadow-md">
   
        <form onSubmit={handleSignup}>
          <input className="p-2 border border-gray-300 rounded-lg mb-2 w-80 flex justify-self-center" type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input className="p-2 border border-gray-300 rounded-lg mb-2 w-80 flex justify-self-center" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input className="p-2 border border-gray-300 rounded-lg mb-2 w-80 flex justify-self-center" autoComplete="current-password" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required /><br/>
          <button className="px-6 py-2 text-white flex justify-self-center bg-blue-600 rounded-lg" type="submit" disabled={loading}>
            {loading ? "Signing up..." : "Signup"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
