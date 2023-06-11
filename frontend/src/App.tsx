import UserDisplay from "./components/UserDisplay";

import { useQuery } from "urql";
import { GetUsersDocument } from "./graphql/generated";

export default function App() {
  const [results] = useQuery({
    query: GetUsersDocument,
  });
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center gap-y-12 overflow-scroll bg-zinc-800 p-4">
        {results.data?.users.map((user, index) => (
          <UserDisplay user={user} key={index} />
        ))}
      </div>
    </>
  );
}
