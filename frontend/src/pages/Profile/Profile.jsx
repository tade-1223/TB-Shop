import { useEffect, useState } from "react";
import { getCurrentUser } from "../../services/authService";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadUser() {
      try {
        const data = await getCurrentUser();
        setUser(data);
      } catch (err) {
        console.error(err);
      }
    }

    loadUser();
  }, []);

  if (!user) {
    return (
      <div className="text-center mt-20 text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">

      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-10">

        <div className="flex items-center gap-6">

          <div className="w-24 h-24 rounded-full bg-green-600 text-white flex items-center justify-center text-4xl font-bold">
            {user.first_name[0]}
          </div>

          <div>
            <h1 className="text-3xl font-bold">
              {user.first_name} {user.last_name}
            </h1>

            <p className="text-gray-500">
              Ethiora User
            </p>
          </div>

        </div>

        <div className="mt-10 space-y-6">

          <div>
            <h2 className="font-semibold">
              Email
            </h2>

            <p className="text-gray-600">
              {user.email}
            </p>
          </div>

          <div>
            <h2 className="font-semibold">
              Phone
            </h2>

            <p className="text-gray-600">
              {user.phone}
            </p>
          </div>

          <div>
            <h2 className="font-semibold">
              User ID
            </h2>

            <p className="text-gray-600">
              {user.id}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;