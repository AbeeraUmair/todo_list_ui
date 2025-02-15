"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const NavBar = () => {
    const router = useRouter();
  return (
    <div>
       {/* ✅ Navbar */}
       <nav className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6">
         <Link href={"/"}><h1 className="text-2xl font-bold">TaskFlow</h1>
         </Link> 
         
          <div className="space-x-4">
            <button
              className="px-4 py-2 bg-white text-blue-600 rounded-md hover:bg-gray-200"
              onClick={() => router.push("/login")}
            >
              Login
            </button>
            <button
              className="px-4 py-2 bg-white text-blue-600 rounded-md hover:bg-gray-200"
              onClick={() => router.push("/signup")}
            >
              Signup
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
