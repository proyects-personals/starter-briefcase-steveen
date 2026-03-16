import {
  CACHE_TTL_MS,
  GITHUB_API_BASE_URL,
  MAX_REPOSITORIES_PER_REQUEST,
  type GitHubResponseType,
  type ICacheEntry,
  type IGitHubRepo,
} from "@domain";

/**
 * @description
 * Type guard para validar una entrada de cache.
 */
const isCacheEntry = <T>(value: unknown): value is ICacheEntry<T> => {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  if (!("timestamp" in value) || !("data" in value)) {
    return false;
  }

  return true;
};

/**
 * @description
 * Obtiene el token de autenticación desde las variables de entorno.
 *
 * @returns Token de GitHub o undefined si no existe
 */
const getToken = (): string | undefined => {
  const token: unknown = import.meta.env.VITE_GITHUB_TOKEN;

  if (typeof token === "string" && token.length > 0) {
    return token;
  }

  return undefined;
};

/**
 * @description
 * Construye los headers necesarios para las peticiones HTTP
 * hacia la API de GitHub.
 *
 * @returns Objeto con headers HTTP
 */
const buildHeaders = (): HeadersInit => {
  const token = getToken();

  if (token === undefined) {
    return {};
  }

  return {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
  };
};

/**
 * Obtiene datos almacenados en caché desde localStorage.
 *
 * @template T - Tipo de dato almacenado
 * @param key - Clave única de la caché
 *
 * @returns Datos almacenados o null si no existen o expiraron
 */
const getCache = <T>(key: string): T | null => {
  const raw = localStorage.getItem(key);

  if (raw === null) {
    return null;
  }

  let parsed: unknown;

  try {
    parsed = JSON.parse(raw);
  } catch {
    return null;
  }

  if (!isCacheEntry<T>(parsed)) {
    return null;
  }

  const isExpired = Date.now() - parsed.timestamp > CACHE_TTL_MS;

  if (isExpired) {
    localStorage.removeItem(key);
    return null;
  }

  return parsed.data;
};

/**
 * Guarda datos en caché dentro de localStorage.
 *
 * @template T - Tipo de dato almacenado
 * @param key - Clave de almacenamiento
 * @param data - Información a guardar
 */
const setCache = <T>(key: string, data: T): void => {
  const payload: ICacheEntry<T> = {
    timestamp: Date.now(),
    data,
  };

  localStorage.setItem(key, JSON.stringify(payload));
};

/**
 * Realiza una petición HTTP genérica a la API de GitHub
 * y aplica cache automático.
 *
 * @template T - Tipo de datos esperado
 *
 * @param url - URL de la petición
 *
 * @returns Lista de elementos obtenidos desde la API
 */
const request = async <T>(url: string): Promise<T[]> => {
  const cached = getCache<T[]>(url);

  if (cached !== null) {
    return cached;
  }

  const response = await fetch(url, {
    headers: buildHeaders(),
  });

  if (!response.ok) {
    return [];
  }

  const data: unknown = await response.json();

  if (!Array.isArray(data)) {
    return [];
  }

  const result: T[] = [];

  for (const item of data) {
    result.push(item);
  }

  setCache(url, result);

  return result;
};

/**
 * Construye la URL para obtener repositorios de un usuario.
 *
 * @param username - Nombre del usuario de GitHub
 *
 * @returns URL completa de la petición
 */
const buildUserReposUrl = (username: string): string =>
  `${GITHUB_API_BASE_URL}/users/${username}/repos?per_page=${MAX_REPOSITORIES_PER_REQUEST}`;

/**
 * Construye la URL para obtener repositorios de una organización.
 *
 * @param organization - Nombre de la organización
 *
 * @returns URL completa de la petición
 */
const buildOrgReposUrl = (organization: string): string =>
  `${GITHUB_API_BASE_URL}/orgs/${organization}/repos?per_page=${MAX_REPOSITORIES_PER_REQUEST}`;

/**
 * Construye la URL para obtener commits de un repositorio.
 *
 * @param repo - Repositorio de GitHub
 *
 * @returns URL de commits del repositorio
 */
const buildCommitsUrl = (repo: IGitHubRepo): string =>
  repo.commits_url.replace("{/sha}", "");

/**
 * Obtiene los repositorios de un usuario.
 *
 * @param username - Nombre del usuario
 *
 * @returns Lista de repositorios
 */
export const fetchUserRepos = (
  username: string,
): GitHubResponseType<IGitHubRepo> =>
  request<IGitHubRepo>(buildUserReposUrl(username));

/**
 * Obtiene los repositorios de una organización.
 *
 * @param organization - Nombre de la organización
 *
 * @returns Lista de repositorios
 */
export const fetchOrgRepos = (
  organization: string,
): GitHubResponseType<IGitHubRepo> =>
  request<IGitHubRepo>(buildOrgReposUrl(organization));

/**
 * Obtiene el número total de commits de un repositorio.
 *
 * @param repo - Repositorio de GitHub
 *
 * @returns Número de commits
 */
export const fetchRepoCommits = async (repo: IGitHubRepo): Promise<number> => {
  const commits = await request<unknown>(buildCommitsUrl(repo));

  return commits.length;
};
