import React, { useState } from "react";
// Importing the images with relative paths
import defaultBanner from '../img/cover.jpg'; // Correct relative import
import defaultAvatar from '../img/official_logo.png'; // Correct relative import

const AdminProfilePage = () => {
    const [adminDetails, setAdminDetails] = useState({
        name: "FarmNamin",
        email: "farmnamin.official@gmail.com",
        bio: "Admin at Farmnamin, passionate about agriculture and technology.",
        password: "",
    });

    const [editing, setEditing] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdminDetails({ ...adminDetails, [name]: value });
    };

    const handleEditToggle = () => {
        setEditing(!editing);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Profile updated successfully!");
        setEditing(false);
    };

    return (
        <div
            style={{
                backgroundColor: "#f4f4f4",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                padding: "20px",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "900px",
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    padding: "20px",
                }}
            >
                {/* Banner Section */}
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        height: "250px",
                        borderRadius: "8px",
                        overflow: "hidden",
                        marginBottom: "20px",
                    }}
                >
                    <img
                        src={defaultBanner}  // Use the imported banner image here
                        alt="Banner"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            color: "#fff",
                            fontSize: "24px",
                            fontWeight: "bold",
                            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
                        }}
                    >
                      
                    </div>
                </div>

                {/* Profile Picture and Info */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "30px",
                    }}
                >
                    <img
                        src={defaultAvatar}  // Use the imported avatar image here
                        alt="Admin Avatar"
                        style={{
                            width: "120px",
                            height: "120px",
                            borderRadius: "50%",
                            border: "5px solid #fff",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            marginRight: "20px",
                        }}
                    />
                    <div>
                        <h2 style={{ margin: 0, color: "#333" }}>{adminDetails.name}</h2>
                        <p style={{ margin: "5px 0", color: "#777" }}>{adminDetails.email}</p>
                        <p style={{ margin: "5px 0", color: "#555" }}>{adminDetails.bio}</p>
                    </div>
                </div>

                {/* Edit Profile Form */}
                {editing ? (
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: "15px" }}>
                            <label style={{ display: "block", marginBottom: "5px" }}>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={adminDetails.name}
                                onChange={handleChange}
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                    fontSize: "16px",
                                }}
                            />
                        </div>
                        <div style={{ marginBottom: "15px" }}>
                            <label style={{ display: "block", marginBottom: "5px" }}>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={adminDetails.email}
                                onChange={handleChange}
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                    fontSize: "16px",
                                }}
                            />
                        </div>
                        <div style={{ marginBottom: "15px" }}>
                            <label style={{ display: "block", marginBottom: "5px" }}>Bio</label>
                            <textarea
                                name="bio"
                                value={adminDetails.bio}
                                onChange={handleChange}
                                rows="4"
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                    fontSize: "16px",
                                }}
                            ></textarea>
                        </div>
                        <div style={{ marginBottom: "15px" }}>
                            <label style={{ display: "block", marginBottom: "5px" }}>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={adminDetails.password}
                                onChange={handleChange}
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                    fontSize: "16px",
                                }}
                            />
                        </div>
                        <button
                            type="submit"
                            style={{
                                width: "100%",
                                padding: "10px",
                                backgroundColor: "#4CAF50",
                                color: "#fff",
                                border: "none",
                                borderRadius: "4px",
                                fontSize: "16px",
                                cursor: "pointer",
                            }}
                        >
                            Save Changes
                        </button>
                    </form>
                ) : (
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                        <button
                            onClick={handleEditToggle}
                            style={{
                                padding: "10px 20px",
                                backgroundColor: "#007bff",
                                color: "#fff",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                            }}
                        >
                            Edit Profile
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminProfilePage;
