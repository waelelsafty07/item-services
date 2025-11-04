export interface SkillBadge {
  id: string;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  pill: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
}
