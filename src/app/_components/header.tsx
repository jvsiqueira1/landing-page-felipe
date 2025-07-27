export function Header() {
  return (
    <header className="section-dark relative overflow-hidden border-b border-border-subtle/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-white">Felipe Lozich</h1>
            <span className="text-sm text-white/80 font-medium">
              Assessor de Investimentos
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-4 text-sm text-white/80">
              <span>Atendimento personalizado</span>
              <span>•</span>
              <span>(66) 99998-5145</span>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=5566999985145&text=Olá! Gostaria de receber orientações sobre investimentos."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm px-4 py-2"
            >
              Agende sua consulta
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
