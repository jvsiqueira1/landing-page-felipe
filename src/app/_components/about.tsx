import Image from "next/image";
import profileImage from "../../../public/teste-semfundo.png";

export function About() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center justify-center text-center mb-8">
          <p className="opacity-60">Sobre mim</p>
          <h2 className="text-4xl font-semibold">Quem sou eu</h2>
        </div>
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="mb-12 text-center">
            <Image
              src={profileImage}
              alt="Foto do Felipe"
              priority
              className="object-cover"
              quality={100}
            />
          </div>
          <div className="max-w-3xl mx-auto text-gray-700 flex flex-col items-center justify-center">
            <p>
              Com mais de 5 anos de experiência no mercado financeiro, sou um
              profissional apaixonado por tecnologia e inovação, focado em
              assessoria de investimentos. Minha trajetória, impulsionada por
              uma curiosidade inata sobre o funcionamento dos mercados, me levou
              a aprofundar meus conhecimentos neste campo.
            </p>
            <p className="mt-4">
              Ao longo da minha carreira, tive o privilégio de colaborar com
              diversas empresas e indivíduos, desenvolvendo e implementando
              estratégias personalizadas e eficazes que os auxiliaram a alcançar
              seus objetivos financeiros. Minha metodologia é centrada no
              cliente, pautada em uma compreensão profunda de suas necessidades
              para entregar soluções que geram resultados concretos
            </p>
            <p className="mt-4">
              Que bom que você quer aprimorar seu texto! Ele já é um bom começo.
              Aqui estão algumas opções para torná-lo mais impactante e
              profissional, com diferentes nuances para você escolher. Opção 1:
              Mais Dinâmica e Focada em Resultados "Com mais de 5 anos de
              experiência no mercado financeiro, sou um profissional apaixonado
              por tecnologia e inovação, focado em assessoria de investimentos.
              Minha trajetória, impulsionada por uma curiosidade inata sobre o
              funcionamento dos mercados, me levou a aprofundar meus
              conhecimentos neste campo. Ao longo da minha carreira, tive o
              privilégio de colaborar com diversas empresas e indivíduos,
              desenvolvendo e implementando estratégias personalizadas e
              eficazes que os auxiliaram a alcançar seus objetivos financeiros.
              Minha metodologia é centrada no cliente, pautada em uma
              compreensão profunda de suas necessidades para entregar soluções
              que geram resultados concretos. Acredito firmemente que a educação
              financeira é a chave para o sucesso de qualquer investimento. Por
              isso, dedico-me ativamente a compartilhar conhecimento,
              capacitando pessoas a tomar decisões financeiras mais informadas e
              seguras."
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
