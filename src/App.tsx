import React from "react";
import "./App.css";
import Calculator from "./components/Calculator";

function App() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const boxRef = React.useRef<HTMLDivElement>(null);

  const isClicked = React.useRef<boolean>(false);

  const coords = React.useRef<{
    startX: number;
    startY: number;
    lastX: number;
    lastY: number;
  }>({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });

  React.useEffect(() => {
    if (!boxRef.current || !containerRef.current) return;

    var box = boxRef.current;
    var container = containerRef.current;

    const onMouseDown = (e: MouseEvent) => {
      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
    };

    const onMouseUp = (e: MouseEvent) => {
      isClicked.current = false;
      coords.current.lastX = box.offsetLeft;
      coords.current.lastY = box.offsetTop;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isClicked.current) return;

      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      const nextY = e.clientY - coords.current.startY + coords.current.lastY;

      box.style.top = `${nextY}px`;
      box.style.left = `${nextX}px`;
    };

    box.addEventListener("mousedown", onMouseDown);
    box.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseUp);

    const cleanup = () => {
      box.removeEventListener("mousedown", onMouseDown);
      box.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseUp);
    };

    return cleanup;
  }, []);

  const [visible, setVisible] = React.useState<boolean>(false);

  return (
    <div
      ref={containerRef}
      className='bg-[url("https://wallpapercave.com/dwp2x/wp11599618.jpg")]  bg-no-repeat bg-cover  container'
    >
      <div ref={boxRef} className={`box ${!visible ? "hidden" : ""}`}>
        <Calculator setVisible={setVisible} />
      </div>

      <img
        onClick={() => setVisible(!visible)}
        className="h-[80px] w-[80px] bottom-0 left-[50%] absolute active:scale-110 transform -translate-x-1/2 -translate-y-1/2"
        src="https://help.apple.com/assets/61E87C373FEFE261382782AC/61E87C383FEFE261382782B3/en_GB/f19c7e914f0adb59c0833d00d09f1ea7.png"
      />
    </div>
  );
}

export default App;
