import React from "react";
import ReactDOM from "react-dom/client";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  global: {
    "*": {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
      fontFamily:
        "sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue'",
    },
    a: {
      WebkitTapHighlightColor: "transparent",
    },
    html: {
      scrollBehavior: "smooth",
      scrollbarWidth: "thin",
      scrollbarColor: "transparent transparent",
    },
    body: {
      height: "100vh",
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      placeContent: "center",
      overflow: "hidden",
      backgroundColor: "#000",
    },
    "@keyframes up_and_down": {
      "0%, 100%": { transform: "translateZ(-100px) rotate(0deg)" },
      "50%": { transform: "translateZ(100px) rotate(90deg)" },
    },
  },
  container: {
    width: "300px",
    height: "300px",
    position: "relative",
    transformStyle: "preserve-3d",
    transform: "perspective(500px) rotateX(60deg)",
    "@media (width <= 1111px)": {
      zoom: "0.7",
    },
  },
  aro: {
    position: "absolute",
    inset: "calc(var(--s) * 10px)",
    boxShadow: "inset 0 0 80px #9acd32",
    clipPath:
      "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
    animationName: "up_and_down",
    animationDuration: "3s",
    animationIterationCount: "infinite",
    animationTimingFunction: "ease-in-out",
    animationFillMode: "both",
    animationDelay: "calc(var(--s) * -0.1s)",
  },
});

function App() {
  return (
    <aside {...stylex.props(styles.container)}>
      {Array.from({ length: 15 }).map((_, i) => (
        <div key={i} {...stylex.props(styles.aro)} style={{ "--s": i }} />
      ))}
    </aside>
  );
}

const rootElement = document.createElement("div");
document.body.appendChild(rootElement);
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
