import React from "react";
import "./members.css";
import PresImg from "../../assets/pres.jpeg"; // Direct import of the image

const membersData = [
  {
    id: 1,
    name: "Barath",
    role: "President",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: PresImg,
  },
  {
    id: 2,
    name: "Vimal",
    role: "Vice President",
    description: "Vestibulum ante ipsum primis in faucibus orci luctus et.",
    image: PresImg,
  },
  {
    id: 3,
    name: "Others",
    role: "Others Roles",
    description: "Vestibulum ante ipsum primis in faucibus orci luctus et.",
    image: PresImg,
  },
  // Add more members as needed
];

const Members = () => {
  return (
    <section className="members-section" id="members">
      <h2 className="members-title">Our Team</h2>
      <div className="members-container">
        {membersData.map((member) => (
          <div key={member.id} className="member-card">
            <img
              src={member.image}
              alt={member.name}
              className="member-image"
            />
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">{member.role}</p>
            <p className="member-description">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Members;
