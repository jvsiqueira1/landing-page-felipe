import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import felipeImg from "../../../public/teste-semfundo.png";
import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-[#ed8e53] text-white relative overflow-hidden">
      <div>
        <Image
          src={felipeImg}
          alt="Foto do felipe"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60 lg:hidden"
        />
        <div className="absolut inset-0 bg-black opacity-40 md:hidden"></div>
      </div>
      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6 mt-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-10">
              Está precisando de um assessor de investimentos?
            </h1>
            <p className="text-sm lg:text-lg mb-4">
              Posso te ajudar, receba uma orientação imediata com apenas 1
              clique e tire todas as suas dúvidas.
            </p>

            <div className="mt-8 py-2">
              <a
                href="https://api.whatsapp.com/send?phone=5566999985145&text=Ol%C3%A1%2C%20Felipe!%20Gostaria%20de%20receber%20orienta%C3%A7%C3%B5es%20sobre%20investimentos."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#ed8e53] px-4 py-2 rounded-md hover:bg-gray-200 transition-colors flex items-center justify-center w-fit gap-2"
              >
                <WhatsappLogoIcon className="w-5 h-5" />
                Fale comigo
              </a>
            </div>
          </div>

          <div className="hidden md:block h-full relative">
            <Image
              src={felipeImg}
              alt="Foto do Felipe"
              className="object-contain"
              fill
              sizes="(max-width: 768px) 0vw, 50vw"
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </section>
  );
}
