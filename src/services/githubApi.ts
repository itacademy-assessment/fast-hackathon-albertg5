import type { GitHubRepo } from '../types/github';

const GITHUB_API_BASE = 'https://api.github.com';

export class GitHubApiError extends Error {
  public status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = 'GitHubApiError';
    this.status = status;
  }
}

export async function fetchUserRepos(username: string): Promise<GitHubRepo[]> {
  if (!username.trim()) {
    throw new GitHubApiError('El nombre de usuario es requerido');
  }

  const response = await fetch(
    `${GITHUB_API_BASE}/users/${username}/repos?sort=updated&per_page=20`
  );

  if (!response.ok) {
    switch (response.status) {
      case 404:
        throw new GitHubApiError('Usuario no encontrado', 404);
      case 403:
        throw new GitHubApiError('Límite de API excedido. Intenta más tarde', 403);
      case 401:
        throw new GitHubApiError('No autorizado', 401);
      default:
        throw new GitHubApiError(`Error del servidor: ${response.status}`, response.status);
    }
  }

  return response.json();
}

export async function fetchUserInfo(username: string) {
  const response = await fetch(`${GITHUB_API_BASE}/users/${username}`);
  
  if (!response.ok) {
    throw new GitHubApiError('Error al obtener información del usuario', response.status);
  }
  
  return response.json();
}