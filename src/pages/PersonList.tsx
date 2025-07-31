import { useState } from "react";
import Container from "@components/base/Container";
import UserProfile from "../components/UserProfile";

const PersonList = () => {
  const [username, setUsername] = useState("edison-r");

  return (
    <Container>
      <div className="flex flex-col items-center gap-4">
        <input
          type="text"
          placeholder="Escribe un usuario de GitHub..."
          className="border p-2 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <UserProfile username={username} />
      </div>
    </Container>
  );
};

export default PersonList;
