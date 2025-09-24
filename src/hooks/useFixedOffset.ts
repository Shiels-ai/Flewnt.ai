import React from "react";

interface FixedOffset {
  ref: React.RefObject<HTMLDivElement>;
  spacerHeight: number;
}

export const useFixedOffset = (): FixedOffset => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [spacerHeight, setSpacerHeight] = React.useState(0);

  React.useEffect(() => {
    const measure = () => {
      if (!ref.current) return;
      setSpacerHeight(ref.current.offsetHeight);
    };

    measure();

    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return { ref, spacerHeight };
};

export default useFixedOffset;
