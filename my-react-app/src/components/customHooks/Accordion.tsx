import useToggle from "../../hooks/useToggle";

export default function Accordion() {
  // 表示/非表示の状態を管理するロジック
  const [isOpen, toggleOpen] = useToggle(false);

  return (
    <div
      style={{ padding: "10px", border: "1px solid gray", maxWidth: "400px" }}
    >
      <div
        onClick={toggleOpen}
        style={{ cursor: "pointer", fontWeight: "bold" }}
      >
        Q: カスタムフックとは何ですか？ {isOpen ? "▲" : "▼"}
      </div>
      {isOpen && (
        <div style={{ marginTop: "10px" }}>
          A:
          コンポーネントから再利用可能なロジックを抽出したJavaScript関数のことです。
        </div>
      )}
    </div>
  );
}
