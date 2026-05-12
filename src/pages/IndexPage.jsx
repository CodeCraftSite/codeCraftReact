import Capatabiels from "../components/CapatabilesComponents/Capatabiles";
import CarouselProject from "../components/CarouselProject";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";
import ProcessSection from "../components/processComponents/ProcessSection";
import { ProofCard } from "../components/ProofCard";
import { TrustComponent } from "../components/trustComponent";
import { AnimatedBadge } from "../components/ui/animatedbadge";
import { Button } from "../components/ui/button";
import { useMainApi } from "../hooks/useMainApi";

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

  const { hero } = useMainApi();

  const heroBadgeText =
    typeof hero?.data?.badge === "string" && hero.data.badge.trim()
      ? hero.data.badge.trim()
      : "Software development / Web / Enterprise / R&D";

  console.log(hero);

  return (
    <div className="flex flex-col space-y-8">
      <AnimatedBadge
        text={heroBadgeText}
        borderColor="via-purple-500"
        className="animate-fade-in max-w-full"
        contentClassName="text-[11px] font-semibold uppercase tracking-widest"
        textClassName="whitespace-normal sm:whitespace-nowrap"
        icon={
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
            aria-hidden
          />
        }
      />

      <div className="flex flex-row pb-3">
        <h1 className="text-7xl font-bold text-foreground animate-fade-in">
          {hero?.data?.title}
        </h1>
      </div>
      <span className="text-2xl text-muted-foreground animate-fade-in">
        {hero?.data?.text}
      </span>

      <div className="flex flex-col gap-2 animate-fade-in sm:flex-row">
        <Button size="lg" className="w-full sm:w-auto">
          {hero?.data?.primaryButton}
        </Button>
        <Button size="lg" variant="outline" className="w-full sm:w-auto">
          {hero?.data?.secondaryButton}
        </Button>
      </div>

      <div className="flex flex-row gap-4">
        <p className="text-lg text-muted-foreground text-black! dark:text-white! animate-fade-in text-left ">
          {hero?.data?.noteStrong}
        </p>
        <p className="text-lg text-muted-foreground animate-fade-in text-left! ">
          {hero?.data?.noteText}
        </p>
      </div>

      <TrustComponent
        trustPills={hero?.data?.trustPills}
        trustRight={hero?.data?.trustRight}
      />

      {Array.isArray(hero?.data?.proofs) && hero.data.proofs.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hero.data.proofs.map((proof, index) => (
            <ProofCard
              key={index}
              meta={proof.meta}
              title={proof.title}
              text={proof.text}
            />
          ))}
        </div>
      ) : null}

      <div className="flex flex-row gap-4  items-stretch">
        {infoCardsData.map((cardData, index) => (
          <InfoCard key={index} {...cardData} />
        ))}
      </div>

      <div id="portfolio" className=" mt-26 border-t border-border pt-3">
        <AnimatedBadge text="Экспертиза" borderColor="via-purple-500" />
        <h2 className="text-5xl font-bold text-foreground animate-fade-in ">
          Сначала выбираем тип проекта, потом разворачиваем кейсы категории.
        </h2>
        <p className="text-lg text-muted-foreground animate-fade-in mt-4">
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
