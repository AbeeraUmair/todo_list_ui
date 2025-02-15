"use client";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/slices/authSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/login", { email, password });
      dispatch(setToken(response.data.token));
      localStorage.setItem("token", response.data.token);
      toast.success("Login successful!");
      router.push("/todos");
    } catch {
      toast.error("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 bg-white p-6 rounded shadow-md">
        <input className="p-2 border border-gray-300 rounded-lg mb-2 w-80 flex justify-self-center" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="p-2 border border-gray-300 rounded-lg mb-2 w-80 flex justify-self-center" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="px-6 py-2 text-white flex justify-self-center bg-blue-600 rounded-lg" onClick={handleLogin} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Login;
