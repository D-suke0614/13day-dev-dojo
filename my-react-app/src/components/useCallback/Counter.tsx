import { useCallback, useState } from "react";
import { MemoizedResetButton } from "./ResetButton";

export default function Counter() {
  const [count, setCount] = useState(0);

  // 親コンポーネントが再レンダリングされるたびに、この関数も再生成される
  const handleReset = useCallback(() => {
    setCount(0);
  }, []);

  console.log("親コンポーネント 'Counter' がレンダリングされました");

  return (
    <div style={{ padding: "20px", border: "1px solid gray" }}>
      <h2>カウンター</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <MemoizedResetButton onReset={handleReset} />
    </div>
  );
}
