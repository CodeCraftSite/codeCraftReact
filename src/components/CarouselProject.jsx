import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import { useCallback, useState } from "react";
import SecondCarousel from "./SecondCarousel";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

function CarouselProject() {
  const [openedProject, setOpenedProject] = useState(null);
  const [isSecondOpen, setIsSecondOpen] = useState(false);

  const openSecond = useCallback((project) => {
    setOpenedProject(project);
    requestAnimationFrame(() => setIsSecondOpen(true));
  }, []);

  const closeSecond = useCallback(() => {
    setIsSecondOpen(false);
    window.setTimeout(() => setOpenedProject(null), 300);
  }, []);

  const handleTiltMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const mx = px * 100;
    const my = py * 100;

    const maxTilt = 12;
    const ry = (px - 0.5) * (maxTilt * 2);
    const rx = (0.5 - py) * (maxTilt * 2);

    e.currentTarget.style.setProperty("--mx", `${mx}%`);
    e.currentTarget.style.setProperty("--my", `${my}%`);
    e.currentTarget.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
    e.currentTarget.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
  };

  const handleTiltLeave = (e) => {
    e.currentTarget.style.removeProperty("--mx");
    e.currentTarget.style.removeProperty("--my");
    e.currentTarget.style.removeProperty("--rx");
    e.currentTarget.style.removeProperty("--ry");
  };

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

  const casesByProjectId = {
    1: [
      {
        id: "fintech-1",
        category: "FINTECH INTERFACE",
        duration: "7 месяцев",
        demo: "Request demo",
        title: "Платформа виджетов для трейдинга",
        description:
          "Realtime-данные, WebSocket‑слой, UI для потоковых рынков и аналитики.",
        industry: "FinTech",
        role: "Data UI + Streaming",
        stackLabel: "TypeScript / WebSocket",
        tags: ["TypeScript", "WebSocket", "UI", "Realtime"],
        stackSnapshot: ["TypeScript", "WebSocket", "UI"],
        previewTitle: "OSINT / MEDIA INTELLIGENCE",
      },
      {
        id: "fintech-2",
        category: "FINTECH INTERFACE",
        duration: "4 месяца",
        demo: "Public demo",
        title: "Интерфейс мониторинга рынков",
        description:
          "Компонентная система, виджеты и быстрые сценарии для оператора.",
        industry: "FinTech",
        role: "Design + Frontend",
        stackLabel: "TypeScript / Web",
        tags: ["TypeScript", "Web", "Dashboards"],
        stackSnapshot: ["TypeScript", "Web"],
        previewTitle: "MARKET DASHBOARD",
      },
    ],
    2: [
      {
        id: "gfx-1",
        category: "GRAPHICS & ENGINES",
        duration: "6 месяцев",
        demo: "Public demo",
        title: "Low-level 3D runtime",
        description:
          "Рендер, пайплайн ресурсов и интеграция с графическим API.",
        industry: "3D / Runtime",
        role: "Engine + Tooling",
        stackLabel: "Java / Vulkan / OpenGL",
        tags: ["Java", "Vulkan", "OpenGL"],
        stackSnapshot: ["Java", "Vulkan", "OpenGL"],
        previewTitle: "RENDER PIPELINE",
      },
    ],
    3: [
      {
        id: "platform-1",
        category: "PLATFORMS & ECOSYSTEMS",
        duration: "5 месяцев",
        demo: "Public demo",
        title: "Внутренняя платформа сервисов",
        description:
          "Единая витрина сервисов, процессы, роли и понятная продуктовая упаковка.",
        industry: "Platform Products",
        role: "Frontend + Content Architecture",
        stackLabel: "Web / CRM / Infra",
        tags: ["Web", "CRM", "Infra"],
        stackSnapshot: ["Web", "CRM", "Infra"],
        previewTitle: "LEGALTECH",
      },
      {
        id: "platform-2",
        category: "PLATFORMS & ECOSYSTEMS",
        duration: "3 месяца",
        demo: "Request demo",
        title: "Экосистема цифровых активов",
        description: "Управление активами, статусы, витрина и интеграции.",
        industry: "Digital Assets",
        role: "Product UI + Integrations",
        stackLabel: "Web / Data",
        tags: ["Web", "Data", "Integrations"],
        stackSnapshot: ["Web", "Data"],
        previewTitle: "SYSTEM LANES",
      },
    ],
  };

  return (
    <div className="flex flex-col gap-6 rounded-3xl border border-border bg-card p-6 shadow-sm">
      <div className="relative grid">
        <div
          className={
            isSecondOpen
              ? "pointer-events-none opacity-0 scale-[0.99] transition-all duration-300 ease-out"
              : "opacity-100 scale-100 transition-all duration-300 ease-out"
          }
          aria-hidden={isSecondOpen}
          style={{ gridColumn: "1 / -1", gridRow: "1 / -1" }}
        >
          <div className="flex flex-col gap-6">
            <span className="max-w-xl text-left text-muted-foreground">
              Игры, нейронки, бизнес-продукты и другие направления. Выбери
              карточку, чтобы раскрыть кейсы.
            </span>

            <div className="relative">
              <Carousel className="w-full">
                <CarouselContent>
                  {projects.map((project) => (
                    <CarouselItem
                      key={project.id}
                      className="basis-full sm:basis-[92%] md:basis-[85%] lg:basis-[75%] xl:basis-[70%] px-2  "
                    >
                      <div
                        className="p-1 h-full min-h-105 perspective-1200 group"
                        onMouseMove={handleTiltMove}
                        onMouseLeave={handleTiltLeave}
                      >
                        <Card className="w-full h-full rounded-2xl shadow-sm card-3d">
                          <CardContent className="flex flex-col gap-5 mx-4 px-6 h-full card-3d__content">
                            <span className="text-sm uppercase tracking-wide text-muted-foreground border-b border-border pb-1">
                              {project.type}
                            </span>

                            <div className="flex flex-row justify-between items-center gap-4">
                              <h3 className="text-2xl font-semibold text-foreground">
                                {project.nameProject}
                              </h3>
                              <div className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-sm bg-muted">
                                <span className="text-3xl font-semibold">
                                  {project.team_alf}
                                </span>
                              </div>
                            </div>

                            <p className="text-base text-muted-foreground line-clamp-4">
                              {project.description}
                            </p>

                            <div className="flex gap-1 border-t border-border pt-4">
                              <div className="flex min-w-0 flex-1 flex-col gap-1 border border-border rounded-lg p-3">
                                <span className="text-base text-muted-foreground">
                                  Кейсов
                                </span>
                                <span className="text-base font-medium text-foreground">
                                  {project.case}
                                </span>
                              </div>

                              <div className="flex min-w-0 flex-1 flex-col gap-1 border border-border rounded-lg p-3">
                                <span className="text-base text-muted-foreground">
                                  Фокус
                                </span>
                                <span className="text-base font-medium text-foreground">
                                  {project.main_technology}
                                </span>
                              </div>

                              <div className="flex min-w-0 flex-1 flex-col gap-1 border border-border rounded-lg p-3">
                                <span className="text-base text-muted-foreground">
                                  Команда
                                </span>
                                <span className="text-base font-medium text-foreground">
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

                            <div className="flex items-center justify-between border-b border-border pb-2">
                              <button
                                type="button"
                                className="text-left text-base text-muted-foreground transition-colors hover:text-foreground"
                                onClick={() => openSecond(project)}
                              >
                                Открыть направление и посмотреть кейсы
                              </button>
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
        </div>

        <div
          className={
            isSecondOpen
              ? "opacity-100 scale-100 transition-all duration-300 ease-out"
              : "pointer-events-none opacity-0 scale-[0.99] transition-all duration-300 ease-out"
          }
          aria-hidden={!isSecondOpen}
          style={{ gridColumn: "1 / -1", gridRow: "1 / -1" }}
        >
          {openedProject ? (
            <SecondCarousel
              categoryTitle={openedProject.nameProject}
              categoryMeta={openedProject.type}
              cases={casesByProjectId[openedProject.id] ?? []}
              onBack={closeSecond}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default CarouselProject;
