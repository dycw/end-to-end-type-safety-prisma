import UserDisplay from "./components/UserDisplay";
import type { User } from "./types";

export default function App() {
  const users: User[] = [
    {
      name: "Sabin Adams",
      messages: [{ body: "Hey there!" }, { body: "What's up!" }],
    },
  ];
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center gap-y-12 overflow-scroll bg-zinc-800 p-4">
        {users.map((user, index) => (
          <UserDisplay user={user} key={index} />
        ))}
      </div>
    </>
  );
}
