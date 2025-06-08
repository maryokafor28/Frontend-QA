import { useState, useEffect } from "react";
import avatar from "../assets/my-baby.jpg";
interface Testimonial {
  name: string;
  avatar: string;
  quote: string;
}

const testimomials: Testimonial[] = [
  {
    name: "Amadi Mary",
    avatar: "avatar",
    quote: "bringing the best",
  },
  {
    name: "Amadi fumnanya",
    avatar: "avatar",
    quote: "setting the pace",
  },
  {
    name: "Best Onyi",
    avatar: "avatar",
    quote: "future is bright",
  },
];
function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimomials.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const current = testimomials[currentIndex];

  return (
    <div
      style={{
        maxWidth: "300px",
        margin: "100px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "1 2px 10px rgba(0,0,0,0.2)",
        textAlign: "center",
      }}
    >
      <h3 style={{ marginTop: "10px" }}> {current.name}</h3>
      <img
        src={current.avatar}
        alt={current.name}
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "10px",
        }}
      />

      <p style={{}}>"{current.quote}"</p>
    </div>
  );
}
export default Testimonial;
