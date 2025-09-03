import { Card } from "react-bootstrap";
import { useState } from "react";

const MetricCard = ({ title, value, change, color, onClick }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    if (onClick) onClick(title); // tell Dashboard which card was clicked
  };

  return (
    <Card
      className="text-center shadow-sm"
      style={{
        cursor: "pointer",
        transform: isActive ? "scale(1.05)" : "scale(1)",
        border: isActive ? `2px solid ${color}` : "1px solid #ddd",
        transition: "all 0.3s ease",
      }}
      onClick={handleClick}
    >
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <h2 style={{ color: color }}>{value}</h2>
        <p className="text-muted">{change}</p>
      </Card.Body>
    </Card>
  );
};

export default MetricCard;
