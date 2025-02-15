import { useRouter } from "next/navigation";

const MeetTheMakerButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/developer")}
      className="px-6 py-3 ml-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700"
      >
Mind Behind TaskFlow
    </button>
  );
};

export default MeetTheMakerButton;
