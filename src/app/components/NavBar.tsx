"use client";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { logout } from "../../redux/slices/authSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const token = useSelector((state: RootState) => state.auth.token);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    toast.success("Logged out successfully!");
    router.push("/");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">TaskFlow</Link>
      <div>
        {token ? (
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="bg-white text-blue-600 px-4 py-2 rounded-full border flex items-center"
            >
              <FaUserCircle className="text-2xl" />
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 bg-white text-black shadow-md rounded-md">
                <button
                  className="block px-4 py-2 hover:bg-gray-100 w-full"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link href="/login" className="mr-4">Login</Link>
            <Link href="/signup" className="bg-white text-blue-600 px-4 py-2 rounded">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
