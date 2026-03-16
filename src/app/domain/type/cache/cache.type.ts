/**
 * @description Tipo genérico que representa la respuesta
 * de una petición a una API que devuelve una lista de elementos.
 *
 * Se utiliza para tipar funciones asincrónicas que retornan
 * un arreglo de datos envuelto en una Promise.
 *
 * @template T - Tipo de los elementos contenidos en el arreglo.
 *
 * @example
 * const fetchRepos = (): GitHubResponseType<IGitHubRepo> => {
 *   return fetch("/repos").then(res => res.json());
 * };
 */
export type GitHubResponseType<T> = Promise<T[]>;
