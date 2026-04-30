import { AuroraText } from "../../components/aurora";
import Capatabiels from "../components/CapatabilesComponents/Capatabiles";
import CarouselProject from "../components/CarouselProject";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";
import ProcessSection from "../components/processComponents/ProcessSection";
import { AnimatedBadge } from "../components/ui/animatedbadge";
import { Button } from "../components/ui/button";

function IndexPage() {
  const infoCardsData = [
    {
      name: "Что мы делаем лучше всего",
      title: "Не “сайт для галочки”, а полноценную продуктовую витрину.",
      description:
        "Мы соединяем инженерную глубину, продуктовую упаковку и дорогую визуальную подачу. Поэтому проекты на сайте выглядят как реальные кейсы студии, а не как набор карточек с описаниями. ",
      items_list: [
        {
          text: "Сильные case studies вместо абстрактных promises.",
        },
        {
          text: "Архитектурная подача без перегруза и без “воды”.",
        },
        {
          text: "Motion и 3D — как усилитель смысла, а не самоцель.",
        },
      ],
    },

    {
      name: "Когда к нам идут",
      title: "Когда нужен продукт сильнее, чем обычная студийная сборка.",
      items_list: [
        {
          text: "Нужно быстро упаковать сложную технологию в понятный продукт.",
        },

        {
          text: "Нужно показать серьёзность команды и инженерный уровень.",
        },
        {
          text: "Нужно объединить UI, data, infra и бизнес‑логику в одну систему.",
        },
        {
          text: "Нужно сделать кейсы, которые продают, а не просто “висят на сайте”.",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col space-y-8">
      <div className="flex flex-row pb-3">
        <h1 className="text-7xl font-bold text-gray-900 animate-fade-in">
          Делаем <AuroraText>software-продукты,</AuroraText> которые выглядят
          дорого и работают хорошо
        </h1>
      </div>
      <span className="text-2xl text-gray-500  animate-fade-in">
        Мы проектируем и запускаем сложные digital‑системы: от внутренних
        платформ и AI‑сервисов до desktop‑инструментов, secure products и
        интерфейсов, где важны скорость, архитектура и ощущение премиального
        исполнения.
      </span>

      <div className="flex flex-row gap-2 animate-fade-in">
        <Button size="lg">Запустить обсуждение</Button>
        <Button size="lg" variant="outline">
          Открыть портфолио
        </Button>
      </div>

      <p className="text-lg text-gray-600  animate-fade-in ">
        Никаких шаблоных решений, только индивидуальный подход к каждому проекту
      </p>

      <div className="flex flex-row gap-4  items-stretch">
        {infoCardsData.map((cardData, index) => (
          <InfoCard key={index} {...cardData} />
        ))}
      </div>

      <div id="portfolio" className=" mt-26 border-t border-gray-400 pt-3">
        <AnimatedBadge text="Экспертиза" borderColor="via-purple-500" />
        <h2 className="text-5xl font-bold text-gray-900 animate-fade-in ">
          Сначала выбираем тип проекта, потом разворачиваем кейсы категории.
        </h2>
        <p className="text-lg text-gray-600 animate-fade-in mt-4">
          Клик по карточке типа проекта запускает анимацию раскрытия и открывает
          3D‑карусель работ именно в этой категории
        </p>
      </div>

      <CarouselProject />

      {/* 
      <div>Блок с каруселью подробный</div> */}

      <ProcessSection></ProcessSection>

      <Capatabiels></Capatabiels>

      <div>
        <ContactInfo></ContactInfo>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default IndexPage;
