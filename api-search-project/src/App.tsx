import { useEffect, useState } from "react";
import UsersList from "./components/UsersList/UsersList";
import PostsList from "./components/PostsList/PostsList";
import type { User } from "./types/user";
import type { Post } from "./types/post";
import "./App.css";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data: User[] = await response.json();
      setUsers(data);
    }

    loadUsers();
  }, []);

  async function handleUserSelect(userId: number) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    );
    const data: Post[] = await response.json();
    setPosts(data);
  }

  return (
    <div className="app">
      <UsersList users={users} onSelect={handleUserSelect} />
      <PostsList posts={posts} />
    </div>
  );
}

export default App;
