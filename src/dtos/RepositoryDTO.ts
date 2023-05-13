export interface RepositoryDTO {
  id: number;
  name: string;
  full_name: string;
  description: string;
  stargazers_count: number;
  watchers_count: number;
  updated_at: string;
  language: string;
  topics: string[];
}
