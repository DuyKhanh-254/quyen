export type Assignment = {
  id: number;
  code: string;
  category: string;
  title: string;
  shortTitle: string;
  description: string;
  objective: string;
  process: string[];
  lesson: string;
  skills: string[];
  tools: string[];
  pageCount: number;
  fileUrl: string;
  color: string;
};

export type Skill = {
  name: string;
  level: number;
  description: string;
};
