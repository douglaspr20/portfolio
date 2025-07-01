export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
}
