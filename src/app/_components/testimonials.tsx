"use client";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import usuario from "../../../public/usuario.png";
import Image from "next/image";
import StarRating from "@/components/StarRating";

const testimonials = [
  {
    name: "João Silva",
    feedback:
      "Excelente serviço, super recomendo! O Felipe me ajudou a organizar meus investimentos de forma muito profissional.",
    image: usuario,
    rating: 5,
    location: "São Paulo, SP",
  },
  {
    name: "Maria Oliveira",
    feedback:
      "Atendimento rápido e eficiente. Consegui alcançar meus objetivos financeiros com a ajuda do Felipe.",
    image: usuario,
    rating: 5,
    location: "Rio de Janeiro, RJ",
  },
  {
    name: "Carlos Souza",
    feedback:
      "Muito satisfeito com o resultado final. O Felipe é um profissional competente e dedicado.",
    image: usuario,
    rating: 5,
    location: "Belo Horizonte, MG",
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
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
    <section className="section-light py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <p className="text-accent-primary font-medium mb-4">
            Depoimentos dos clientes
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">
            Atendimento de alto nível reconhecido pelos nossos clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Veja o que nossos clientes dizem sobre nosso trabalho e dedicação em
            cada objetivo financeiro.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item, index) => (
                <div
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-4"
                  key={index}
                >
                  <article className="card h-full flex flex-col">
                    <div className="flex-1 space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="64px"
                            className="object-cover rounded-full"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-text-dark">
                            {item.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {item.location}
                          </p>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-6 h-6">
                            <svg
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="text-blue-600"
                            >
                              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-1">
                        <StarRating rating={item.rating} />
                      </div>

                      <blockquote className="text-muted-foreground leading-relaxed italic">
                        "{item.feedback}"
                      </blockquote>
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
