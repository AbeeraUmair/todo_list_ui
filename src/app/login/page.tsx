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

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true);

    try {
      const response = await axios.post(
        "/api/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } } // ✅ Fix: Explicit header
      );

      dispatch(setToken(response.data.token));
      localStorage.setItem("token", response.data.token);
      toast.success("Login successful!");
      router.push("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Login Error:", error.response?.data || error.message);
        toast.error(error.response?.data?.message || "Login failed");
      } else {
        console.error("Unexpected Error:", error);
        toast.error("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 bg-white p-6 rounded shadow-md">
        <form onSubmit={handleLogin}>
          <input
            className="p-2 border border-gray-300 rounded-lg mb-2 w-80 flex justify-self-center"
            type="email"
            autoComplete="username"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="p-2 border border-gray-300 rounded-lg mb-2 w-80 flex justify-self-center"
            type="password"
            autoComplete="current-password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            className="px-6 py-2 text-white flex justify-self-center bg-blue-600 rounded-lg"
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
