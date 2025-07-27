export function Footer() {
  return (
    <footer className="section-dark">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo e descrição */}
          <div className="md:col-span-2 space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Felipe Lozich</h3>
              <p className="text-white/80 font-medium">
                Assessor de Investimentos
              </p>
            </div>
            <p className="text-white/70 leading-relaxed max-w-md">
              Especialista em assessoria de investimentos com mais de 5 anos de
              experiência. Atendimento personalizado para seus objetivos
              financeiros.
            </p>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contato</h4>
            <div className="space-y-2 text-white/70">
              <p>(66) 99998-5145</p>
              <p>(66) 88888-8888</p>
              <p>contato@felipeflorencio.com.br</p>
            </div>
          </div>

          {/* Endereço */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Endereço</h4>
            <div className="space-y-2 text-white/70">
              <p>Av. das Flores, 945</p>
              <p>Jardim Cuiabá - Cuiabá/MT</p>
              <p>CEP: 78043-000</p>
            </div>
          </div>
        </div>

        {/* Links úteis */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">
                Áreas de Atuação
              </h4>
              <div className="space-y-2 text-white/70">
                <p>Análise de Perfil</p>
                <p>Planejamento Financeiro</p>
                <p>Diversificação de Carteira</p>
                <p>Acompanhamento Contínuo</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Serviços</h4>
              <div className="space-y-2 text-white/70">
                <p>Assessoria de Investimentos</p>
                <p>Consultoria Financeira</p>
                <p>Educação Financeira</p>
                <p>Relatórios Personalizados</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Informações</h4>
              <div className="space-y-2 text-white/70">
                <p>Certificação CVM</p>
                <p>Especialista em Mercado Financeiro</p>
                <p>Análise de Investimentos</p>
                <p>Atendimento Personalizado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/70 text-sm">
              © {new Date().getFullYear()} Felipe Lozich. Todos os direitos
              reservados.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.linkedin.com/in/felipe-florêncio-14ab57204/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-12h4v2a4 4 0 014-2zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/felipeflorencio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-white/50 text-xs">
              Desenvolvido por{" "}
              <a
                href="https://www.linkedin.com/in/joaovitorsiqueira1/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                João Vitor
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
