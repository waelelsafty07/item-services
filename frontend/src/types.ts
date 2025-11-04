export type Skill = {
  name: string;
};

export type ServiceId = 'web' | 'mobile' | 'erp' | 'uiux' | 'branding' | 'social';

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

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
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
    instagram: string;
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
