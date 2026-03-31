import { useReveal } from "../hook/useReveal";

const Reveal = ({ children, delay = "0ms", className = "" }) => {
  const [ref, isVisible] = useReveal(0.2);

  return (
    <div ref={ref} className={`mask ${className}`}>
      <div
        className={isVisible ? "animate-textSlideUp" : "opacity-0"}
        style={{ animationDelay: isVisible ? delay : "0ms" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Reveal;