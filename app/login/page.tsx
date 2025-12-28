import LoginForm from "../../components/auth/LoginForm";

export default function Login() {
  return (
    <div className="flex min-h-screen font-sans">
      {/* LEFT PANEL */}
      <div className="hidden md:flex md:w-1/2 bg-blue-800 text-white flex-col justify-center items-center p-12 lg:p-16">
        <img src="/logo.png" alt="UniGuide Logo" className="w-120 mb-50" />
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center bg-white p-6 sm:p-8 md:p-10">
        <div className="w-full max-w-md bg-white text-black rounded-2xl p-8 sm:p-10 md:p-12 shadow-xl">
          <LoginForm/>
        </div>
      </div>
    </div>
  );
}
