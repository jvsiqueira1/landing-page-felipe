import MapComponent from "../components/MapComponent";

export function Map() {
  return (
    <section className="section-light py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Informações de contato */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-accent-primary font-medium">
                Localização e contato
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
                Venha até nosso escritório
              </h2>
              <p className="text-lg text-muted-foreground">
                Estamos localizados em uma área de fácil acesso em Cuiabá, com
                estacionamento disponível para nossos clientes.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-accent-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-text-dark mb-2">
                    Endereço
                  </h3>
                  <p className="text-muted-foreground">
                    Av. das Flores, 945 - Jardim Cuiabá
                    <br />
                    Cuiabá - MT, CEP 78.043-172
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-accent-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-text-dark mb-2">
                    Telefone
                  </h3>
                  <p className="text-muted-foreground">
                    (66) 99998-5145
                    <br />
                    (66) 88888-8888
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-accent-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-text-dark mb-2">
                    Horário de funcionamento
                  </h3>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 8h às 18h
                    <br />
                    Sábado: 8h às 12h
                    <br />
                    Atendimento personalizado por agendamento
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://api.whatsapp.com/send?phone=5566999985145&text=Olá! Gostaria de agendar um horário para ir ao escritório."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-3"
              >
                Agendar visita
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Mapa */}
          <div className="relative">
            <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <MapComponent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
