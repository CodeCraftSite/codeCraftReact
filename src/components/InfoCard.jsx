import { Badge } from "./ui/badge";

function InfoCard() {
  return (
    <div className="border border-gray-400 p-5 rounded-4xl animate-fade-in">
      <div className="flex flex-col gap-4">
        <Badge className="text-base p-4 ">Что мы делаем лучше всего</Badge>
        <h2 className="text-2xl font-bold text-gray-800">
          Не “сайт для галочки”, а полноценную продуктовую витрину.
        </h2>

        <p className="text-base text-gray-600 text-left">
          Мы соединяем инженерную глубину, продуктовую упаковку и дорогую
          визуальную подачу. Поэтому проекты на сайте выглядят как реальные
          кейсы студии, а не как набор карточек с описаниями.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-600 text-lg font-bold">
          <li>Сильные case studies вместо абстрактных promises.</li>
          <li>Архитектурная подача без перегруза и без “воды”.</li>
          <li>Мotion и 3D — как усилитель смысла, а не самоцель.</li>
        </ul>
      </div>
    </div>
  );
}

export default InfoCard;
