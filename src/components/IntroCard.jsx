const IntroCard = ({ icon, title, text }) => {
  return (
    <article>
      <span>{icon}</span>
      <div className="intro-card-text">
        <h4 className="title">{title}</h4>
        <p className="text">{text}</p>
      </div>
    </article>
  );
};
export default IntroCard;
