import { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../../services/authService";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiLock,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function validate() {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (formData.password.length < 8) {
      newErrors.password =
        "Password must be at least 8 characters.";
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword =
        "Passwords do not match.";
    }

    return newErrors;
  }

  const handleSubmit = async (e) => {
  e.preventDefault();

  const validationErrors = validate();

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  setErrors({});

  try {
    const response = await registerUser({
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
    });

    console.log(response);

    alert("Registration Successful!");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });

  } catch (error) {
    console.error(error);

    if (error.response) {
      alert(error.response.data.detail);
    } else {
      alert("Server Error");
    }
  }
};

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4 py-10">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-lg p-8">

        <h1 className="text-4xl font-bold text-center text-green-700">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Join Ethiora and start buying or selling products.
        </p>

        <form
          className="mt-8 space-y-5"
          onSubmit={handleSubmit}
        >

          {/* First Name */}
          <div>
            <label className="font-medium">
              First Name
            </label>

            <div className="flex items-center border rounded-lg mt-2 px-3">
              <FiUser className="text-gray-500 mr-3" />

              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full p-3 outline-none"
              />
            </div>

            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="font-medium">
              Last Name
            </label>

            <div className="flex items-center border rounded-lg mt-2 px-3">
              <FiUser className="text-gray-500 mr-3" />

              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full p-3 outline-none"
              />
            </div>

            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="font-medium">
              Email
            </label>

            <div className="flex items-center border rounded-lg mt-2 px-3">
              <FiMail className="text-gray-500 mr-3" />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full p-3 outline-none"
              />
            </div>

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="font-medium">
              Phone Number
            </label>

            <div className="flex items-center border rounded-lg mt-2 px-3">
              <FiPhone className="text-gray-500 mr-3" />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+251 9XXXXXXXX"
                className="w-full p-3 outline-none"
              />
            </div>

            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="font-medium">
              Password
            </label>

            <div className="flex items-center border rounded-lg mt-2 px-3">
              <FiLock className="text-gray-500 mr-3" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full p-3 outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <FiEyeOff />
                ) : (
                  <FiEye />
                )}
              </button>
            </div>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="font-medium">
              Confirm Password
            </label>

            <div className="flex items-center border rounded-lg mt-2 px-3">
              <FiLock className="text-gray-500 mr-3" />

              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full p-3 outline-none"
              />
            </div>

            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2">
            <input type="checkbox" />

            <p className="text-sm text-gray-600">
              I agree to the{" "}
              <span className="text-green-700 font-medium">
                Terms & Conditions
              </span>{" "}
              and{" "}
              <span className="text-green-700 font-medium">
                Privacy Policy
              </span>.
            </p>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold transition"
          >
            Create Account
          </button>

        </form>

        <p className="text-center mt-8">
          Already have an account?

          <Link
            to="/login"
            className="ml-2 text-green-700 font-semibold"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;