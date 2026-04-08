import { useState } from "react";

import { DemoSection } from "@/components/DemoSection";
import { LessonScreen } from "@/components/LessonScreen";
import { ResultBox } from "@/components/ResultBox";

const CODE = `const animal = {
  speak() {
    return "Animal speaks"
  }
}

const dog = Object.create(animal)

dog.speak() // "Animal speaks"`;

export default function PrototypicalInheritance() {
  const [result, setResult] = useState<string | null>(null);

  const run = () => {
    const animal = {
      speak() {
        return "Animal speaks";
      },
    };
    const dog = Object.create(animal) as typeof animal;
    setResult(dog.speak());
  };

  return (
    <LessonScreen
      explanation="JavaScript uses prototypical inheritance — objects inherit properties and methods from other objects via the prototype chain. Every object has a hidden [[Prototype]] link pointing to its parent."
      code={CODE}
      links={[
        {
          label: "Docs",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain",
        },
        {
          label: "Video",
          url: "https://www.youtube.com/watch?v=wstwjQ1yqWQ",
        },
      ]}
    >
      <DemoSection
        title="Try it"
        buttonLabel="Make dog speak"
        onPress={run}
        result={
          result !== null ? (
            <ResultBox lines={[`dog.speak() → "${result}"`]} />
          ) : undefined
        }
      />
    </LessonScreen>
  );
}
