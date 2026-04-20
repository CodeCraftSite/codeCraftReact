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
      team_alf: "З",
      main_technology: "TypeScript",
      command: "Добро",
      tech: ["TypeScript", "WebSocket"],
      company: "FinTech",
    },
    {
      id: 2,
      type: "graphics & engines",
      nameProject: "Graphics & Engines",
      description:
        "Рендер, движки low-level graphics runtime. KWD 3D Engine (Java + Vulkan) и другие проекты в области графики и движков.",
      case: 1,
      team_alf: "П",
      main_technology: "Java",
      command: "KWD",
      tech: ["Java", "Vulkan", "OpenGL"],
      company: "3D/Graphics Runtime",
    },
    {
      id: 3,
      type: "platrorms & ecosystems",
      nameProject: "Platforms & Ecosystems",
      description:
        "Публичные и внутренние digital-сервисы. Пример: Платформа для управления цифровыми активами (DAMS) и другие проекты в области платформ и экосистем.",
      case: 2,
      team_alf: "В",
      main_technology: "Web",
      command: "KWD",
      tech: ["Web", "CRM", "Booking"],
      company: "Mental Health/Wellbeing",
    },
  ];

  return (
    <div className="border border-gray-200 rounded-3xl bg-white p-6 flex flex-col gap-6 shadow-sm">
      <span className="max-w-xl text-left text-gray-600">
        Игры, нейронки, бизнес-продукты и другие направления. Выбери карточку,
        чтобы раскрыть кейсы.
      </span>

      <div className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem
                key={project.id}
                className="basis-full sm:basis-[92%] md:basis-[85%] lg:basis-[75%] xl:basis-[70%] px-2  "
              >
                <div className="p-1 h-full min-h-[420px]">
                  <Card className="w-full h-full rounded-2xl shadow-sm transition duration-300 ease-in-out transform-gpu hover:shadow-md hover:scale-[1.02]">
                    <CardContent className="flex flex-col gap-5 mx-4 px-6 h-full ">
                      <span className="text-sm uppercase tracking-wide text-gray-400 border-b border-gray-200 pb-1">
                        {project.type}
                      </span>

                      <div className="flex flex-row justify-between items-center gap-4">
                        <h3 className="text-2xl font-semibold text-gray-900">
                          {project.nameProject}
                        </h3>
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-sm bg-gray-100">
                          <span className="text-3xl font-semibold">
                            {project.team_alf}
                          </span>
                        </div>
                      </div>

                      <p className="text-base text-gray-600 line-clamp-4">
                        {project.description}
                      </p>

                      <div className="flex gap-1 border-t border-gray-200 pt-4">
                        <div className="flex min-w-0 flex-1 flex-col gap-1 border border-gray-200 rounded-lg p-3">
                          <span className="text-base text-gray-400">
                            Кейсов
                          </span>
                          <span className="text-base font-medium text-gray-800">
                            {project.case}
                          </span>
                        </div>

                        <div className="flex min-w-0 flex-1 flex-col gap-1 border border-gray-200 rounded-lg p-3">
                          <span className="text-base text-gray-400">Фокус</span>
                          <span className="text-base font-medium text-gray-800">
                            {project.main_technology}
                          </span>
                        </div>

                        <div className="flex min-w-0 flex-1 flex-col gap-1 border border-gray-200 rounded-lg p-3">
                          <span className="text-base text-gray-400">
                            Команда
                          </span>
                          <span className="text-base font-medium text-gray-800">
                            {project.command}
                          </span>
                        </div>
                      </div>

                      <div className="mt-auto flex flex-wrap gap-3">
                        {project.tech.map((techItem, i) => (
                          <Badge key={i} className=" py-1 px-2 text-base">
                            {techItem}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex justify-between items-center pb-2 border-b ">
                        <span className="text-base text-gray-400">
                          Открыть направление и посмотреть кейсы
                        </span>
                        <Badge className=" py-2 px-2 text-base">
                          {project.company}
                        </Badge>
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
