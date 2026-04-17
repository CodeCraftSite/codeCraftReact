import TalkAboutProject from "./TalkAboutProject";
import { Button } from "./ui/button";
import { ButtonGroup } from "./ui/button-group";
import WatchProjectBtn from "./WatchProjectBtn";

function Header() {
  const buttons = [
    { name: "Продукты", href: "#" },
    { name: "Услуги", href: "#" },
    { name: "Showcase", href: "#" },
    { name: "Процесс", href: "#" },
    { name: "Экспертиза", href: "#" },
    { name: "Контакты", href: "#" },
  ];

  return (
    <header className="bg-gray-800 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-5">
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold">CodeCraft</h1>
          <p className="text-xs text-gray-400">
            Разработка продуктов для сложных систем
          </p>
        </div>

        <div className="flex items-center gap-6">
          <ButtonGroup>
            {buttons.map((button) => (
              <Button
                key={button.name}
                variant="link"
                size="sm"
                className="text-white text-base"
              >
                <a href={button.href}>{button.name}</a>
              </Button>
            ))}
          </ButtonGroup>
        </div>

        <div className="flex items-center gap-4">
          <WatchProjectBtn />
          <TalkAboutProject />
        </div>
      </div>
    </header>
  );
}

export default Header;
