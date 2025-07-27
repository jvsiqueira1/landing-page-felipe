import Image from "next/image";
import profileImage from "../../../public/teste-semfundo.png";

export function About() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Imagem do assessor */}
          <div className="relative">
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden">
              <Image
                src={profileImage}
                alt="Felipe Lozich - Assessor de Investimentos"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/20 to-transparent"></div>
            </div>

            {/* Badge de experiência */}
            <div className="absolute -bottom-6 -right-6 bg-accent-primary text-white px-6 py-3 rounded-lg shadow-lg">
              <div className="text-2xl font-black">5+</div>
              <div className="text-sm font-medium">Anos de experiência</div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-accent-primary font-medium">
                O assessor a frente do escritório
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
                Felipe Lozich
              </h2>
              <h3 className="text-xl text-muted-foreground font-medium">
                Assessor especialista em investimentos
              </h3>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Com mais de 5 anos de experiência no mercado financeiro, sou um
                profissional apaixonado por tecnologia e inovação, focado em
                assessoria de investimentos. Minha trajetória, impulsionada por
                uma curiosidade inata sobre o funcionamento dos mercados, me
                levou a aprofundar meus conhecimentos neste campo.
              </p>

              <p>
                Ao longo da minha carreira, tive o privilégio de colaborar com
                diversas empresas e indivíduos, desenvolvendo e implementando
                estratégias personalizadas e eficazes que os auxiliaram a
                alcançar seus objetivos financeiros. Minha metodologia é
                centrada no cliente, pautada em uma compreensão profunda de suas
                necessidades para entregar soluções que geram resultados
                concretos.
              </p>

              <p>
                Acredito firmemente que a educação financeira é a chave para o
                sucesso de qualquer investimento. Por isso, dedico-me ativamente
                a compartilhar conhecimento, capacitando pessoas a tomar
                decisões financeiras mais informadas e seguras.
              </p>
            </div>

            {/* Credenciais */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent-primary rounded-full"></div>
                <span className="text-sm font-medium text-text-dark">
                  Especialista em Mercado Financeiro
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent-primary rounded-full"></div>
                <span className="text-sm font-medium text-text-dark">
                  Certificação CVM
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent-primary rounded-full"></div>
                <span className="text-sm font-medium text-text-dark">
                  Análise de Investimentos
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent-primary rounded-full"></div>
                <span className="text-sm font-medium text-text-dark">
                  Atendimento personalizado
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <a
                href="https://api.whatsapp.com/send?phone=5566999985145&text=Olá! Felipe! Gostaria de agendar uma consulta sobre investimentos."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-3"
              >
                Agende sua consulta
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
