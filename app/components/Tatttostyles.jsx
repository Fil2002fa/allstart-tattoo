import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    const containers = gsap.utils.toArray(".container");
    gsap.set(".container", { autoAlpha: 0 });
    gsap.set(".container:first-child", { autoAlpha: 1 });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".panel",
        pin: true,
        pinSpacing: false, // For overlay pinning (text stays fixed while cards scroll under)
        scrub: true,
        markers: true,
        end: `+=${(containers.length - 1) * 100}%`,
      },
    });
  

    containers.forEach((container, i) => {
  if (i === 0) return;
  tl.to(containers[i - 1], { autoAlpha: 0, duration: 0.15, ease: "none" });
  tl.to(container, { autoAlpha: 1, duration: 0.15, ease: "none" });
});

    // cleanup (best practice React)
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <>
      <div className="panel relative h-screen w-full overflow-hidden z-10 bg-transparent">

        <div className="container absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl font-bold">Word Two</div>
        <div className="container absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl font-bold">Three</div>
        <div className="container absolute   top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl font-bold"> Four</div>
      </div>
     
    </>
  );
}