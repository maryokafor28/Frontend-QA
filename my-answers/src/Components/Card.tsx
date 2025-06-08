import { useState } from "react";
interface CardProps {
  image: string;
  title: string;
  description: string;
}

function Card({ image, title, description }: CardProps) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full height to center vertically
        backgroundColor: "#f3f4f6", // Light gray background
      }}
    >
      <div
        style={{
          position: "relative",
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "16px",
          maxWidth: "300px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          background: "#fff",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            borderRadius: "4px 4px 0 0",
            objectFit: "cover",
          }}
        />
        <h2 style={{ fontSize: "1.25rem", margin: "12px 0 8px" }}>{title}</h2>
        <p style={{ color: "#555" }}>{description}</p>
        <button
          onClick={toggleLike}
          aria-label="Like Button"
          style={{
            marginTop: "16px",
            padding: "8px 15px",
            borderRadius: "4px",
            fontSize: "24px",
            cursor: "pointer",
            color: liked ? "blue" : "#000",
          }}
        >
          {liked ? "like" : "unlike"}
        </button>
      </div>
    </div>
  );
}

export default Card;
