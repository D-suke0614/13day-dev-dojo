import { useState } from "react";
import "./Todo.css";

export type Todo = {
  id: string;
  title: string;
  text: string;
};

export default function Todo() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now().toString(),
      title,
      text,
    };
    setTodoList([...todoList, newTodo]);
    setTitle("");
    setText("");
  };

  const handleDelete = (id: string) => {
    const newVal = todoList.filter((todo) => todo.id !== id);
    setTodoList(newVal);
  };
  return (
    <div>
      <form className="todoInputField" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="text"
          placeholder="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">追加</button>
      </form>

      {todoList.length ? (
        <div className="todoCardList">
          {todoList.map(({ id, title, text }) => (
            <div className="todoCard" key={id}>
              <div className="todoContent">
                <div className="todoTitle">{title}</div>
                <p className="todoText">{text}</p>
              </div>
              <div className="todoButtonWrapper">
                <button type="button" onClick={() => {}}>
                  編集
                </button>
                <button type="button" onClick={() => handleDelete(id)}>
                  削除
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>not found todos...</>
      )}
    </div>
  );
}
