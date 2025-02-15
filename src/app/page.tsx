"use client";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* ✅ Navbar */}
      <nav className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold">Todo List App</h1>
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

      {/* ✅ Hero Section */}
      <header className="flex-1 flex flex-col justify-center items-center text-center p-10">
        <h2 className="text-4xl font-bold text-gray-800">Welcome to Todo List App</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl">
          This is not just another to-do list. Its a project built with **dedication, passion, and countless hours** 
          of hard work. From backend to frontend, every part of this app is crafted to be **fast, secure, and scalable**.
        </p>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl">
          Managing tasks has never been easier. Sign up today and start organizing your life with a seamless experience.
        </p>
        <div className="mt-6">
          <button
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700"
            onClick={() => router.push("/signup")}
          >
            Get Started
          </button>
        </div>
      </header>

      {/* ✅ Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-semibold text-center text-gray-800">Project Features</h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-700">🚀 Fullstack Architecture</h4>
              <p className="text-gray-600 mt-2">
                Built using **Next.js (Frontend) & Node.js with Prisma (Backend)**. Hosted on **Railway** & **Vercel**.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-700">🔒 Secure Authentication</h4>
              <p className="text-gray-600 mt-2">
                Uses **JWT Authentication**, **MFA**, and **Role-Based Access Control (RBAC)** for high security.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-700">⚡ State Management</h4>
              <p className="text-gray-600 mt-2">
                Powered by **Redux Toolkit**, ensuring smooth and predictable state management.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-700">☁️ Cloud Deployment</h4>
              <p className="text-gray-600 mt-2">
                The backend is deployed on **Railway** and the frontend on **Vercel**, making it accessible globally.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-700">📋 Task Management</h4>
              <p className="text-gray-600 mt-2">
                Create, edit, delete, and manage tasks with a simple and intuitive UI.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-700">💡 Future Plans</h4>
              <p className="text-gray-600 mt-2">
                Planning to expand this into **AuthFlow SaaS** & **AI-powered automation**.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Footer */}
      <footer className="bg-blue-600 text-white text-center py-4">
        <p className="text-sm">© 2025 Todo List App. Built with ❤️ and dedication.</p>
      </footer>
    </div>
  );
};

export default HomePage;
