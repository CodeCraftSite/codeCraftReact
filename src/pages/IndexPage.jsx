import CarouselProject from "../components/CarouselProject";
import InfoCard from "../components/InfoCard";
import { Button } from "../components/ui/button";

function IndexPage() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row pb-3">
        <h1 className="text-7xl font-bold text-gray-900 animate-fade-in">
          Делаем software-продукты, которые выглядят дорого и работают хорошо
        </h1>
      </div>
      <span className="text-2xl text-gray-500 my-5 animate-fade-in">
        Мы проектируем и запускаем сложные digital‑системы: от внутренних
        платформ и AI‑сервисов до desktop‑инструментов, secure products и
        интерфейсов, где важны скорость, архитектура и ощущение премиального
        исполнения.
      </span>

      <div className="flex flex-row gap-2  animate-fade-in">
        <Button size="lg">Запустить обсуждение</Button>
        <Button size="lg" variant="outline">
          Открыть портфолио
        </Button>
      </div>

      <p className="text-lg text-gray-600  animate-fade-in my-5">
        Никаких шаблоных решений, только индивидуальный подход к каждому проекту
      </p>

      <div className="flex flex-row gap-4 my-5">
        {/* Это через цикл будет! */}
        <InfoCard />
        <InfoCard />
      </div>

      <h2 className="text-5xl font-bold text-gray-900 animate-fade-in mb-5">
        Сначала выбираем тип проекта, потом разворачиваем кейсы категории.
      </h2>
      <p className="text-lg text-gray-600 animate-fade-in pb-5">
        Клик по карточке типа проекта запускает анимацию раскрытия и открывает
        3D‑карусель работ именно в этой категории
      </p>

      <CarouselProject />
    </div>
  );
}

export default IndexPage;
