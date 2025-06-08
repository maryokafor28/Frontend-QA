import { useState, useEffect } from "react";

interface Testimonial {
  name: string;
  avatar: string;
  quote: string;
}

const testimomials: Testimonial[] = [
  {
    name: "Amadi Mary",
    avatar: "image",
    quote: "bringing the best",
  },
  {
    name: "Amadi fumnanya",
    avatar: "image",
    quote: "setting the pace",
  },
  {
    name: "Best Onyi",
    avatar: "image",
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
        maxWidth: "400px",
        margin: "100px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        textAlign: "center",
      }}
    >
      <h3 style={{ marginTop: "10px" }}> {current.name}</h3>
      <p style={{}}>"{current.quote}"</p>
    </div>
  );
}
export default Testimonial;
