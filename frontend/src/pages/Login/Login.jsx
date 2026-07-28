import { Link } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";

function Login() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">

        <h1 className="text-4xl font-bold text-center text-green-700">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Sign in to continue to Ethiora
        </p>

        <form className="mt-8 space-y-5">

          <div>
            <label className="font-medium">Email</label>

            <div className="flex items-center border rounded-lg mt-2 px-3">

              <FiMail className="text-gray-500" />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 outline-none"
              />

            </div>
          </div>

          <div>

            <label className="font-medium">
              Password
            </label>

            <div className="flex items-center border rounded-lg mt-2 px-3">

              <FiLock className="text-gray-500" />

              <input
                type="password"
                placeholder="Enter password"
                className="w-full p-3 outline-none"
              />

            </div>

          </div>

          <div className="text-right">

            <Link
              to="/forgot-password"
              className="text-green-700 hover:underline"
            >
              Forgot Password?
            </Link>

          </div>

          <button
            className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold"
          >
            Login
          </button>

        </form>

        <div className="my-8 flex items-center">
          <div className="flex-1 border-t"></div>

          <span className="mx-4 text-gray-500">
            OR
          </span>

          <div className="flex-1 border-t"></div>
        </div>

        <button
          className="w-full border rounded-lg py-3 hover:bg-gray-100"
        >
          Continue with Google
        </button>

        <p className="text-center mt-8">

          Don't have an account?

          <Link
            to="/register"
            className="text-green-700 font-semibold ml-2"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;