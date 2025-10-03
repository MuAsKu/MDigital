import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

const url = "https://jsonplaceholder.typicode.com/users";

export function UsersList() {
  const { data, isLoading, isError } = useFetch(url);
  const [search, setSearch] = useState("");

  if (isLoading) return <p>Загрузка</p>;
  if (isError) return <p>Ошибка</p>;

  const filtered = data.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Список пользователей</h2>
      <input
        type="text"
        placeholder="Поиск по имени"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", marginBottom: "12px", width: "250px" }}
      />

      <ul>
        {filtered.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
