import profile from '../data/profile.json';
import services from '../data/services.json';
import skills from '../data/skills.json';
import projects from '../data/projects.json';
import experience from '../data/experience.json';
import type { Experience, Profile, Project, Service, Skill } from './types';

export const profileData = profile as Profile;
export const servicesData = services as Service[];
export const skillsData = skills as Skill[];
export const projectsData = projects as Project[];
export const experiencesData = experience as Experience[];
