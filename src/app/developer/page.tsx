import Link from "next/link";
import { FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";

const DeveloperPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-center p-8">
      {/* Header */}
      <div className="bg-blue-600 text-white py-8">
        <h1 className="text-2xl font-bold">Mind Behind TaskFlow</h1>
      </div>

      {/* About Section */}
      <div className="max-w-3xl mx-auto mt-8 bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="mt-4 text-gray-700">
          Hi, Im <strong>Abeera Umair</strong>, a passionate Fullstack developer specializing in Next.js,I have expertise in UI/UX design and chatbot development, 
          and I love building seamless, scalable fullstack applications.
        </p>
      </div>

      {/* Let's Connect Section */}
      <div className="max-w-3xl mx-auto mt-8 bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-2xl font-semibold">Lets Connect!</h2>
        <p className="mt-2 text-gray-700">Follow me on social media and stay updated on my latest projects.</p>

        <div className="mt-4 flex justify-center space-x-4">
          <Link href="" target="_blank">
            <FaGithub className="text-3xl text-gray-800 hover:text-black" />
          </Link>
          <Link href="" target="_blank">
            <FaLinkedin className="text-3xl text-blue-600 hover:text-blue-700" />
          </Link>
          <Link href="" target="_blank">
            <FaGoogle className="text-3xl text-blue-400 hover:text-blue-500" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeveloperPage;
