import Fastify from 'fastify';
import cors from '@fastify/cors';
import { experience, profile, projects, skills, testimonials, timeline } from './data.js';

const fastify = Fastify({
  logger: true
});

await fastify.register(cors, {
  origin: true,
  methods: ['GET']
});

fastify.get('/api/profile', async () => ({ profile }));
fastify.get('/api/skills', async () => ({ skills }));
fastify.get('/api/experience', async () => ({ experience }));
fastify.get('/api/projects', async () => ({ projects }));
fastify.get('/api/testimonials', async () => ({ testimonials }));
fastify.get('/api/timeline', async () => ({ timeline }));

const port = Number(process.env.PORT) || 4000;
const host = process.env.HOST || '0.0.0.0';

try {
  await fastify.listen({ port, host });
  fastify.log.info(`Portfolio API listening on ${host}:${port}`);
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
