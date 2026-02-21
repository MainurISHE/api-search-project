import type { User } from "../../types/user";

interface Props {
    user: User;
    onClick: (userId: number) => void;
}

export default function UsersCard({ user, onClick }: Props) {
    return (
        <div className="card" onClick={() => onClick(user.id)}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.company.name}</p>
        </div>
    );
}
