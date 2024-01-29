import { useEffect } from "react";

const useBackgroundMotion = () => {
  const runEffect = () => {
    const interBubble = document.querySelector<HTMLDivElement>(".interactive")!;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(() => {
        move();
      });
    }

    const callback = (event: MouseEvent) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };
    window.addEventListener("mousemove", callback);

    move();

    return () => {
      window.removeEventListener("mousemove", callback, true);
    };
  };

  useEffect(() => {
    const cleanUp = runEffect();
    return () => {
      cleanUp();
    };
  }, []);
};

export default useBackgroundMotion;
