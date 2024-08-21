import React from "react";
import "./timeline.css";

const events = [
  {
    date: "January 2020",
    title: "Club Inferno Launch",
    description:
      "The grand opening of Club Inferno, setting the stage for an electrifying nightlife experience.",
  },
  {
    date: "June 2020",
    title: "First Music Festival",
    description:
      "Hosted our first major music festival featuring top DJs and artists from around the world.",
  },
  {
    date: "December 2020",
    title: "New Year's Eve Bash",
    description:
      "Rang in the new year with a massive celebration that became the talk of the town.",
  },
  {
    date: "March 2021",
    title: "VIP Lounge Opening",
    description:
      "Introduced an exclusive VIP lounge offering a premium experience for our elite guests.",
  },
  // Add more events as needed
];

const Timeline = () => {
  return (
    <section className="timeline-section" id="timeline">
      <h2 className="timeline-title">Our Journey</h2>
      <div className="timeline-container">
        {events.map((event, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "right" : "left"}`}
          >
            <div className="timeline-content">
              <h3 className="timeline-date">{event.date}</h3>
              <h4 className="timeline-event-title">{event.title}</h4>
              <p className="timeline-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
