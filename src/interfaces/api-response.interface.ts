// Estructura genérica para respuestas de listas (paginadas)
export interface IBaseApiResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}
