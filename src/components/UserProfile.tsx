import { useEffect, useState } from "react";
import { fetchUserInfo } from "../services/githubApi";
import type { GitHubUser, FetchState } from "../types/github";

interface UserProfileProps {
  username: string;
}

export default function UserProfile({ username }: UserProfileProps) {
  const [state, setState] = useState<FetchState<GitHubUser>>({
    data: null,
    isLoading: false,
    error: null,
  });

  useEffect(() => {
    if (!username) return;

    setState({ data: null, isLoading: true, error: null });

    fetchUserInfo(username)
      .then((user) => setState({ data: user, isLoading: false, error: null }))
      .catch((err) => setState({ data: null, isLoading: false, error: err }));
  }, [username]);

  // Loading
  if (state.isLoading) {
    return <p>Cargando información de {username}...</p>;
  }

  // Error
  if (state.error) {
    return <p style={{ color: "red" }}>⚠️ {state.error.message}</p>;
  }

  // No data
  if (!state.data) {
    return <p>Introduce un usuario para ver su perfil.</p>;
  }

  // Render del perfil
  const user = state.data;
  return (
    <div className="flex flex-col items-center border rounded-xl p-4 w-80 shadow-md bg-white">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-24 h-24 rounded-full mb-2"
      />
      <h2 className="text-lg font-bold">{user.name || user.login}</h2>
      {user.bio && <p className="text-sm text-gray-600 mb-2">{user.bio}</p>}

      <div className="text-sm text-gray-700">
        <p>👥 {user.followers} seguidores · {user.following} siguiendo</p>
        <p>📦 {user.public_repos} repos públicos</p>
      </div>

      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 text-blue-500 hover:underline"
      >
        Ver perfil en GitHub
      </a>
    </div>
  );
}
