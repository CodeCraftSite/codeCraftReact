import InfoCard from "../InfoCard";
import ProcessSteps from "./ProcessSteps";

function ProcessSection() {
  const processSteps = [
    {
      name: "Процесс",
      title: "Путь от идеи до продукта без “магии” и без пустых обещаний.",
      description:
        "На хорошем студийном сайте важно не только показать красоту, но и дать ощущение, как именно вы работаете. Поэтому процесс здесь выглядит как часть продукта, а не как формальная схема из четырёх иконок.",
    },
  ];

  return (
    <section
      className="flex flex-col gap-8 md:flex-row md:items-start"
      id="process"
    >
      <div className="md:sticky md:top-24 md:self-start md:w-[42%]">
        <InfoCard
          class="w-full"
          name={processSteps[0].name}
          title={processSteps[0].title}
          description={processSteps[0].description}
        />
      </div>

      <div className="flex flex-col gap-4 md:w-[58%]">
        <ProcessSteps />
      </div>
    </section>
  );
}

export default ProcessSection;
