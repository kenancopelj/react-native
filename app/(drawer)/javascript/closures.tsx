import { useRef, useState } from "react";

import { DemoSection } from "@/components/DemoSection";
import { LessonScreen } from "@/components/LessonScreen";
import { ResultBox } from "@/components/ResultBox";

const CODE = `function counter() {
  let count = 0
  return function () {
    count++
    return count
  }
}

const increment = counter()
increment() // 1
increment() // 2
increment() // 3`;

export default function Closures() {
  const [count, setCount] = useState<number | null>(null);

  // The closure is created once per component mount — count persists across renders
  const incrementRef = useRef(
    (() => {
      let n = 0;
      return () => {
        n++;
        return n;
      };
    })(),
  );

  const run = () => {
    setCount(incrementRef.current());
  };

  return (
    <LessonScreen
      explanation="A closure occurs when a function retains access to variables from its outer scope even after the outer function has returned. The inner function 'closes over' the outer variable, keeping it alive in memory."
      code={CODE}
      links={[
        {
          label: "Docs",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",
        },
        {
          label: "Video",
          url: "https://www.youtube.com/watch?v=3a0I8ICR1Vg",
        },
      ]}
    >
      <DemoSection
        title="Counter closure — press to increment"
        buttonLabel="increment()"
        onPress={run}
        result={
          count !== null ? (
            <ResultBox lines={[`count → ${count}`]} />
          ) : undefined
        }
      />
    </LessonScreen>
  );
}
