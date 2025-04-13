import { useState } from "react";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    img: "", // Initially no image
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "Lorem ipsum dolor sit amet.",
  });

  const [loadingImage, setLoadingImage] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please upload a valid image file.");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert("Image size must be less than 5MB.");
        return;
      }

      setLoadingImage(true);
      const reader = new FileReader();
      reader.onload = () => {
        setUser((prevUser) => ({
          ...prevUser,
          img: reader.result, // Save image as Base64 string
        }));
        setLoadingImage(false);
      };
      reader.readAsDataURL(file);
    }
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
        <div className="card-body text-center">
          {user.img && (
            <div className="mb-3">
              <img
                src={user.img}
                alt="Profile"
                className="img-thumbnail rounded-circle"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
            </div>
          )}
          {isEditing ? (
            <div>
              <div className="mb-3">
                <label className="form-label">Image Upload</label>
                <input
                  type="file"
                  name="img"
                  onChange={handleImageChange}
                  className="form-control"
                />
                {loadingImage && (
                  <p className="text-secondary">Loading image...</p>
                )}
              </div>
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
