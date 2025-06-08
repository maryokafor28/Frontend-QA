import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Card from "./Components/Card";
import Testimonial from "./Components/Testimonial";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Card
      image="./assets/images/paw-print.jpg"
      title="A cute dog"
      description="this is the most cute dog ever."
    />
    <Testimonial />
  </StrictMode>
);
