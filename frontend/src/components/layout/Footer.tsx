const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-10 text-sm text-slate-500 dark:border-white/10 dark:bg-midnight/80 dark:text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p>
          © {year} Wael Elsafty — <span className="text-slate-700 dark:text-white">wylz.dev</span>
        </p>
        <div className="flex gap-6">
          <a href="https://github.com/wylzdev" target="_blank" rel="noreferrer" className="hover:text-sky">
            GitHub
          </a>
          <a href="https://linkedin.com/in/wael-elsafty" target="_blank" rel="noreferrer" className="hover:text-sky">
            LinkedIn
          </a>
          <a href="https://instagram.com/wylz.dev" target="_blank" rel="noreferrer" className="hover:text-sky">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
