"use client";
import { useRouter } from "next/navigation";
import MeetTheMakerButton from "../app/components/MeetTheMakerButton";

const HomePage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">

      {/* ✅ Hero Section */}

      <header className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to TaskFlow</h1>
      <p className="text-lg text-gray-700 mb-6">A simple and efficient way to manage your daily tasks.</p>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl">
          This is not just another to-do list. Its a project built with <strong>dedication, passion, and countless hours</strong> 
          of hard work. From backend to frontend, every part of this app is crafted to be <strong>fast, secure, and scalable</strong>.
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
          <MeetTheMakerButton />
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
                Built using <strong>Next.js (Frontend) & Node.js with Prisma (Backend)</strong>. Hosted on <strong>Railway</strong> & <strong>Vercel</strong>.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-700">🔒 Secure Authentication</h4>
              <p className="text-gray-600 mt-2">
                Uses <strong>JWT Authentication</strong>, <strong>MFA</strong>, and <strong>Role-Based Access Control (RBAC)</strong> for high security.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-700">⚡ State Management</h4>
              <p className="text-gray-600 mt-2">
                Powered by <strong>Redux Toolkit</strong>, ensuring smooth and predictable state management.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-700">☁️ Cloud Deployment</h4>
              <p className="text-gray-600 mt-2">
                The backend is deployed on <strong>Railway</strong> and the frontend on <strong>Vercel</strong>, making it accessible globally.
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
                Stay tuned for more updates and features in the future like Reminders, Collaboration, and Tags.
              </p>
            </div>
          </div>
        </div>
      </section>
     
    </div>
  );
};

export default HomePage;
