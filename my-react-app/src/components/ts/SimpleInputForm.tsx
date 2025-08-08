import { useState } from "react";

// ① Propsの型をここに定義してください
// type FormProps = { ... }
type FormProps = {
  onSave: (v: string) => void;
};

export default function SimpleInputForm({ onSave }: FormProps) {
  // ① Propsに型を適用
  // ② このstateは、最初は空文字列だが、nullになる可能性もあるとする
  const [inputValue, setInputValue] = useState<string | null>("");

  // ③ `event`引数に型を付けてください
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // ③ `event`引数に型を付けてください
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // フォームのデフォルト送信を防ぐ
    if (inputValue) {
      onSave(inputValue);
    }
    setInputValue(null); // 送信後はnullにする
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue ?? ""} // inputValueがnullなら空文字を表示
        onChange={handleChange}
      />
      <button type="submit">保存</button>
    </form>
  );
}
