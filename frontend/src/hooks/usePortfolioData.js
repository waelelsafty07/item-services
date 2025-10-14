import { useEffect, useState } from 'react';

const endpoints = {
  profile: '/api/profile',
  skills: '/api/skills',
  experience: '/api/experience',
  projects: '/api/projects',
  testimonials: '/api/testimonials',
  timeline: '/api/timeline'
};

export function usePortfolioData() {
  const [data, setData] = useState({
    profile: null,
    skills: [],
    experience: [],
    projects: [],
    testimonials: [],
    timeline: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        const entries = await Promise.all(
          Object.entries(endpoints).map(async ([key, url]) => {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`Failed to load ${key}`);
            }
            const body = await response.json();
            return [key, body[key]];
          })
        );

        if (!active) {
          return;
        }

        setData(Object.fromEntries(entries));
        setLoading(false);
      } catch (err) {
        if (!active) {
          return;
        }
        console.error(err);
        setError(err instanceof Error ? err.message : 'Unknown error');
        setLoading(false);
      }
    }

    load();

    return () => {
      active = false;
    };
  }, []);

  return { data, loading, error };
}
