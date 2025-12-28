import RegisterForm from "../../components/auth/RegisterForm";

export default function Register() {
  return (
    <div className="flex min-h-screen font-sans">
      {/* LEFT PANEL */}
      <div className="hidden md:flex md:w-1/2 bg-blue-800 text-white flex-col justify-center items-center p-12 lg:p-16">
        <img src="/logo.png" alt="UniGuide Logo" className="w-120 mb-50" />
      </div>

      {/* RIGHT PANEL */}
      <div className="w-full md:w-1/2 flex justify-center items-center bg-white p-6 sm:p-8 md:p-10">
        {/* Single card wrapper */}
        <div className="w-full max-w-md bg-white text-black rounded-2xl p-8 sm:p-10 md:p-12 shadow-xl">
          <Register />
        </div>
      </div>
    </div>
  );
}
