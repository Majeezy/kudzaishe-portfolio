export type ProjectCategory =
  | "AI Applications"
  | "Web Applications"
  | "Business Automation"
  | "Business Websites"
  | "Productivity Tools"
  | "IT & Cybersecurity Projects";

export type ProjectStatus =
  | "Academic Project"
  | "Independent Project"
  | "Client Project"
  | "Personal Product"
  | "Experimental";

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  status: ProjectStatus;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  github?: string;
  demo?: string;
  screenshots?: string[];
  featured?: boolean;
};
