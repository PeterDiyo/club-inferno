import React from "react";
import "./members.css";
import { FaUser, FaUserTie, FaUserShield } from "react-icons/fa"; // Example icons for different roles

const members = [
  { id: 1, name: "Barath", role: "President", icon: <FaUserTie /> },
  { id: 2, name: "Vimal", role: "Vice President", icon: <FaUser /> },
  { id: 3, name: "Raksha", role: "Secretary", icon: <FaUserShield /> },
  { id: 4, name: "Others", role: "Others", icon: <FaUserShield /> },
  { id: 5, name: "Others", role: "Others", icon: <FaUserShield /> },
  { id: 6, name: "Others", role: "Others", icon: <FaUserShield /> },
  { id: 7, name: "Others", role: "Others", icon: <FaUserShield /> },
  { id: 8, name: "Others", role: "Others", icon: <FaUserShield /> },
  // Add more members as needed
];

const Members = () => {
  return (
    <section className="members-section" id="members">
      <h2 className="members-title">Our Members</h2>
      <div className="members-grid">
        {members.map((member) => (
          <div key={member.id} className="member-card">
            <div className="member-icon">{member.icon}</div>
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Members;
