import { useEffect, useState } from "react";

const Cursor = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Update cursor position on mouse move
  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setIsFollowing(true);
    };

    const resetCursor = () => {
      setIsFollowing(false);
    };

    window.addEventListener("mousemove", updateCursorPosition);
    window.addEventListener("mouseleave", resetCursor);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener("mouseleave", resetCursor);
    };
  }, []);

  return (
    <div
      className={`fixed pointer-events-none bg-black rounded-full transform transition-all duration-300 ease-out w-10 h-10 z-50 ${
        isFollowing ? "scale-100 opacity-100" : "scale-50 opacity-0"
      }`}
      style={{
        left: `${cursorPos.x - 20}px`,
        top: `${cursorPos.y - 20}px`,
      }}
    ></div>
  );
};

export default Cursor;
