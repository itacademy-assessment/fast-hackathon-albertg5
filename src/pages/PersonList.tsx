import Container from "@components/base/Container";
import UserProfile from "../components/UserProfile"; // Ajusta la ruta según tu proyecto

const usernames = [
  "edison-r",
  "gerard-asuncion",
  "JlBestMc",
  "antoniofelices",
  "octocat",
  "albertvallsbe",
];

export default function PersonList() {
  return (
    <Container>
      <h1 className="text-2xl font-bold mb-6">Los más chingones del UNIVERSO</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {usernames.map((username) => (
          <UserProfile key={username} username={username} />
        ))}
      </div>
    </Container>
  );
}
