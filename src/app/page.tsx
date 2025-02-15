"use client"
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Todo App</h1>
      <Link href="/login">
        <button className="bg-blue-500 text-white p-3 rounded mb-3 w-40">Login</button>
      </Link>
      <Link href="/signup">
        <button className="bg-green-500 text-white p-3 rounded w-40">Signup</button>
      </Link>
    </div>
  );
}
