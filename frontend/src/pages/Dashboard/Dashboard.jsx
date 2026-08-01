import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../services/authService";

function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const data = await getCurrentUser();
        console.log("USER:", data);
        setUser(data);
      } catch (err) {
        console.log(err);

        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    loadUser();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (!user) {
    return <h2 className="text-center mt-20">Loading...</h2>;
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">

      <h1 className="text-4xl font-bold text-green-700">
        Welcome {user.first_name} 🎉
      </h1>

      <p className="mt-4 text-gray-600">
        {user.email}
      </p>

      <button
        onClick={logout}
        className="mt-8 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg"
      >
        Logout
      </button>

    </div>
  );
}

export default Dashboard;