"use client";

import { useRouter } from "next/navigation";

const MeetTheMakerButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/developer")}
      className="px-4 py-2 sm:px-6 sm:py-3 mt-4 sm:mt-0 sm:ml-4 w-full sm:w-auto bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-colors"
    >
      Mind Behind TaskFlow
    </button>
  );
};

export default MeetTheMakerButton;
