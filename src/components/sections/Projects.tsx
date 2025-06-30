import { TypingAnimation } from "../common/TypingAnimation";
import { Button } from "../ui/Button";
import { ChevronLeft, ChevronRight, Github, Sparkles } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import ProjectCard from "../ProjectCard";
import SectionContainer from "../common/SectionContainer";
import type { Language } from "@/types";
import { ui } from "@/i18n";

interface Props {
  currentLang: Language;
}

const Projects = ({ currentLang }: Props) => {
  const t = ui[currentLang];

  const { titles, projects, buttonMoreProjectOnGitHub } = t.projects;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    axis: "x",
    align: "center",
  });
  const [current, setCurrent] = useState(0);

  const updateSelectedIndex = useCallback(() => {
    if (!emblaApi) return;
    const realIndex = emblaApi.selectedScrollSnap();
    setCurrent(realIndex);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", updateSelectedIndex);
    emblaApi.on("reInit", updateSelectedIndex);

    updateSelectedIndex();

    return () => {
      emblaApi.off("select", updateSelectedIndex);
      emblaApi.off("reInit", updateSelectedIndex);
    };
  }, [emblaApi, updateSelectedIndex]);

  return (
    <SectionContainer id="projects">
      <h2 className="mb-6 text-2xl font-bold md:text-4xl">
        <TypingAnimation
          texts={titles}
          className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent"
        />
      </h2>

      <div className="relative py-8 lg:px-2 lg:py-16 xl:px-8">
        <div
          className="relative mx-auto h-[500px] w-full max-w-6xl overflow-hidden py-8 sm:py-16"
          ref={emblaRef}
        >
          <div className="-ml-2 flex md:-ml-4">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="min-w-0 shrink-0 grow-0 basis-full pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3"
              >
                <ProjectCard
                  project={project}
                  isCenter={current === index}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>

        <Button
          className="absolute top-1/3 hidden translate-y-2/3 cursor-pointer border-0 bg-transparent text-yellow-400 shadow-none transition-all duration-200 hover:bg-transparent hover:text-yellow-600 lg:-left-12 lg:block xl:-left-4"
          onClick={scrollPrev}
        >
          <ChevronLeft size={48} />
          <span className="sr-only">Previous slide</span>
        </Button>

        <Button
          className="absolute top-1/3 hidden translate-y-2/3 cursor-pointer border-0 bg-transparent text-yellow-400 shadow-none transition-all duration-200 hover:bg-transparent hover:text-yellow-600 lg:-right-12 lg:block xl:-right-4"
          onClick={scrollNext}
        >
          <ChevronRight size={48} />
          <span className="sr-only">Next slide</span>
        </Button>

        <div className="mt-8 flex justify-center gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 cursor-pointer rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-gradient-to-r from-blue-700 to-sky-950"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
              onClick={() => {
                emblaApi?.scrollTo(index);
              }}
            />
          ))}
        </div>
      </div>

      <div className="text-center">
        <Button
          size="lg"
          className="transform rounded-2xl border-0 bg-gradient-to-r from-blue-700 to-sky-950 px-10 py-4 text-xs text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-purple-500/25 hover:brightness-125 sm:text-base"
          onClick={() => window.open("https://github.com/tu-usuario", "_blank")}
        >
          <Github className="mr-3 h-4 w-4 sm:h-5 sm:w-5" />
          <span className="font-semibold">{buttonMoreProjectOnGitHub}</span>
          <Sparkles className="ml-3 h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      </div>
    </SectionContainer>
  );
};

export default Projects;
