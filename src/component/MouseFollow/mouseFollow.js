import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { gsap } from "gsap";
import { useWindowSize } from "../../utilities/hooks";

const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: fixed;
  background: #5f9ea0;
  pointer-events: none;
  z-index: 9999;
  display: ${(props) => (props.hide ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  > * {
    white-space: nowrap;
  }
`;

const initialCursor = {
  scale: 1,
  component: "",
  background: "#5f9ea0",
  color: "#ffffff",
  center: false,
};

const MouseFollow = () => {
  const { isPhoneOrTab } = useWindowSize();
  const [cursorStyle, setCursorStyle] = useState(initialCursor);
  const cursorStyleRef = React.useRef(cursorStyle);
  const circleRef = useRef(null);

  const customCursor = (e) => {
    if (e.detail.exit) {
      cursorStyleRef.current = initialCursor;
      setCursorStyle(initialCursor);
    } else {
      const newStyle = {
        ...cursorStyle,
        component: e.detail.component || cursorStyle.component,
      };

      cursorStyleRef.current = newStyle;
      setCursorStyle(newStyle);
    }
  };

  const moveCircle = (e) => {
    gsap.to(circleRef.current, {
      yoyo: true,
      css: {
        left: e.clientX - 5,
        top: e.clientY - 5,
        transformOrigin: "top left",
      },
      duration: 0.3,
    });
  };

  const swiftMoveCircle = (e) => {
    const quickSetMousePosition = gsap.quickSetter(circleRef.current, "css");
    quickSetMousePosition({
      left: e.clientX - 5,
      top: e.clientY - 5,
      transformOrigin: "top left",
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", moveCircle);
    window.addEventListener("wheel", swiftMoveCircle);
    window.addEventListener("customCursor", customCursor);
    return () => {
      window.removeEventListener("mousemove", moveCircle);
      window.removeEventListener("wheel", swiftMoveCircle);
      window.removeEventListener("customCursor", customCursor);
    };
    /* eslint-disable-next-line */
  }, []);

  return (
    <Circle ref={circleRef} hide={isPhoneOrTab} center={cursorStyle.center}>
      {cursorStyle.component}
    </Circle>
  );
};

export default MouseFollow;
