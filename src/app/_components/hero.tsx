import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import felipeImg from "../../../public/teste-semfundo.png";
import Image from "next/image";

export function Hero() {
  return (
    <section className="section-dark relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={felipeImg}
          alt="Felipe Lozich - Assessor de Investimentos"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark/90 to-background-dark/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white">
                Está precisando de um{" "}
                <span className="text-accent-primary">
                  assessor de investimentos
                </span>
                ?
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                Assessor com mais de 5 anos de experiência no mercado
                financeiro. Posso te ajudar a alcançar seus objetivos
                financeiros com estratégias personalizadas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=5566999985145&text=Olá! Felipe! Gostaria de receber orientações sobre investimentos."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-3"
              >
                <WhatsappLogoIcon className="w-6 h-6" />
                Fale comigo agora
              </a>
              <a
                href="#services"
                className="btn-outline text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-background-dark"
              >
                Saiba mais
              </a>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2 text-white/80">
                <div className="w-2 h-2 bg-accent-primary rounded-full"></div>
                <span className="text-sm font-medium">
                  Atendimento personalizado
                </span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <div className="w-2 h-2 bg-accent-secondary rounded-full"></div>
                <span className="text-sm font-medium">
                  Estratégias sob medida
                </span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative w-full h-[600px]">
              <Image
                src={felipeImg}
                alt="Felipe Lozich - Assessor de Investimentos"
                fill
                sizes="(max-width: 1024px) 0vw, 50vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
