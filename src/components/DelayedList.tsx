import { useState, useEffect } from "react";

type DelayedListProps = {
  items: any[];
  delay?: number;
};

export default function DelayedList({items, delay = 500} : DelayedListProps) {
   const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount < items.length) {
      const timer = setTimeout(() => {
        setVisibleCount(visibleCount + 1);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [visibleCount, items.length]);

  return (
    <>
      {items.slice(0, visibleCount).map((item, index) => (
        <div key={index} className="animate-zoom-back">
          {item}
        </div>
      ))}
    </>
  );
}