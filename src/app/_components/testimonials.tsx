"use client";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import usuario from "../../../public/usuario.png";
import Image from "next/image";
import StarRating from "@/components/starRating";

const testimonials = [
  {
    name: "João Silva",
    feedback: "Excelente serviço, super recomendo!",
    image: usuario,
    rating: 5,
  },
  {
    name: "Maria Oliveira",
    feedback: "Atendimento rápido e eficiente.",
    image: usuario,
    rating: 4,
  },
  {
    name: "Carlos Souza",
    feedback: "Muito satisfeito com o resultado final.",
    image: usuario,
    rating: 5,
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }
  return (
    <section className="bg-[#ed8e53] py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-semibold text-white">Depoimentos</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item, index) => (
                <div className="flex-[0_0_100%] min-w-0 px-3" key={index}>
                  <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="relative w-24 h-24">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="96px"
                          className="object-cover rounded-full"
                        />
                      </div>

                      <p className="text-gray-200">{item.feedback}</p>
                      <p className="font-semibold">{item.name}</p>
                      <StarRating rating={item.rating} />
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
