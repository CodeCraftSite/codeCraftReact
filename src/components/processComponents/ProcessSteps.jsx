import { Avatar, AvatarFallback } from "../ui/avatar";

function ProcessSteps() {
  const processSteps = [
    {
      name: "Discovery и рамка задачи",
      description:
        "Разбираем бизнес‑цель, текущие ограничения, технический контур и то, какой формат продукта реально нужен: MVP, internal platform, public service, desktop utility или secure system.",
    },

    {
      name: "Архитектура и дизайн",
      description:
        "Формируем карту продукта, архитектурную схему, ключевые пользовательские сценарии, стек и delivery‑подход. Здесь же определяем, где нужен вау‑визуал, а где нужен чистый utilitarian UX.",
    },

    {
      name: "Build и интеграция",
      description:
        "Собираем интерфейсы, backend, data‑слой, интеграции, observability и всё, что делает проект живой системой, а не просто фронтовой обёрткой.",
    },

    {
      name: "Rollout и развитие",
      description:
        "Запускаем продукт в production, собираем обратную связь, оптимизируем и развиваем его на основе данных и требований пользователей.",
    },
  ];

  return processSteps.map((step, index) => (
    <div
      key={step.name}
      className="flex flex-row items-start gap-4 rounded-4xl border border-border p-5 animate-fade-in"
    >
      <Avatar size="lg" className="size-30">
        <AvatarFallback className="font-semibold text-lg">
          {index + 1}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-foreground">{step.name}</h1>
        <span className="text-muted-foreground">{step.description}</span>
      </div>
    </div>
  ));
}

export default ProcessSteps;
