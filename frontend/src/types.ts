export type Skill = {
  name: string;
};

export type ServiceId =
  | 'web'
  | 'mobile'
  | 'erp'
  | 'uiux'
  | 'branding'
  | 'social'
  | 'erpnext'
  | 'backend-architecture'
  | 'performance'
  | 'automation'
  | 'cloud'
  | 'mentorship';

export type Service = {
  id: ServiceId;
  title: string;
  description: string;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
};

export type Profile = {
  name: string;
  tagline: string;
  title: string;
  location: string;
  about: string;
  summary: string;
  email: string;
  phone: string;
  social: {
    github: string;
    linkedin: string;
    website?: string;
    instagram?: string;
  };
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  workType: string;
  summary: string;
  achievements: string[];
};
