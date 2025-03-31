import { Copy } from "lucide-react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

export default function CopyDialog({ isOpen, setIsOpen, link, icon }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    alert("Copied to clipboard!");
  };

  if (!isOpen) return null; // Don't render if not open

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={() => setIsOpen(false)} // Close when clicking outside
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <h2 className="text-xl font-base tracking-wide mb-2 heading-font">Click to visit/copy :</h2>
        <p className="text-gray-600 p-1.5 font-semibold mb-4 flex items-center gap-2 cursor-pointer normal-font">
        <FiAlertCircle className="beet-effect text-xl"/>
        Please don't mis-use this identity 
        </p>

        {/* Link Input & Copy Button */}
        <div className="flex items-center space-x-2 border p-2 rounded-lg">
          <input
            className="flex-1 text-gray-700 bg-transparent outline-none stylish-font"
            value={link}
            readOnly
          />
          <button
            onClick={handleCopy}
            className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition hover:text-2xl"
          >
            <Copy size={18}/>
          </button>
        </div>

        {/* Close Button */}
        <div className="flex justify-between mt-4">
          <a href={link} className="px-4 py-2 border-2 border-gray-700 rounded-lg hover:text-gray-500 transition flex justify-center items-center text-2xl font-black text-gray-700" target="_blank">{icon}</a>
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition flex items-center justify-between gap-1 cursor-pointer"
          >
            <IoClose className="text-xl"/>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
