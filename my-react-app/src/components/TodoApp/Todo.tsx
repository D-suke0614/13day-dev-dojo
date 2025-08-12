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
  const [editingTitle, setEditingTitle] = useState<string>("");
  const [editingText, setEditingText] = useState<string>("");
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null);

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

  const handleEdit = (id: string) => {
    const editTodo = todoList.find((v) => v.id === id);
    if (editTodo) {
      setEditingTitle(editTodo.title);
      setEditingText(editTodo.text);
      setEditingTodoId(id);
    }
  };

  const handleEditSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    id: string
  ) => {
    e.preventDefault();
    const newTodoList = todoList.map((todo) => {
      return todo.id === id
        ? { ...todo, title: editingTitle, text: editingText }
        : todo;
    });
    setTodoList(newTodoList);
    setEditingTodoId(null);
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
              {editingTodoId === id ? (
                <form onSubmit={(e) => handleEditSubmit(e, id)}>
                  <div className="todoContent">
                    <input
                      type="text"
                      name="title"
                      value={editingTitle}
                      onChange={(e) => setEditingTitle(e.target.value)}
                    />
                    <input
                      type="text"
                      name="text"
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                    />
                  </div>
                  <div className="todoButtonWrapper">
                    <button type="submit">保存</button>
                    <button
                      type="button"
                      onClick={() => setEditingTodoId(null)}
                    >
                      キャンセル
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <div className="todoContent">
                    <div className="todoTitle">{title}</div>
                    <p className="todoText">{text}</p>
                  </div>
                  <div className="todoButtonWrapper">
                    <button type="button" onClick={() => handleEdit(id)}>
                      編集
                    </button>
                    <button type="button" onClick={() => handleDelete(id)}>
                      削除
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      ) : (
        <>not found todos...</>
      )}
    </div>
  );
}
