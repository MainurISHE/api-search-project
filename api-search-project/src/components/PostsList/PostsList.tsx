import type { Post } from "../../types/post";
import style from "./style.module.css";

interface Props {
    posts: Post[];
}

export default function PostsList({ posts }: Props) {
    return (
        <div className={style.postsList}>
            <h2>Posts List</h2>
            {posts.map((p) => (
                <div key={p.id} className={style.postCard}>
                    {p.title}
                </div>
            ))}
        </div>
    );
}