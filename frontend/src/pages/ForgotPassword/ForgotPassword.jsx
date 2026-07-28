import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <div className="bg-white shadow-xl rounded-xl w-full max-w-md p-8">

        <h1 className="text-3xl font-bold text-center text-green-700">
          Forgot Password
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Enter your email to receive a password reset link.
        </p>

        <form className="mt-8 space-y-5">

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg p-3"
          />

          <button
            className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800"
          >
            Send Reset Link
          </button>

        </form>

        <div className="text-center mt-6">

          <Link
            to="/login"
            className="text-green-700"
          >
            Back to Login
          </Link>

        </div>

      </div>

    </div>
  );
}

export default ForgotPassword;