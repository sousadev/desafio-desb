export interface Repo {
    id: number;
    full_name: string;
    name: string;
    language: string;
    stars_count?: number;
    stargazers_count?: number;
    description?: string;
}