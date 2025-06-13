export function Footer() {
  return (
    <footer>
      <div className="bg-[#1e293b] text-white py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-2xl font-bold tracking-tight">
            <h1>Felipe Florêncio</h1>
            <p className="text-gray-400 text-sm">Assessor de investimentos</p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/felipe-flor%C3%AAncio-14ab57204/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#ed8e53] transition"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-12h4v2a4 4 0 014-2zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 text-center">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} Felipe. Todos os direitos reservados.
          </p>
          <p className="text-sm mt-2">
            <a
              href="https://www.linkedin.com/in/joaovitorsiqueira1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline transition duration-300"
            >
              Desenvolvido por João Vitor
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
