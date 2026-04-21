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
    <div className="flex flex-row items-center gap-8">
      <InfoCard
        class="w-full"
        name={processSteps[0].name}
        title={processSteps[0].title}
        description={processSteps[0].description}
      />

      <div className="flex flex-col gap-4">
        <ProcessSteps />
      </div>
    </div>
  );
}

export default ProcessSection;
