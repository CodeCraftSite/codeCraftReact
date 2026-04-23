import { Link } from "react-scroll";
import TalkAboutProject from "./TalkAboutProject";
import { Button } from "./ui/button";
import { ButtonGroup } from "./ui/button-group";
import WatchProjectBtn from "./WatchProjectBtn";

function Header() {
  const buttons = [
    { name: "Продукты", href: "product" },
    { name: "Услуги", href: "services" },
    { name: "Витрина", href: "showcase" },
    { name: "Процесс", href: "process" },
    { name: "Экспертиза", href: "capatabilies" },
    { name: "Контакты", contacs },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gray-800 text-white">
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
                asChild
              >
                <Link
                  to={button.href}
                  smooth={true}
                  duration={500}
                  offset={-96}
                >
                  {button.name}
                </Link>
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
