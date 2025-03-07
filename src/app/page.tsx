"use client"

import { useRouter } from "next/navigation"
import MeetTheMakerButton from "../app/components/MeetTheMakerButton"

const HomePage = () => {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center min-h-screen px-4 py-16 bg-gray-100 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Welcome to TaskFlow</h1>
        <p className="text-base sm:text-lg text-gray-700 mb-6">
          A simple and efficient way to manage your daily tasks.
        </p>
        <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-3xl">
          This is not just another to-do list. Its a project built with{" "}
          <strong>dedication, passion, and countless hours</strong>
          of hard work. From backend to frontend, every part of this app is crafted to be{" "}
          <strong>fast, secure, and scalable</strong>.
        </p>
        <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-3xl">
          Managing tasks has never been easier. Sign up today and start organizing your life with a seamless experience.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center w-full sm:w-auto">
          <button
            className="px-4 py-2 sm:px-6 sm:py-3 w-full sm:w-auto bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-colors"
            onClick={() => router.push("/todos")}
          >
            Get Started
          </button>
          <MeetTheMakerButton />
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h3 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800">Project Features</h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-4 sm:p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-center text-lg sm:text-xl font-semibold text-gray-700">🚀 Fullstack Architecture</h4>
              <p className="text-gray-600 text-center mt-2 text-sm sm:text-base">
                Built using <strong>Next.js (Frontend) & Node.js with Prisma (Backend)</strong>. Hosted on{" "}
                <strong>Railway</strong> & <strong>Vercel</strong>.
              </p>
            </div>
            <div className="p-4 sm:p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-center text-lg sm:text-xl font-semibold text-gray-700">🔒 Secure Authentication</h4>
              <p className="text-gray-600 text-center mt-2 text-sm sm:text-base">
                Uses <strong>JWT Authentication</strong>, <strong>MFA</strong>, and{" "}
                <strong>Role-Based Access Control (RBAC)</strong> for high security.
              </p>
            </div>
            <div className="p-4 sm:p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-center text-lg sm:text-xl font-semibold text-gray-700">⚡ State Management</h4>
              <p className="text-gray-600 text-center mt-2 text-sm sm:text-base">
                Powered by <strong>Redux Toolkit</strong>, ensuring smooth and predictable state management.
              </p>
            </div>
            <div className="p-4 sm:p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-center text-lg sm:text-xl font-semibold text-gray-700">☁️ Cloud Deployment</h4>
              <p className="text-gray-600 text-center mt-2 text-sm sm:text-base">
                The backend is deployed on <strong>Railway</strong> and the frontend on <strong>Vercel</strong>, making
                it accessible globally.
              </p>
            </div>
            <div className="p-4 sm:p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-center text-lg sm:text-xl font-semibold text-gray-700">📋 Task Management</h4>
              <p className="text-gray-600 text-center mt-2 text-sm sm:text-base">
                Create, edit, delete, and manage tasks with a simple and intuitive UI.
              </p>
            </div>
            <div className="p-4 sm:p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-center text-lg sm:text-xl font-semibold text-gray-700">💡 Future Plans</h4>
              <p className="text-gray-600 text-center mt-2 text-sm sm:text-base">
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
