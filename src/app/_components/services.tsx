"use client";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Target,
  Compass,
  PieChart,
  Search,
  Gem,
  Lightbulb,
} from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react";

const services = [
  {
    title: "Análise de Perfil e Objetivos",
    description:
      "Entendo profundamente seus objetivos de vida e sua tolerância a riscos. Esse diagnóstico é o ponto de partida para criarmos uma estratégia de investimentos que realmente funcione para você.",
    icon: <Target />,
    linkText:
      "Olá, vi no seu site sobre 'Análise de Perfil e Objetivos' e gostaria de mais informações.",
  },
  {
    title: "Planejamento de Investimentos",
    description:
      "Desenvolvo um plano estratégico e exclusivo, alinhando os melhores produtos do mercado aos seus sonhos, seja a aposentadoria, a compra de um imóvel ou a educação dos seus filhos.",
    icon: <Compass />,
    linkText:
      "Olá, vi no seu site sobre 'Planejamento de Investimentos Sob Medida' e gostaria de mais informações.",
  },
  {
    title: "Montagem e Diversificação de Carteira",
    description:
      "Construo para você uma carteira de investimentos sólida e diversificada, selecionando os melhores ativos para maximizar seu potencial de retorno e, ao mesmo tempo, proteger seu patrimônio.",
    icon: <PieChart />,
    linkText:
      "Olá, vi no seu site sobre 'Montagem e Diversificação de Carteira' e gostaria de mais informações.",
  },
  {
    title: "Acompanhamento Contínuo",
    description:
      "O mercado financeiro é dinâmico. Monitoro seus investimentos de perto e faço ajustes estratégicos sempre que necessário para garantir que sua carteira continue alinhada aos seus objetivos.",
    icon: <Search />,
    linkText:
      "Olá, vi no seu site sobre 'Acompanhamento Contínuo' e gostaria de mais informações.",
  },
  {
    title: "Acesso a Produtos Exclusivos",
    description:
      "Ofereço acesso a produtos de investimento sofisticados e oportunidades que, muitas vezes, não estão disponíveis ao investidor comum, ampliando suas possibilidades de ganho.",
    icon: <Gem />,
    linkText:
      "Olá, vi no seu site sobre 'Acesso a Produtos Exclusivos' e gostaria de mais informações.",
  },
  {
    title: "Educação Financeira e Relatórios",
    description:
      "Mais que um assessor, sou seu parceiro. Envio relatórios claros e te ajudo a entender cada decisão, para que você tenha total confiança e segurança sobre o seu dinheiro.",
    icon: <Lightbulb />,
    linkText:
      "Olá, vi no seu site sobre 'Educação Financeira e Relatórios' e gostaria de mais informações.",
  },
];

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": {
        slidesToScroll: 3,
      },
    },
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section id="services" className="section-light py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <p className="text-accent-primary font-medium mb-4">
            Principais áreas de atuação
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">
            Saiba como posso te ajudar
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ofereço serviços especializados em assessoria de investimentos com
            atendimento personalizado e dedicação total aos seus objetivos
            financeiros.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((item, index) => (
                <div
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-4"
                  key={index}
                >
                  <article className="card h-full flex flex-col group hover:shadow-lg transition-shadow duration-300">
                    <div className="flex-1 space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center">
                          <span className="text-accent-primary text-xl">
                            {item.icon}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-xl text-text-dark mb-3 group-hover:text-accent-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-border-subtle">
                      <a
                        href={`https://api.whatsapp.com/send?phone=5566999985145&text=${encodeURIComponent(
                          item.linkText
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 text-accent-primary font-medium hover:text-accent-primary/80 transition-colors group"
                      >
                        Saiba mais
                        <span className="group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-12 h-12 absolute left-2 -translate-y-1/2 top-1/2 z-10 hover:shadow-xl transition-shadow border border-border-subtle"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-6 h-6 text-text-dark" />
          </button>

          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-12 h-12 absolute right-2 -translate-y-1/2 top-1/2 z-10 hover:shadow-xl transition-shadow border border-border-subtle"
            onClick={scrollNext}
          >
            <ChevronRight className="w-6 h-6 text-text-dark" />
          </button>
        </div>
      </div>
    </section>
  );
}
