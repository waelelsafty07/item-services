import { FormEvent, useState } from 'react';

const FORM_ENDPOINT = 'https://formspree.io/f/mwkjoqya';

export const ContactForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Thanks for reaching out! I will get back to you shortly.');
        form.reset();
        onSuccess?.();
      } else {
        throw new Error('Request failed');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setMessage('Something went wrong. Please email mail@wylz.dev.');
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-brand-light/70">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-brand-light/40 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/40"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-brand-light/70">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-brand-light/40 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/40"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-light/70">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-brand-light/40 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/40"
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-accent/20 transition hover:bg-brand-accent/90 disabled:cursor-not-allowed disabled:opacity-70"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Sending…' : 'Send message'}
      </button>
      {status !== 'idle' ? (
        <p className={`text-sm ${status === 'success' ? 'text-emerald-400' : 'text-red-400'}`}>
          {message}
        </p>
      ) : null}
    </form>
  );
};
