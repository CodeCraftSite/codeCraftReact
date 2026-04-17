import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
function CarouselProject() {
  const projects = [
    {
      id: 1,
      type: "fintech interface",
      nameProject: "Fintech interface",
      description:
        "Tranding UI, widgets, streaming market tools. Пример: Виджет для трейдинга",
      case: 1,
      main_technology: "TypeScript",
      command: "Добро",
      tech: ["TypeScript", "WebSocket"],
    },
    {
      id: 2,
      type: "graphics & engines",
      nameProject: "Graphics & Engines",
      description:
        "Рендер, движки low-level graphics runtime. KWD 3D Engine (Java + Vulkan) и другие проекты в области графики и движков.",
      case: 1,
      main_technology: "Java",
      command: "KWD",
      tech: ["Java", "Vulkan", "OpenGL"],
    },
    {
      id: 3,
      type: "platrorms & ecosystems",
      nameProject: "Platforms & Ecosystems",
      description:
        "Публичные и внутренние digital-сервисы. Пример: Платформа для управления цифровыми активами (DAMS) и другие проекты в области платформ и экосистем.",
      case: 2,
      main_technology: "Web",
      command: "KWD",
      tech: ["Web", "CRM", "Booking"],
    },
  ];

  return (
    <div className="border border-gray-200 rounded-lg p-6 flex flex-col gap-6">
      <span className="max-w-xl text-left text-gray-600">
        Игры, нейронки, бизнес-продукты и другие направления. Выбери карточку,
        чтобы раскрыть кейсы.
      </span>

      <div className="relative ">
        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {projects.map((project) => (
              <CarouselItem
                key={project.id}
                className="pl-4 basis-[85%] sm:basis-[70%] md:basis-[55%] lg:basis-[45%]"
              >
                <div className="p-1 h-full">
                  <Card className="w-full h-full rounded-2xl shadow-sm hover:shadow-md transition">
                    <CardContent className="flex flex-col gap-4 p-6 h-full">
                      {/* TYPE */}
                      <span className="text-xs uppercase tracking-wide text-gray-400">
                        {project.type}
                      </span>

                      {/* TITLE */}
                      <h3 className="text-xl font-semibold text-gray-900">
                        {project.nameProject}
                      </h3>

                      {/* DESCRIPTION */}
                      <p className="text-sm text-gray-600 line-clamp-4">
                        {project.description}
                      </p>

                      {/* TECH STACK */}
                      <div className="mt-auto flex flex-wrap gap-2">
                        {project.tech.map((techItem, i) => (
                          <Badge key={i}>{techItem}</Badge>
                        ))}
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t">
                        <span className="text-xs text-gray-400">Фокус</span>
                        <span className="text-sm font-medium text-gray-800"></span>
                        <Badge>{project.main_technology}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center gap-3 mt-6">
            <CarouselPrevious size="icon" />
            <CarouselNext size="icon" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselProject;
