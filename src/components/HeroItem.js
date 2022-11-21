import "./HeroItem.css";

function HeroItem({ name, numeration }) {
  return (
    <div className="hero-container">
      <h3 className="hero-name">{name}</h3>
      <h4 className="hero-section">{numeration}</h4>
    </div>
  );
}

export default HeroItem;
