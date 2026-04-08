import { useState } from "react";

import { DemoSection } from "@/components/DemoSection";
import { LessonScreen } from "@/components/LessonScreen";
import { ResultBox } from "@/components/ResultBox";

const CODE = `const arr = [1, 2, 3, 4, 5]

// Immutable — return a new array, original unchanged
arr.map(n => n * 2)            // [2, 4, 6, 8, 10]
arr.filter(n => n > 2)         // [3, 4, 5]
arr.reduce((s, n) => s + n, 0) // 15

// Mutable — modify the original array
arr.push(6)              // [1, 2, 3, 4, 5, 6]
arr.pop()                // [1, 2, 3, 4, 5]
arr.reverse()            // [5, 4, 3, 2, 1]
arr.sort((a, b) => a - b) // [1, 2, 3, 4, 5]`;

const ORIGINAL = [1, 2, 3, 4, 5];

export default function ArrayMethods() {
  const [mapResult, setMapResult] = useState<number[] | null>(null);
  const [filterResult, setFilterResult] = useState<number[] | null>(null);
  const [reduceResult, setReduceResult] = useState<number | null>(null);

  const [mutableArr, setMutableArr] = useState([...ORIGINAL]);
  const [pushResult, setPushResult] = useState<string[] | null>(null);
  const [popResult, setPopResult] = useState<string[] | null>(null);
  const [reverseResult, setReverseResult] = useState<string[] | null>(null);
  const [sortResult, setSortResult] = useState<string[] | null>(null);

  return (
    <LessonScreen
      explanation="Array methods split into two categories: immutable methods return a new array without touching the original, while mutable methods modify the array in place."
      code={CODE}
      links={[
        {
          label: "Docs",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
        },
        {
          label: "Video",
          url: "https://www.youtube.com/watch?v=R8rmfD9Y5-c",
        },
      ]}
    >
      <DemoSection
        title="map(n => n * 2) — immutable"
        buttonLabel="Run map"
        onPress={() => setMapResult(ORIGINAL.map((n) => n * 2))}
        result={
          mapResult ? (
            <ResultBox
              lines={[
                `original: [${ORIGINAL.join(", ")}]`,
                `result:   [${mapResult.join(", ")}]`,
              ]}
            />
          ) : undefined
        }
      />

      <DemoSection
        title="filter(n => n > 2) — immutable"
        buttonLabel="Run filter"
        onPress={() => setFilterResult(ORIGINAL.filter((n) => n > 2))}
        result={
          filterResult ? (
            <ResultBox
              lines={[
                `original: [${ORIGINAL.join(", ")}]`,
                `result:   [${filterResult.join(", ")}]`,
              ]}
            />
          ) : undefined
        }
      />

      <DemoSection
        title="reduce((sum, n) => sum + n, 0) — immutable"
        buttonLabel="Run reduce"
        onPress={() => setReduceResult(ORIGINAL.reduce((sum, n) => sum + n, 0))}
        result={
          reduceResult !== null ? (
            <ResultBox
              lines={[
                `original: [${ORIGINAL.join(", ")}]`,
                `result:   ${reduceResult}`,
              ]}
            />
          ) : undefined
        }
      />

      <DemoSection
        title="push(6) — mutable"
        buttonLabel="Run push"
        variant="danger"
        onPress={() => {
          const before = [...mutableArr];
          const next = [...mutableArr, 6];
          setMutableArr(next);
          setPushResult([
            `before: [${before.join(", ")}]`,
            `after:  [${next.join(", ")}]`,
          ]);
        }}
        result={
          pushResult ? (
            <ResultBox lines={pushResult} variant="danger" />
          ) : undefined
        }
      />

      <DemoSection
        title="pop() — mutable"
        buttonLabel="Run pop"
        variant="danger"
        onPress={() => {
          if (mutableArr.length === 0) return;
          const before = [...mutableArr];
          const next = mutableArr.slice(0, -1);
          setMutableArr(next);
          setPopResult([
            `before: [${before.join(", ")}]`,
            `after:  [${next.join(", ")}]`,
          ]);
        }}
        result={
          popResult ? (
            <ResultBox lines={popResult} variant="danger" />
          ) : undefined
        }
      />

      <DemoSection
        title="reverse() — mutable"
        buttonLabel="Run reverse"
        variant="danger"
        onPress={() => {
          const before = [...mutableArr];
          const next = [...mutableArr].reverse();
          setMutableArr(next);
          setReverseResult([
            `before: [${before.join(", ")}]`,
            `after:  [${next.join(", ")}]`,
          ]);
        }}
        result={
          reverseResult ? (
            <ResultBox lines={reverseResult} variant="danger" />
          ) : undefined
        }
      />

      <DemoSection
        title="sort((a, b) => a - b) — mutable"
        buttonLabel="Run sort"
        variant="danger"
        onPress={() => {
          const before = [...mutableArr];
          const next = [...mutableArr].sort((a, b) => a - b);
          setMutableArr(next);
          setSortResult([
            `before: [${before.join(", ")}]`,
            `after:  [${next.join(", ")}]`,
          ]);
        }}
        result={
          sortResult ? (
            <ResultBox lines={sortResult} variant="danger" />
          ) : undefined
        }
      />
    </LessonScreen>
  );
}
