import type { User } from "../types";
import MessageDisplay from "./MessageDisplay";

type Props = {
  user: User;
};

export default function UserDisplay({ user }: Props) {
  return (
    <div className="flex justify-center gap-x-24">
      <div className="flex h-20 w-48 items-center justify-center rounded-sm bg-neutral-700 drop-shadow-md">
        <p className="text-xl font-bold text-gray-200">{user.name}</p>
      </div>
      <div>
        {user.messages.map((message, index) => (
          <MessageDisplay message={message} index={index} key={index} />
        ))}
      </div>
    </div>
  );
}
