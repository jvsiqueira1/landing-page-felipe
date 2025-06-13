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
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="opacity-60">Principais áreas de atuação</p>
          <h2 className="text-4xl font-semibold">Saiba como posso te ajudar</h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((item, index) => (
                <div
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
                  key={index}
                >
                  <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex-1 flex items-start justify-between">
                      <div className="flex gap-3">
                        <span className="text-3xl">{item.icon}</span>
                        <div>
                          <h3 className="font-semibold text-xl my-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-sm select-none">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-700 pt-4">
                      <div>
                        <a
                          href={`https://api.whatsapp.com/send?phone=5566999985145&text=${encodeURIComponent(
                            item.linkText
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 hover:bg-[#ed8e53] px-4 py-1 rounded-md duration-300"
                        >
                          <WhatsappLogoIcon className="w-5 h-5" />
                          Entrar em contato
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollNext}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
