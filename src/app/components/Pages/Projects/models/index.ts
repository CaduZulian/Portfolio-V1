export interface IGithubRepository {
  id: number;
  name: string;
  description: string | null;
  default_branch: string;
  html_url: string;
  homepage: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  created_at: string;
  topics: string[];
}
