import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  compact?: boolean;
}

const FORMSPREE_URL = 'https://formspree.io/f/xpzvkyal';

const ContactForm = ({ compact = false }: ContactFormProps) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus('submitting');

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data
      });

      if (!response.ok) {
        throw new Error('Network error');
      }

      setStatus('success');
      form.reset();
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-4"
    >
      <div className={compact ? 'grid gap-4 md:grid-cols-1' : 'grid gap-4 md:grid-cols-2'}>
        <label className="flex flex-col gap-2 text-sm text-slate-600 dark:text-white/70">
          Name
          <input
            name="name"
            type="text"
            required
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-sky/60 focus:outline-none dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/30"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-slate-600 dark:text-white/70">
          Email
          <input
            name="email"
            type="email"
            required
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-sky/60 focus:outline-none dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/30"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm text-slate-600 dark:text-white/70">
        Project details
        <textarea
          name="message"
          rows={compact ? 4 : 6}
          required
          className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-sky/60 focus:outline-none dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/30"
        />
      </label>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        disabled={status === 'submitting'}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-sky px-8 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-sky/60"
      >
        {status === 'submitting' ? 'Sending…' : status === 'success' ? 'Message sent!' : 'Send Message'}
      </motion.button>
      {status === 'error' && (
        <p className="text-sm text-red-500 dark:text-red-300">Something went wrong. Please try again or email mail@wylz.dev.</p>
      )}
    </motion.form>
  );
};

export default ContactForm;
