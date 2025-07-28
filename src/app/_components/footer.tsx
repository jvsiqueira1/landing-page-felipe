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
              <p>CEP: 78.043-172</p>
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
