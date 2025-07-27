export function Results() {
  return (
    <section className="section-dark py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Nós vivemos de resultados
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Mais de 5 anos de experiência no mercado financeiro com centenas de
            clientes satisfeitos e objetivos financeiros alcançados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-black text-white mb-4">
              200+
            </div>
            <p className="text-lg text-white/80 font-medium">
              Clientes satisfeitos
            </p>
          </div>

          <div className="text-center">
            <div className="text-5xl md:text-6xl font-black text-white mb-4">
              5+
            </div>
            <p className="text-lg text-white/80 font-medium">
              Anos de experiência no mercado financeiro
            </p>
          </div>

          <div className="text-center">
            <div className="text-5xl md:text-6xl font-black text-white mb-4">
              100%
            </div>
            <p className="text-lg text-white/80 font-medium">
              Atendimento personalizado
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white/10 rounded-full px-8 py-4">
            <div className="flex items-center space-x-2 text-white/90">
              <div className="w-3 h-3 bg-accent-primary rounded-full"></div>
              <span className="text-sm font-medium">
                Atendimento personalizado
              </span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <div className="w-3 h-3 bg-accent-secondary rounded-full"></div>
              <span className="text-sm font-medium">
                Estratégias sob medida
              </span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <span className="text-sm font-medium">Resultados garantidos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
