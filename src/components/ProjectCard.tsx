import { ExternalLink, Github, RotateCcw, Sparkles } from "lucide-react";
import { useEffect, useState, type FC } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import type { Project } from "@/interfaces";

interface Props {
  project: Project;
  isCenter?: boolean;
  index: number;
}

const ProjectCard: FC<Props> = ({ index, project, isCenter = false }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  const cardStyles = {
    scale: isCenter ? "scale-95 lg:scale-105" : "scale-95",
    elevation: isCenter ? "-translate-y-4" : "translate-y-0",
    shadow: isCenter
      ? "shadow-lg shadow-slate-700"
      : "shadow-lg shadow-black/10",
    opacity: isCenter ? "opacity-100" : "opacity-80",
    zIndex: isCenter ? "z-20" : "z-10",
    height: isCenter ? "h-96" : "h-90",
  };

  return (
    <div
      className={`relative w-full transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${cardStyles.scale} ${cardStyles.elevation} ${cardStyles.opacity} ${
        cardStyles.zIndex
      }`}
    >
      <div
        className={`relative w-full ${cardStyles.height} perspective-1000 interpolate-size transition-all duration-700`}
      >
        <div
          className={`absolute top-2 left-3 z-30 transition-all duration-300 ${
            isHovered && !isFlipped
              ? "scale-100 opacity-100"
              : "scale-95 opacity-0"
          }`}
        >
          <div className="rounded-full border border-white/30 bg-white/95 px-3 py-1.5 shadow-lg backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <RotateCcw
                className="h-3 w-3 animate-spin text-blue-600"
                style={{ animationDuration: "2s" }}
              />
              <span className="text-xs font-medium text-slate-700">
                Click to flip
              </span>
            </div>
          </div>
        </div>

        <div
          className={`absolute top-2 left-3 z-30 transition-all duration-300 ${
            isHovered && isFlipped
              ? "scale-100 opacity-100"
              : "scale-95 opacity-0"
          }`}
        >
          <div className="rounded-full border border-sky-200 bg-gradient-to-r from-sky-100 to-blue-100 px-3 py-1.5 shadow-lg backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <RotateCcw
                className="h-3 w-3 animate-spin text-blue-600"
                style={{ animationDuration: "2s" }}
              />
              <span className="text-xs font-medium text-blue-700">
                Click to return
              </span>
            </div>
          </div>
        </div>

        <div
          className={`transform-style-preserve-3d relative h-full w-full cursor-pointer transition-all duration-700 ${
            isFlipped ? "rotate-y-180" : ""
          }`}
          onClick={() => setIsFlipped(!isFlipped)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Card
            className={`absolute inset-0 h-full w-full overflow-hidden rounded-2xl border-0 bg-gradient-to-br from-slate-900 to-slate-700 backface-hidden ${cardStyles.shadow}`}
          >
            <div
              className="relative h-full w-full rounded-2xl bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center p-6">
                <h3
                  className={`text-center font-bold text-white drop-shadow-2xl ${
                    isCenter ? "text-3xl" : "text-2xl"
                  }`}
                >
                  {project.title}
                </h3>
              </div>

              <div className="absolute top-4 right-4">
                <div
                  className={`rounded-full bg-gradient-to-r from-blue-700 to-sky-950 p-2 transition-all duration-300 ${
                    isHovered ? "scale-110 rotate-12" : ""
                  }`}
                >
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
              </div>

              <div className="absolute right-4 bottom-4">
                <div
                  className={`rounded-full bg-white/20 p-3 backdrop-blur-md transition-all duration-300 ${
                    isHovered ? "scale-110 bg-white/30" : ""
                  }`}
                >
                  <ExternalLink className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          </Card>

          <Card
            className={`absolute inset-0 flex h-full w-full rotate-y-180 flex-col justify-between rounded-2xl border-0 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-6 backface-hidden ${cardStyles.shadow}`}
          >
            <div className="mt-3 flex-1">
              <h3
                className={`mb-4 bg-gradient-to-r from-yellow-600 to-sky-600 bg-clip-text font-bold text-transparent ${
                  isCenter ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
                }`}
              >
                {project.title}
              </h3>

              <div
                className={`mb-6 [display:-webkit-box] max-h-36 overflow-hidden text-ellipsis text-slate-600 [-webkit-box-orient:vertical] ${
                  isCenter
                    ? "text-sm sm:text-base md:[-webkit-line-clamp:4] xl:[-webkit-line-clamp:5]"
                    : "text-xs [-webkit-line-clamp:4] sm:text-sm"
                } `}
              >
                {project.description}
              </div>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`rounded-full border border-purple-200 bg-gradient-to-r from-sky-100 to-blue-100 px-3 py-1 font-medium text-blue-700 ${
                      isCenter ? "text-sm" : "text-xs"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                size={isCenter ? "default" : "sm"}
                variant="outline"
                className="flex-1 rounded-xl border-0 bg-gradient-to-r from-slate-800 to-slate-900 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:text-white hover:brightness-150"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.githubUrl, "_blank");
                }}
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              {project.liveUrl && (
                <Button
                  size={isCenter ? "default" : "sm"}
                  className="flex-1 rounded-xl border-0 bg-gradient-to-r from-blue-700 to-sky-950 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:brightness-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.liveUrl, "_blank");
                  }}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Button>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
