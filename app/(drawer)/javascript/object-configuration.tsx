import { useState } from 'react';

import { DemoSection } from '@/components/DemoSection';
import { LessonScreen } from '@/components/LessonScreen';
import { ResultBox } from '@/components/ResultBox';

const CODE = `const obj = {}

Object.defineProperty(obj, "name", {
  value: "John",
  writable: false,
  enumerable: true,
  configurable: false,
})`;

const obj: Record<string, string> = {};
Object.defineProperty(obj, 'name', {
  value: 'John',
  writable: false,
  enumerable: true,
  configurable: false,
});

export default function ObjectConfiguration() {
  const [modifyResult, setModifyResult] = useState<{ before: string; after: string } | null>(null);
  const [keysResult, setKeysResult] = useState<string[] | null>(null);
  const [deleteResult, setDeleteResult] = useState<{
    deleted: boolean;
    stillExists: string;
  } | null>(null);

  const tryModify = () => {
    const before = obj.name;
    try {
      (obj as Record<string, string>).name = 'Mike';
    } catch {
      // writable: false silently ignores in non-strict mode
    }
    setModifyResult({ before, after: obj.name });
  };

  const listKeys = () => {
    setKeysResult(Object.keys(obj));
  };

  const tryDelete = () => {
    const deleted = delete (obj as Record<string, string>).name;
    setDeleteResult({ deleted, stillExists: obj.name });
  };

  return (
    <LessonScreen
      explanation="Object properties can be configured using descriptors: writable, enumerable, and configurable. Use Object.defineProperty to set them."
      code={CODE}
      links={[
        {
          label: 'Docs',
          url: 'https://medium.com/@shrijan00003/javascript-object-properties-writable-enumerable-configurable-eced27378256',
        },
        {
          label: 'Video',
          url: 'https://www.youtube.com/watch?v=LD1tQEWsjz4',
        },
      ]}
    >
      <DemoSection
        title="Try modifying (writable: false)"
        buttonLabel='obj.name = "Mike"'
        onPress={tryModify}
        result={
          modifyResult ? (
            <ResultBox
              lines={[`before: "${modifyResult.before}"`, `after: "${modifyResult.after}" ← unchanged`]}
            />
          ) : undefined
        }
      />

      <DemoSection
        title="List keys (enumerable: true)"
        buttonLabel="Object.keys(obj)"
        onPress={listKeys}
        result={
          keysResult ? (
            <ResultBox lines={[`[${keysResult.map((k) => `"${k}"`).join(', ')}]`]} />
          ) : undefined
        }
      />

      <DemoSection
        title="Delete property (configurable: false)"
        buttonLabel="delete obj.name"
        onPress={tryDelete}
        variant="danger"
        result={
          deleteResult ? (
            <ResultBox
              lines={[
                `delete returned: ${String(deleteResult.deleted)}`,
                `obj.name still: "${deleteResult.stillExists}"`,
              ]}
              variant="danger"
            />
          ) : undefined
        }
      />
    </LessonScreen>
  );
}
