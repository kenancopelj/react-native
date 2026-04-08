import { useState } from "react";

import { CodeBlock } from "@/components/CodeBlock";
import { DemoSection } from "@/components/DemoSection";
import { LessonScreen } from "@/components/LessonScreen";
import { ResultBox } from "@/components/ResultBox";

const PRIMITIVE_CODE = `let a = 10
let b = a   // copy of the value
b = 20
// a is still 10`;

const OBJECT_CODE = `let obj1 = { name: "John" }
let obj2 = obj1   // copy of the reference
obj2.name = "Mike"
// obj1.name is now "Mike"`;

export default function PassByValueReference() {
  const [primitiveResult, setPrimitiveResult] = useState<{
    a: number;
    b: number;
  } | null>(null);
  const [objectResult, setObjectResult] = useState<{
    obj1: string;
    obj2: string;
  } | null>(null);

  const runPrimitive = () => {
    let a = 10;
    let b = a;
    b = 20;
    setPrimitiveResult({ a, b });
  };

  const runObject = () => {
    const obj1 = { name: "John" };
    const obj2 = obj1;
    obj2.name = "Mike";
    setObjectResult({ obj1: obj1.name, obj2: obj2.name });
  };

  return (
    <LessonScreen
      explanation="Primitives (numbers, strings, booleans) are passed by value — a copy is made. Objects and arrays are passed by reference — both variables point to the same memory location."
      links={[
        {
          label: "Docs",
          url: "https://dev-aditya.medium.com/pass-by-value-and-pass-by-reference-in-javascript-7b4b3d59f629",
        },
        {
          label: "Video",
          url: "https://www.youtube.com/watch?v=-hBJz2PPIVE",
        },
      ]}
    >
      <DemoSection
        title="Primitives — Pass by Value"
        buttonLabel="Run"
        onPress={runPrimitive}
        result={
          primitiveResult ? (
            <ResultBox
              lines={[
                `a = ${primitiveResult.a} ← unchanged`,
                `b = ${primitiveResult.b}`,
              ]}
            />
          ) : undefined
        }
      >
        <CodeBlock code={PRIMITIVE_CODE} />
      </DemoSection>

      <DemoSection
        title="Objects — Pass by Reference"
        buttonLabel="Run"
        onPress={runObject}
        variant="danger"
        result={
          objectResult ? (
            <ResultBox
              lines={[
                `obj1.name = "${objectResult.obj1}" ← changed!`,
                `obj2.name = "${objectResult.obj2}"`,
              ]}
              variant="danger"
            />
          ) : undefined
        }
      >
        <CodeBlock code={OBJECT_CODE} />
      </DemoSection>
    </LessonScreen>
  );
}
