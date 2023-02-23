interface Skills {
  name: string;
  description: string;
  link: string;
  type: string;
  image: string;
}

export interface SkillProps {
  skills: Skills[];
}

interface Project {
  title: string;
  imageLight: string;
  path: string;
  link: string;
  description: string;
  techStack: string;

}

export interface ProjectProps {
  projects: Project[];
}
