import { useState, useEffect } from "react";

export function TodoPage() {
  const [todos, setTodos] = useState(() => {
    // Загружает задачи из localstorage при иниализации
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  // Тут задачи сохраняются в localstorage при каждом изменении
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!input.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo-лист</h2>

      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Введите задачу"
          style={{ padding: "8px", width: "250px", marginRight: "10px" }}
        />
        <button onClick={addTodo} style={{ padding: "8px 12px" }}>
          Добавить
        </button>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <button onClick={() => setFilter("all")} style={{ marginRight: "5px" }}>
          Все
        </button>
        <button
          onClick={() => setFilter("active")}
          style={{ marginRight: "5px" }}
        >
          Активные
        </button>
        <button onClick={() => setFilter("completed")}>Выполненные</button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredTodos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: "8px" }}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                style={{ marginRight: "8px" }}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
