import { AnimatedBadge } from "../ui/animatedbadge";
import CapCard from "./CapCard";

function Capatabiels() {
  const capCarddata = [
    {
      name: "Platform & Backend Systems",
      description:
        "API‑слой, event‑driven интеграции, сервисная архитектура, highload‑контуры, управление доступом и production‑готовые backend‑решения.",
    },

    {
      name: "AI / Data / Signal Processing",
      description:
        "Мониторинг среды, классификация сигналов, ML‑модели, feature pipelines, операционная аналитика и системы, где данные — не второстепенный слой.",
    },
    {
      name: "Secure & Controlled Environments",
      description:
        "Закрытые коммуникации, управляемые контуры, audit trails, device policies, модели доверия и продукты, где security — часть UX.",
    },
    {
      name: "Desktop & Specialist Tools",
      description:
        "Приложения для Windows и desktop workflows: media tools, overlays, utilities и инструменты, которые реально используют в рабочих сценариях.",
    },
    {
      name: "Premium Frontend & Motion",
      description:
        "Сайты и интерфейсы, в которых визуальный слой не просто “красивый”, а помогает продать сложный продукт и удержать внимание клиента.",
    },
    {
      name: "R&D and Product Prototyping",
      description:
        "Когда задача не стандартная и нужно сначала быстро проверить техническую гипотезу, а уже потом масштабировать её в продуктовый контур.",
    },
  ];

  const capTags = [
    { tag: "Display Products" },
    { tag: "KWD Internal Systems" },
    { tag: "Legal Practice Websites" },
    { tag: "Psychology & Wellbeing" },
    { tag: "OSINT / Media Intelligence" },
    { tag: "Game Security +" },
    { tag: "Desktop Media Tools" },
    { tag: "FinTech Widgets" },
    { tag: "Windows Overlay Products" },
  ];

  return (
    <section
      className="mt-28 space-y-4 border-t border-gray-300 pt-3"
      id="capatabilies"
    >
      <AnimatedBadge text="Экпертиза" borderColor="via-purple-500" />
      <h1 className="text-5xl font-bold text-gray-900 animate-fade-in">
        Экспертиза студии - без пустых "мы умеем всё".
      </h1>
      <p className="text-lg leading-relaxed text-gray-600 text-left">
        Только те области, которые реально вяжутся с текущими кейсами и
        формируют ощущение цельной инжерненой студии
      </p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {capCarddata.map((cap, index) => (
          <CapCard key={cap.name ?? index} {...cap} />
        ))}
      </div>

      <div className="overflow-hidden border border-gray-400 rounded-3xl p-4">
        <div className="inline-flex w-max animate-marquee-x">
          <div className="flex gap-3 pr-3">
            {capTags.map((item) => (
              <div
                key={item.tag}
                className="rounded-3xl border border-gray-300 bg-white/60 px-6 py-4 backdrop-blur-sm"
              >
                <p className="whitespace-nowrap text-base font-semibold text-gray-900">
                  {item.tag}
                </p>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            {capTags.map((item) => (
              <div
                key={`${item.tag}-dup`}
                className="rounded-3xl border border-gray-300 bg-white/60 px-6 py-4 backdrop-blur-sm"
              >
                <p className="whitespace-nowrap text-base font-semibold text-gray-900">
                  {item.tag}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Capatabiels;
