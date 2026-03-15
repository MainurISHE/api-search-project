import { useEffect, useState } from "react";
import UsersList from "./components/UsersList/UsersList";
import PostsList from "./components/PostsList/PostsList";
import type { User } from "./types/user";
import type { Post } from "./types/post";
import "./App.css";
import { api } from "./api/api";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get<User[]>("https://jsonplaceholder.typicode.com/users");
      setUsers(response.data);
    }

    loadUsers();
  }, []);

  async function handleUserSelect(userId: number) {
    const response = await api.get<Post[]>(`/posts?userId=${userId}`);
    setPosts(response.data);
  }

  return (
    <div className="app">
      <UsersList users={users} onSelect={handleUserSelect} />
      <PostsList posts={posts} />
    </div>
  );
}

export default App;
