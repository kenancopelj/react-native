import { useState } from "react";

import { DemoSection } from "@/components/DemoSection";
import { LessonScreen } from "@/components/LessonScreen";
import { ResultBox } from "@/components/ResultBox";

const CODE = `class Calculator {
  constructor() {
    this.value = 0
  }
  add(n) {
    this.value += n
    return this
  }
  multiply(n) {
    this.value *= n
    return this
  }
  subtract(n) {
    this.value -= n
    return this
  }
  result() {
    return this.value
  }
}

new Calculator()
  .add(5)       // → 5
  .multiply(3)  // → 15
  .subtract(2)  // → 13
  .result()     // 13`;

export default function ChainableMethods() {
  const [steps, setSteps] = useState<string[] | null>(null);

  const run = () => {
    class Calculator {
      value = 0;
      add(n: number) {
        this.value += n;
        return this;
      }
      multiply(n: number) {
        this.value *= n;
        return this;
      }
      subtract(n: number) {
        this.value -= n;
        return this;
      }
    }

    const calc = new Calculator();
    const lines: string[] = [];

    calc.add(5);
    lines.push(`.add(5)       → ${calc.value}`);
    calc.multiply(3);
    lines.push(`.multiply(3)  → ${calc.value}`);
    calc.subtract(2);
    lines.push(`.subtract(2)  → ${calc.value}`);
    lines.push(`result()      → ${calc.value}`);

    setSteps(lines);
  };

  return (
    <LessonScreen
      explanation="Methods that return this enable sequential calls on the same object. Each method performs its operation and hands the instance back so the next call continues from the same object — no need for intermediate variables."
      code={CODE}
      links={[
        {
          label: "Docs",
          url: "https://medium.com/technofunnel/javascript-method-chaining-3-ways-to-chain-methods-in-javascript-5d8c7bb44c98",
        },
        {
          label: "Video",
          url: "https://www.youtube.com/watch?v=J4YhlDsNqeE",
        },
      ]}
    >
      <DemoSection
        title="Run the chain — see each step"
        buttonLabel="Run calculation"
        onPress={run}
        result={steps ? <ResultBox lines={steps} /> : undefined}
      />
    </LessonScreen>
  );
}
