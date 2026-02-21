import UsersCard from "../UsersCard/UsersCard";
import type { User } from "../../types/user";
import style from "./style.module.css";

interface Props {
    users: User[];
    onSelect: (userId: number) => void;
}

export default function UsersList({ users, onSelect }: Props) {
    return (
        <div className={style.usersList}>
            <h2>Users List</h2>
            {users.map((u) => (
                <UsersCard key={u.id} user={u} onClick={(onSelect)} />
            ))}
        </div>
    );
}