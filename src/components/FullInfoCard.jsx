import { AnimatedBadge } from "./ui/animatedbadge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

function FullInfoCard({ isOpen, setOpen }) {
  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent className="max-w-[min(1500px,calc(100%-18px))]! w-full! h-[calc(100vh-36px)]! p-0 rounded-2xl overflow-y-auto overscroll-contain">
        <div className="border-b border-border p-6">
          <DialogHeader>
            <DialogTitle>
              <div className="mb-4 flex flex-wrap gap-2 border-b border-border py-2">
                <AnimatedBadge text="Project View" />
                <AnimatedBadge text="Graphics & Engines" />
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  <AnimatedBadge text="3D / Graphics Runtime" />
                  <AnimatedBadge text="Engine Architecture + Rendering" />
                  <AnimatedBadge text="11 месяцев" />
                  <AnimatedBadge text="Java" />
                  <AnimatedBadge text="Vulkan" />
                  <AnimatedBadge text="OpenGL" />
                </div>

                <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                  KWD 3D Engine (Java + Vulkan/OpenGL)
                </h1>
              </div>
            </DialogTitle>

            <DialogDescription className="text-lg mt-3">
              Собственный 3D-движок для визуализаций, симуляторов и
              интерактивных инструментов. Архитектура разделяет рендер-бэкенды и
              позволяет управлять производительностью.
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="p-6 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
            <Card>
              <CardContent className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="font-bold text-md">
                    КАТЕГОРИЯ
                  </CardHeader>
                  <CardContent className="font-bold text-lg">
                    Graphics & Engines
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="font-bold text-md">
                    ИНДУСТРИЯ
                  </CardHeader>
                  <CardContent className="font-bold text-lg">
                    3D / Graphics Runtime
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="font-bold text-md">
                    РОЛЬ СТУДИИ
                  </CardHeader>
                  <CardContent className="font-bold text-lg">
                    Engine Architecture + Rendering
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="font-bold text-md">СРОК</CardHeader>
                  <CardContent className="font-bold text-lg">
                    11 месяцев
                  </CardContent>
                </Card>

                <Card className="flex-1 flex flex-col">
                  <CardHeader className="font-bold text-lg">Stack</CardHeader>
                  <CardContent className="flex flex-wrap gap-2 content-start">
                    <AnimatedBadge text="Java" />
                    <AnimatedBadge text="Vulkan" />
                    <AnimatedBadge text="OpenGL" />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-semibold text-3xl">
                  Почему этот проект выглядит сильно
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-semibold text-2xl">
                      Не абстрактный лендинг.
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xl">
                    Кейс подан как реальный 3d / graphics runtime‑продукт с
                    инженерной поверхностью и структурой.
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="font-semibold text-2xl">
                      Видно, что делали
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xl">
                    Есть понятный контекст: задача, решение, результат, стек и
                    формат поставки.
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="font-semibold text-2xl">
                      Есть за что зацепиться клиенту.
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xl">
                    Сразу считываются роль команды, глубина реализации и
                    ожидаемый outcome.
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-semibold text-2xl">
                  Контекст проекта
                </CardTitle>
              </CardHeader>

              <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Задача</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Построить управляемый движок без vendor lock‑in и с
                    предсказуемой производительностью на разных GPU.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Решение</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Собрали render graph, GPU resource manager, ECS‑сцену и
                    систему материалов с hot reload.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Результат</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Получили стабильный FPS и ускорили разработку 3D‑фич через
                    единые движковые модули.
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-semibold text-2xl">
                  Что вошло в работу
                </CardTitle>
              </CardHeader>

              <CardContent className="grid grid-cols-2  gap-4">
                <Card>
                  <CardHeader>
                    Product scope
                    <CardTitle className="font-semibold text-lg">
                      Scope
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Структурировали продуктовый контур под задачу: 3D / Graphics
                    Runtime.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    UX / UI
                    <CardTitle className="font-semibold text-lg">
                      Interface layer
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Кейс упирается в runtime‑качество, производительность и
                    ощущение инженерной глубины продукта.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    Implementation
                    <CardTitle className="font-semibold text-lg">
                      Engineering core
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Реализация опирается на стек Java / Vulkan / OpenGL и роль
                    Engine Architecture + Rendering.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    Delivery
                    <CardTitle className="font-semibold text-lg">
                      Delivery format
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Упор на техническую состоятельность: графический runtime,
                    tooling и расширяемость
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-semibold text-2xl">
                  Архитектура
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 mx-4 text-lg">
                <li>
                  Абстракция рендер‑бэкендов с единым контрактом команд GPU.
                </li>
                <li>
                  Пакетный ресурсный менеджер памяти и lifetime‑модель объектов.
                </li>
                <li>
                  Система материалов с компиляцией шейдерных вариантов под
                  платформу.
                </li>
                <li>Встроенный профайлер и hooks для telemetry</li>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-semibold text-2xl">
                  Этапы реализации
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <Card className="p-0 rounded-xl overflow-hidden">
                  <div className="flex items-start gap-3 p-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <span className="font-bold text-xs">1</span>
                    </div>
                    <div>
                      <h3 className="font-medium ">Core runtime</h3>
                      <p className="text-sm  mt-1">
                        ECS, ресурсы, система шейдеров, pipeline state.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-0 rounded-xl overflow-hidden">
                  <div className="flex items-start gap-3 p-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <span className="font-bold text-xs">2</span>
                    </div>
                    <div>
                      <h3 className="font-medium ">Rendering</h3>
                      <p className="text-sm  mt-1">
                        Render graph, batching, post‑processing, GPU profiling.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-0 rounded-xl overflow-hidden">
                  <div className="flex items-start gap-3 p-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <span className="font-bold text-xs">3</span>
                    </div>
                    <div>
                      <h3 className="font-medium ">Tooling</h3>
                      <p className="text-sm  mt-1">
                        Material editor, hot reload, diagnostic overlays.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-0 rounded-xl overflow-hidden">
                  <div className="flex items-start gap-3 p-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <span className="font-bold text-xs">4</span>
                    </div>
                    <div>
                      <h3 className="font-medium ">Integration</h3>
                      <p className="text-sm  mt-1">
                        Встраивание движка во внутренние продукты.
                      </p>
                    </div>
                  </div>
                </Card>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-semibold text-2xl">
                  Похожие проекты
                </CardTitle>
              </CardHeader>
            </Card>
          </div>

          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-semibold text-2xl">
                  Impact и KPI
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-3">
                <Card>
                  <CardHeader>Render FPS</CardHeader>
                  <CardContent className="font-semibold text-5xl">
                    120+
                  </CardContent>
                  <CardFooter>На целевых сценах</CardFooter>
                </Card>
                <Card>
                  <CardHeader>Frame time</CardHeader>
                  <CardContent className="font-semibold text-5xl">
                    8ms
                  </CardContent>
                  <CardFooter>Сложные материалы</CardFooter>
                </Card>
                <Card>
                  <CardHeader>Platforms</CardHeader>
                  <CardContent className="font-semibold text-5xl">
                    2 API
                  </CardContent>
                  <CardFooter>Vulkan + OpenGL</CardFooter>
                </Card>

                <Card>
                  <CardHeader>Crash rate</CardHeader>
                  <CardContent className="font-semibold text-5xl">
                    -47%
                  </CardContent>
                  <CardFooter>После рефакторинга</CardFooter>
                </Card>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-semibold text-2xl">
                  Команда и формат
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 mx-4 text-lg">
                <li>KWD Engine Team</li>
                <li>Lead Graphics Engineer</li>
                <li>2 Rendering Engineer</li>
                <li>Tools Engineer</li>
                <li>QA</li>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-semibold text-2xl">
                  Delivery notes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 mx-4 text-lg">
                <li>
                  Драйверная совместимость: fallback‑пути рендера и матрица
                  тестов по GPU.
                </li>
                <li>
                  Рост сложности шейдеров: feature flags и ограничение вариантов
                </li>
                <li>
                  Регресс производительности: perf budgets и benchmark‑сценарии.
                </li>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-semibold text-2xl">Демо</CardTitle>
              </CardHeader>
              <CardContent>Доступ по запросу</CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default FullInfoCard;
