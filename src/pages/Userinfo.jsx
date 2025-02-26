import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "Lorem ipsum dolor sit amet.",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile saved successfully!");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="card-header bg-primary text-white text-center">
          <h2>User Profile</h2>
        </div>
        <div className="card-body">
          {isEditing ? (
            <div>
              <div className="mb-3">
                <label className="form-label">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Bio:</label>
                <textarea
                  name="bio"
                  value={user.bio}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <button onClick={handleSave} className="btn btn-success">
                Save
              </button>
            </div>
          ) : (
            <div>
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Bio:</strong> {user.bio}
              </p>
              <button
                onClick={() => setIsEditing(true)}
                className="btn btn-warning mt-3"
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
